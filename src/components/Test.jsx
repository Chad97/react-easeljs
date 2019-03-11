import React from 'react';
import { render } from 'react-dom';

export default class test extends React.Component  {
    constructor(props) {
        super(props);
        
    }

    componentDidMount () {
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.stage = new window.createjs.Stage(this.canvas);
        window.createjs.Ticker.setFPS(60);
        window.createjs.Ticker.on('tick', this.stage)//舞台自动更新
        let rect = new window.createjs.Shape();
        rect.graphics.beginFill("#f00").drawRect(0, 0, 100, 100);
        this.stage.addChild(rect)
        function loop () {
            rect.x++
            if(rect.x == 100) {
                rect.x = 0
            } 
            requestAnimationFrame(loop);
        }
        loop ()

        
    }

    render () {
        return <div>
            123
            <canvas ref={(ref) => this.canvas = ref}></canvas>
        </div>
    }
    
}