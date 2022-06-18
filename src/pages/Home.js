import React, { Component } from 'react'
import { Layout } from 'antd';
import MenuBar from '../components/MenuBar';
import { FixedFooter } from '../components/FixedFooter';

const {Content} = Layout; 

export class Home extends Component {
    render() {
        
        return (
            <>
                <MenuBar current='home'/>
                <Content style={{
                    "padding" : "25px 50px"
                }}>
                    Welcome home {this.props.name}!
                </Content>
                <FixedFooter />
            </>
        )
    }
}

export default Home