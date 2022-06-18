import React, { Component } from 'react'
import { Layout, Menu } from 'antd';

const {Header, Content, Footer} = Layout; 

export class Home extends Component {
    render() {
        const items = [
            { label: 'Home', key: 'home' }, // remember to pass the key prop
            { label: 'Data', key: 'data' }, // which is required
            { label: 'About me', key: 'about' }, // which is required
          ];
        return (
            <>
                <Header>
                    <div className="relative">
                        <p className='py-4 text-white text-2xl font-bold absolute left-0'>
                            COVID-19 Dashboard
                        </p>
                        <Menu 
                            mode='horizontal' 
                            theme='dark' 
                            items={items} 
                            className="absolute inset-y-0 right-0"
                        />
                    </div>
                </Header>
                <Content style={{
                    "padding" : "25px 50px"
                }}>
                    Welcome home {this.props.name}!
                </Content>
                <Footer className='text-center'>
                    Created by Stefanus Gusega Gunawan
                </Footer>
            </>
        )
    }
}

export default Home