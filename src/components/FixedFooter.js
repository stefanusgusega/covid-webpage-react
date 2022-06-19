import React, { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export class FixedFooter extends Component {
  render() {
    return (
      <>
        <Footer className='text-center'>
            <p>
              Created by Stefanus Gusega Gunawan
            </p>
            <a href="https://www.flaticon.com/free-icons/virus" title="virus icons">Virus icons created by kosonicon - Flaticon</a>
        </Footer>
      </>
    )
  }
}

export default Footer