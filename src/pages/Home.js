import React, { Component } from 'react'
import { Layout } from 'antd';
import MenuBar from '../components/MenuBar';
import { FixedFooter } from '../components/FixedFooter';
import FixedCarousel from '../components/FixedCarousel';

const {Content} = Layout; 

export class Home extends Component {
    render() {
        
        return (
            <>
                <MenuBar current='home'/>
                <Content style={{
                    "padding" : "25px 50px"
                }}>
                    <div className="site-layout-content text-center">
                        {/* Welcome to Stefanus COVID-19 Dashboard! */}
                        <FixedCarousel />
                    </div>
                </Content>
                <FixedFooter />
            </>
        )
    }
}

export default Home