import React from 'react'
import Photo from './Photo'

import { Layout, Breadcrumb } from 'antd';
const {  Content, Footer } = Layout



export default class Home extends React.Component {
    constructor (props) {
        super()
        this.state = {
            //Content 样式
            homestyle: { background: '#fff', padding: 24, minHeight: '90%', height: '100%' },
            data1: '123',
            imgdata: ''
        }
        
    } 

    //获取图片
    selectFile () {
        var thet = this
        //console.log(this.refs.myinput.files[0])
        const file = this.refs.myinput.files[0]
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function(f) {
            var src = "data:" + file.type + ";base64," + window.btoa(this.result);
            thet.setState({imgdata: src})
        }
        //console.log(this.state.imgdata)
    }
    
    render () {
        return <div style={ {height: '100%'} }>
            
            <Layout style={ {height: '100%'} } className="layout"   >
                <Content style={{ padding: '0 20px' }}>
                <Breadcrumb style={{ margin: '5px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div  style={ this.state.homestyle }>

                    {/* 上传按钮 */}
                    <input type="file" ref="myinput" accept = "image/*" onChange = {this.selectFile.bind(this)} />
                    <Photo data1={this.state.data1} data={this.state.imgdata}></Photo>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>,
        </div>
    }
    
}