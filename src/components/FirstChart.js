import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

export class FirstChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            isDataLoaded: false
        }
    }

    componentDidMount() {
        const api_url = 'http://localhost:4000/first'
        // const api_url = `${process.env.API_HOST}:${process.env.API_PORT}`;
        fetch(api_url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isDataLoaded: true
                })
            })
        
        // console.log(this.state.isDataLoaded)

    }
    render() {
        const { isDataLoaded, items } = this.state;

        
        if (!isDataLoaded) {
            return (
                <>
                    <p>
                        Fetching the data...
                    </p>
                </>
            )
        }

        console.log(items.map((item) => {
            return item['type'];
        }).reverse())
        
        const option = {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '8%',
                containLabel: true
            },
            yAxis: {
                type: 'category',
                data: items.map((item) => {
                    return item['type'];
                }).reverse(),
                name: 'Policy Type',
                nameLocation: 'middle',
                nameGap: 110,
                
            },
            xAxis: {
                type: 'value',
                name: 'Average day(s)',
                nameLocation: 'middle',
                nameGap: 25,
                axisLabel : {
                    formatter: '{value} day(s)'
                },
            },
            series: {
                type: 'bar',
                data: items.map((item) => {
                    return item['duration'].toFixed(2)
                }).reverse(),
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                },
            },
            title: {
                text: 'Average COVID-19 Policy Duration In Days'
            },
            visualMap: {
                min: 0,
                max: 7,
                show: false,
                color: ['#ff0000','#ff00ff'] // start and end colors for gradient 
            },
        }
        return (
        <>
            <ReactEcharts option={option} />
        </>
        )
    }
}

export default FirstChart