import Chart from './Chart'

export class ThirdChart extends Chart {
  generateApiUrl() {
    return 'http://localhost:4000/third'
  }

  generateChartOption() {
    const { items } = this.state

    return {
        tooltip: {
            trigger: 'item'
        },
        title: {
            text: 'Top Five Cities of Confirmed COVID-19 Cases',
        },
        legend: {
            bottom: '0%',
            right: '10',
            orient: 'vertical'
        },
        series: [
            {
              name: 'City',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              labelLine: {
                show: true
              },
              data: items.map((item) => {
                return {value: item['confirmed'], name: item['complete_city']}
              })
            }
        ]
    }
  }
}

export default ThirdChart