import React, { Component } from 'react'
import MenuBar from '../components/MenuBar'
import { Button, Layout } from 'antd';
import { FixedFooter } from '../components/FixedFooter';
import { GithubOutlined } from '@ant-design/icons';

const {Content} = Layout; 


export class Codes extends Component {
  render() {
    return (
        <>
            <MenuBar current='codes' />
            <Content style={{
                "padding" : "25px 50px"
            }}>
                <div className="site-layout-content text-2xl text-center">
                    You can access the code for this website in this three repositories
                    <div className='py-6'>
                        <Button href='https://github.com/stefanusgusega/covid-webpage-react' type='primary' icon={<GithubOutlined />} shape='round' size='large' className='text-black mb-1'>
                            COVID-19 Webpage React by stefanusgusega
                        </Button> <br />
                        <Button href='https://github.com/stefanusgusega/covid-webpage-backend' type='primary' icon={<GithubOutlined />} shape='round' size='large' className='text-black my-2'>
                            COVID-19 Webpage Backend by stefanusgusega
                        </Button> <br />
                        <Button href='https://github.com/stefanusgusega/covid-data-analysis' type='primary' icon={<GithubOutlined />} shape='round' size='large' className='text-black mt-1'>
                            COVID-19 Data Analysis by stefanusgusega
                        </Button>
                    </div>
                </div>

            </Content>
            <FixedFooter />
        </>
    )
  }
}

export default Codes