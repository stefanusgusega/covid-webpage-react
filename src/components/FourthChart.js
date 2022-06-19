import Chart from './Chart'

export class FourthChart extends Chart {
  generateApiUrl() {
    return 'http://localhost:4000/third'
  }

  generateChartOption() {
    const { items } = this.state

    return {
        title: [
          {
            text: 'Elderly Population Ratio of Top Five Cities'
          }
        ],
        polar: {
            radius: [15, '80%']
        },
        angleAxis: {
            startAngle: 75,
            type: 'category',
            data: items.map((item) => {
                return item['complete_city']
            }).reverse()
        },
        radiusAxis: {
            max: 25,
        },
        tooltip: {},
        series: {
            type: 'bar',
            data: items.map((item) => {
                return item['elderly_population_ratio']
            }).reverse(),
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'middle',
            },
            // barWidth: '25%',
            barGap: '-50%'
        }
      };
  }
}

export default FourthChart