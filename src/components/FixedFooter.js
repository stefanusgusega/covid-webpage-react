import React, { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export class FixedFooter extends Component {
  render() {
    return (
      <>
        <Footer className='text-center'>
            Created by Stefanus Gusega Gunawan
        </Footer>
      </>
    )
  }
}

export default Footer