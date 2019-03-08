import React from 'react'

export default class Photo extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            photoX:'',
            photoY:''
        }
    }

    myDown = (e) =>{
        console.log(e.nativeEvent.offsetX)
        console.log(e.nativeEvent.offsetY)
    }
    myUp = (e) =>{
        console.log(e.nativeEvent.offsetX)
        console.log(e.nativeEvent.offsetY)
    }

    render () {
        return <div style={ {border:'1px solid #ccc', minWidth: '500px' ,width:'40%', minHeight: '750px' , height:'90%',margin: '5px 17%', position: 'relative' } } >
            <img onChange={this.Setphoto} style={ {width:'100%',height:'100%',position: 'absolute'} } src={this.props.data} />
            <canvas ref="can" onMouseDown={this.myDown} onMouseUp={this.myUp} style={ {width:'100%',height:'100%', position: 'absolute'} } ></canvas>
        </div>
    }
}
