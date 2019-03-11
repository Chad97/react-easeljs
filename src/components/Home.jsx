import React from 'react'
import { Layout, Breadcrumb, Button } from 'antd';
import Photo from './Photo';
const {  Content, Footer } = Layout



export default class Home extends React.Component {
    constructor (props) {
        super()
        this.state = {
            //Content 样式
            homestyle: { background: '#fff', padding: 24, minHeight: '90%', height: '100%' },
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

    onRef = (ref) => {
        this.child = ref
    }
    remove = () => {
        this.child.p_removeEasel()
    }


    render () {
        return <div style={ {height: '100%'} }>
            
            <Layout style={ {height: '100%'} } className="layout"   >
                <Content style={{ padding: '0 20px' }}>
                <Breadcrumb style={{ margin: '5px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div  style={ this.state.homestyle }>

                    <div style={ { display:'flex',flex: 'inherit', justifyContent: 'start'} }>
                    {/* 上传按钮 */}
                    <input type="file" ref="myinput" accept = "image/*" onChange = {this.selectFile.bind(this)} />
                    <Button size="small" type="primary">提交上传</Button>
                    <Button onClick={this.remove} size="small" type="danger" style={ {marginLeft: '4em'}}  >清除绘画</Button>
                    </div>
                    <Photo onRef={this.onRef}  data={this.state.imgdata}></Photo>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>,
        </div>
    }
    
}