import React, { Component } from 'react'
import { Stage, Shape, handleTick} from "@createjs/easeljs";

const data = []

export default class Eeasel extends Component {

    constructor () {
        super ()
        this.state = {
            s1: 0,
            s2: 0,
            e1: 0,
            e2: 0,
            m1: 0,
            m2: 0,
            dw: 0,
        }
        
    }

  render() {
    return (
      <div>
        
        <canvas ref="myCanvas" id="myCanvas" onMouseDown={this.myDown} onMouseUp={this.myUp} onMouseMove={this.myMove} ></canvas>
      </div>
    )
  }

  componentDidMount () {
     this.refs.myCanvas.width = '1000'
     this.refs.myCanvas.height = '1000' 
  }

  mydraw = (x, y, w, h) =>{
    let stage = new Stage("myCanvas");
    let shape = new Shape();
    shape.graphics.beginFill("red").drawRect(x, y, w, h);
    stage.addChild(shape);
    stage.update();
  }
  
  myDown = (e) => {
    let s1 = e.nativeEvent.offsetX
    let s2 = e.nativeEvent.offsetY
    this.setState( { s1: s1, s2: s2, dw: this.state.dw+1 })
    
    
  }

  myMove = (e) => {
      let m1 = e.nativeEvent.offsetX
      let m2 = e.nativeEvent.offsetY
      this.setState( { m1: m1, m2: m2 } )

        data.map(item =>{
            //console.log(item.x, item.y, item.w, item.h)
            this.mydraw(item.x, item.y, item.w, item.h)
        })
  }

  myUp = (e) => {
    let e1 = e.nativeEvent.offsetX
    let e2 = e.nativeEvent.offsetY
    this.setState( { e1: e1, e2: e2 }, () => {
        let ww = this.state.e1 - this.state.s1
        let hh = this.state.e2 - this.state.s2
        data.push({x:this.state.s1, y:this.state.s2, w: ww, h: hh})
        console.log(data);
        
        //this.mydraw(this.state.s1,this.state.s2,ww,hh)
    } )
  }
  

}





