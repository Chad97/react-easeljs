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
    this.currentShape = new window.createjs.Shape();
    this.currentShape.graphics.beginFill("red")
    this.currentShape.alpha = 0.1
    this.stage.addChild(this.currentShape);
    this.startX = e.stageX;
    this.startY = e.stageY;
    console.log(this.shapes)
  }

  onStageMouseMove(e){
    if(this.status !== "drawing") return;
    this.currentShape.graphics.drawRect(this.startX, this.startY, e.stageX - this.startX, e.stageY - this.startY);
  }

  onStageMouseUp(e){
    this.staus = "none";
    this.currentShape.graphics.drawRect(this.startX, this.startY, e.stageX - this.startX, e.stageY - this.startY);
    this.currentShape.graphics.endFill();
    // this.currentShape.addEventListener('pressmove', function (e) {
    //   alert('按下移动了')
    // })
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
    for (let i = 0;i<this.rects.length;i++) {
      this.stage.removeChildAt(0)
    }
    this.rects.splice(0,this.rects.length);//清空数组
    console.log(this.rects)
  }

  del = () => {
    if (this.oldrects == "") {
      return false
    }
    this.oldrects = this.rects.shift()
    console.log(this.oldrects)
    this.stage.removeChildAt(0)
    console.log(this.rects)
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

  onStagepressmove(e) {
    // this.stage.x= this.startX
    // this.stage.y= this.startY
    console.log(e)
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





