import React, { Component } from 'react'
import { Button, Carousel } from 'antd'

export class FixedCarousel extends Component {
  render() {
    return (
      <>
        <Carousel autoplay>
            <div>
                <div className='background-carousel-1'>
                    <div className='text-5xl font-extrabold text-black py-4'>
                        Welcome to Stefanus COVID-19 Dashboard!
                    </div>
                    <div className="font-medium py-6 text-4xl">
                        Take a look at the data page to see data visualization about 
                        certain analysis of COVID-19 occurrence at South Korea.
                    </div>
                    <Button href="/data" type="primary" shape="round" size='large' className='my-4'>
                        Go to Data Page
                    </Button>
                </div>
            </div>
            <div>
                <div className='background-carousel-2 text-5xl py-4 font-extrabold text-black'>
                    <div className='text-5xl font-extrabold text-black py-4'>
                        Full Data
                    </div>

                    <div className="font-medium py-6 text-4xl">
                        For further analysis, you can access the dataset from the Kaggle.
                    </div>

                    <Button href="https://www.kaggle.com/kimjihoo/coronavirusdataset" type="primary" shape="round" size='large' className='my-6'>
                        Go to Kaggle
                    </Button>
                </div>
            </div>
        </Carousel>
      </>
    )
  }
}

export default FixedCarousel