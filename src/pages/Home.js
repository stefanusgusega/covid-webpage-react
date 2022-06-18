import React, { Component } from 'react'
import { Layout, Typography } from 'antd';

const {Header, Content, Footer} = Layout; 
const {Title} = Typography;

export class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header>
                    <Title type='danger' className='pt-2'>
                        COVID-19 Dashboard
                    </Title>
                </Header>
                <Content style={{
                    "padding" : "25px 50px"
                }}>
                    Welcome home {this.props.name}!
                </Content>
                <Footer style={{
                    "textAlign": "center"
                }}>
                    Created by Stefanus Gusega Gunawan
                </Footer>
            </>
        )
    }
}

export default Home