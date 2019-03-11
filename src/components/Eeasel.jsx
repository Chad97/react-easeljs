import React, { Component } from 'react';
export default class Eeasel extends Component {
  constructor () {
      super ()
      this.startX = 0;
      this.startY = 0;
      this.rects = [];
      this.shapes = [];
      this.status = "none";
      this.currentShape = null;
      
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

    this.props.onRef(this)
  }

  onStageMouseDown(e){
    this.status = "drawing";
    this.currentShape = new window.createjs.Shape();
    this.currentShape.graphics.beginFill("red")
    this.currentShape.alpha = 0.5
    this.stage.addChild(this.currentShape);
    this.startX = e.stageX;
    this.startY = e.stageY;
  }

  onStageMouseMove(e){
    if(this.status !== "drawing") return;
    this.currentShape.graphics.drawRect(this.startX, this.startY, e.stageX - this.startX, e.stageY - this.startY);
  }

  onStageMouseUp(e){
    this.staus = "none";
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
      this.stage.removeChildAt(0)
      this.rects.shift()
      console.log(this.rects)
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





