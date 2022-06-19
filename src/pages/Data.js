import { Content } from 'antd/lib/layout/layout'
import React, { Component } from 'react'
import FirstChart from '../components/FirstChart'
import { FixedFooter } from '../components/FixedFooter'
import FourthChart from '../components/FourthChart'
import MenuBar from '../components/MenuBar'
import SecondChart from '../components/SecondChart'
import ThirdChart from '../components/ThirdChart'

export class Data extends Component {
  render() {
    return (
      <>
        <MenuBar current='data' />
        <Content style={{
            'padding' : '25px 50px'
        }}>
            <div className='grid grid-cols-2 gap-6 content-center'>
                <FirstChart />
                <SecondChart />
            </div>
            <div className='grid grid-cols-2 gap-6 content-center'>
                <ThirdChart />
                <FourthChart />
            </div>
        </Content>
        <FixedFooter />
      </>
    )
  }
}

export default Data