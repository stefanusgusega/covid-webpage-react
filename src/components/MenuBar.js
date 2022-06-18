import React, { Component } from 'react'
import { Layout, Menu } from 'antd';

const {Header} = Layout; 

// TODO : navigation to other page
export class MenuBar extends Component {
  render() {
    const items = [
        { label: (
            <a href='/'>Home</a>
        ), key: 'home' }, // remember to pass the key prop
        { label: (
            <a href='/data'>Data</a>
        ), key: 'data' }, // which is required
        { label: (
            <a href='/about'>About me</a>
        ), key: 'about' }, // which is required
    ];
    return (
      <>
        <Header>
            <div className="relative">
                <a href='/' className='py-4 text-white text-2xl font-bold absolute left-0'>
                    COVID-19 Dashboard
                </a>
                <Menu 
                    mode='horizontal' 
                    theme='dark' 
                    items={items} 
                    className="absolute inset-y-0 right-0"
                    selectedKeys={[this.props.current]}
                />
            </div>
        </Header>
      </>
    )
  }
}

export default MenuBar