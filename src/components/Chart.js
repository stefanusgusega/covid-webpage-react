import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

export class Chart extends Component {
  render() {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
    }
    return (
      <>
        <ReactEcharts option={option} />
      </>
    )
  }
}

export default Chart