import React from 'react'
import Easel from './Eeasel'

export default class Photo extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
        }
    }
    componentDidMount () {
        this.props.onRef(this)
    }
    
    onRef = (ref) => {
        this.child = ref
    }

    p_removeEasel = (e) => {
        this.child.removeEasel()
    }

    render () {
        return <div ref="div" style={ {border:'1px solid #ccc', minWidth: '500px' ,width:'40%', minHeight: '750px' , height:'90%',margin: '5px 17%', position: 'relative', overflow: 'hidden' } } >
            <img onChange={this.Setphoto} style={ {width:'100%',height:'100%',position: 'absolute'} } src={this.props.data} />
            <Easel onRef={this.onRef} ></Easel>
        </div>
    }
}
