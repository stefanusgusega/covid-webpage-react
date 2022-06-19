import Chart from './Chart'

export class FirstChart extends Chart {
    generateChartOption() {
        const { items } = this.state;

        return {
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
    }

    generateApiUrl() {
        return 'http://localhost:4000/first'
    }
}

export default FirstChart