import React, { Component } from 'react';
export default class Eeasel extends Component {
  constructor () {
      super ()
      this.startX = 0;
      this.startY = 0;
      this.rects = [];//矩形
      this.shapes = [];//实例对象
      this.status = "none";
      this.currentShape = null;
      this.oldrects = true //删除前的矩形
      this.DownState = true //按键状态节流  
  }

  componentDidMount () {
    this.canvas.width = 1000;
    this.canvas.height = 1000;

    this.stage = new window.createjs.Stage(this.canvas);
    window.createjs.Ticker.setFPS(60);
    window.createjs.Ticker.addEventListener("tick", this.onEnter.bind(this));
    this.stage.addEventListener("stagemousedown", this.onStageMouseDown.bind(this));
    this.stage.addEventListener("stagemousemove", this.onStageMouseMove.bind(this));
    this.stage.addEventListener("stagemouseup", this.onStageMouseUp.bind(this));
    //参考 DragAndDrop_hitArea
    this.stage.addEventListener("pressmove", this.onStagepressmove.bind(this));
    this.props.onRef(this)
  }

  onStageMouseDown(e){
    this.status = "drawing";
    this.DownState = true;
    this.currentShape = new window.createjs.Shape();
    this.currentShape.graphics.beginFill("red")
    this.currentShape.alpha = 0.2
    this.stage.addChild(this.currentShape);
    this.startX = e.stageX;
    this.startY = e.stageY;
  }

  onStageMouseMove(e){
    if (!this.DownState) return;
    if(this.status !== "drawing") return;
    this.currentShape.graphics.drawRect(this.startX, this.startY, e.stageX - this.startX, e.stageY - this.startY);
  }

  onStageMouseUp(e){
    this.staus = "none";
    if (!this.DownState) return;
    this.currentShape.graphics.drawRect(this.startX, this.startY, e.stageX - this.startX, e.stageY - this.startY);
    this.currentShape.graphics.endFill();
    this.rects.push({
      x: this.startX,
      y: this.startY,
      width: e.stageX - this.startX,
      height: e.stageY - this.startY
    });
    this.shapes.push(this.currentShape); 
  }

  onEnter(){
    this.stage.update();
  }

  //清除画布
  removeEasel = () => {
      this.delAll()
  }
  delAll = () => {
    for (let i = 0;i<this.shapes.length;i++) {
      this.stage.removeChildAt(0)
    }
    this.rects.splice(0,this.rects.length);
    this.shapes.splice(0,this.shapes.length);
    console.log(this.rects)
  }

  del = () => {
    if (this.oldrects == "") return;
    this.oldrects = this.rects.shift()
    this.oldrects = this.shapes.shift()
    console.log(this.oldrects)
    this.stage.removeChildAt(0)
    console.log('rects：' + this.rects +'---'+'shapes：'+this.shapes)
  }

  forward = () => {
    if (this.oldrects == undefined) {
      return false
    }
    this.currentShape = new window.createjs.Shape();
    this.currentShape.graphics.beginFill("red")
    this.currentShape.alpha = 0.1
    this.currentShape.graphics.drawRect(this.oldrects.x, this.oldrects.y, this.oldrects.width, this.oldrects.height);
    this.currentShape.graphics.endFill();
    // this.shapes.push(this.currentShape);
    // this.rects.push(rect);
    this.stage.addChild(this.currentShape);
  }

  onStagepressmove(evt) {
    console.log(evt)
    this.DownState = false;
    evt.target.x = evt.stageX - this.startX
    evt.target.y = evt.stageY - this.startY

  }

  render() {
    return (
      <div  style={ {position:"absolute", zIndex:"99"} }>
        <canvas
          ref={(ref) => this.canvas = ref}
          onMouseDown={this.myDown}
          onMouseUp={this.myUp}
          onMouseMove={this.myMove}
        />
      </div>
    )
  }
}





