import { Content } from 'antd/lib/layout/layout'
import React, { Component } from 'react'
import FirstChart from '../components/FirstChart'
import { FixedFooter } from '../components/FixedFooter'
import MenuBar from '../components/MenuBar'

export class Data extends Component {
  render() {
    return (
      <>
        <MenuBar current='data' />
        <Content style={{
            'padding' : '25px 50px'
        }}>
            <FirstChart />
        </Content>
        <FixedFooter />
      </>
    )
  }
}

export default Data