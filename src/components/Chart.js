import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

export class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            isDataLoaded: false
        }

        this.apiUrl = this.generateApiUrl()
    }

    generateApiUrl() {
        throw new Error("Method 'generateApiUrl()' must be implemented.");
    }

    generateChartOption() {
        throw new Error("Method 'generateChartOption' must be implemented.");
    }

    componentDidMount() {
        fetch(this.apiUrl)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isDataLoaded: true
                })
            })

    }
    render() {
        const { isDataLoaded } = this.state;

        
        if (!isDataLoaded) {
            return (
                <>
                    <p>
                        Fetching the data...
                    </p>
                </>
            )
        }
    
        return (
        <>
            <ReactEcharts option={this.generateChartOption()} />
        </>
        )
    }
}

export default Chart