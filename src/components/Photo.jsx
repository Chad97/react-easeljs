import React from 'react'
export default class Photo extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            s1: '',
            s2: '',
            e1: '',
            e2: '',
            m1: '',
            m2: '',
            btn: true
        }

    }
    componentDidMount() {
        this.refs.can.width='1000.5'
        this.refs.can.height='1000.5'
    }
    myDown = (e) =>{
        //console.log(e.nativeEvent.offsetX)
        //console.log(e.nativeEvent.offsetX)
        this.setState({s1:e.nativeEvent.offsetX,s2:e.nativeEvent.offsetY, btn: true})

        // if (this.state.btn == true) {
        //     clearInterval(t1);
        //     console.log('清楚了')
        // }

        // const t1 = setInterval(() =>{
        //     var myCanvas = this.refs.can
        //     var ctx = myCanvas.getContext('2d');
        //     ctx.strokeStyle = "red";  //图形边框的填充颜色
        //     ctx.lineWidth = 1;  //用宽度为 1 像素的线条来绘制矩形：
        //     let ww = this.state.m1 - this.state.s1
        //     let hh = this.state.m2 - this.state.s2
        //     console.log(ww +'---'+ hh)
        //     ctx.strokeRect(this.state.s1,this.state.s2,ww,hh);  //绘制矩形（无填充）
        //     ctx.clearRect(this.state.s1,this.state.s2,ww,hh);  //绘制矩形（无填充）
        // }, 30);
        
  
    }
    myMove = (e) => {
        console.log(e.nativeEvent.offsetX)
        console.log(e.nativeEvent.offsetY)
        this.setState({m1: e.nativeEvent.offsetX, m2: e.nativeEvent.offsetY}, () => {
            
        })
        
    }
    myUp = (e) =>{
        //console.log(e.nativeEvent.offsetX)
        //console.log(e.nativeEvent.offsetY)
        this.setState({e1:e.nativeEvent.offsetX, e2:e.nativeEvent.offsetY, btn: false },() => {
            var myCanvas = this.refs.can
            var ctx = myCanvas.getContext('2d');
            ctx.strokeStyle = "red";  //图形边框的填充颜色
            ctx.lineWidth = 1;  //用宽度为 1 像素的线条来绘制矩形：
            let ww = this.state.e1 - this.state.s1
            let hh = this.state.e2 - this.state.s2
            console.log(ww +'---'+ hh)
            ctx.strokeRect(this.state.s1,this.state.s2,ww,hh);  //绘制矩形（无填充）

        })
        
        
    }

    render () {
        return <div ref="div" style={ {border:'1px solid #ccc', minWidth: '500px' ,width:'40%', minHeight: '750px' , height:'90%',margin: '5px 17%', position: 'relative', overflow: 'hidden' } } >
            <img onChange={this.Setphoto} style={ {width:'100%',height:'100%',position: 'absolute'} } src={this.props.data} />
            <canvas id="canvas" ref="can" onMouseDown={this.myDown} onMouseUp={this.myUp} onMouseMove={this.myMove} style={ { position: 'absolute'} } ></canvas>
        </div>
    }
}
