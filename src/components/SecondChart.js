import Chart from './Chart'

export class SecondChart extends Chart {
  generateApiUrl() {
    return 'http://localhost:4000/second'
  }

  generateChartOption() {
    const { items } = this.state;

    const usedItems = items.filter((item) => {
        return item['age'] !== 'unknown' && item['sex'] !== 'unknown'
    })

    return {
        title: {
            text: 'Number of Patients in Seoul based on Sex and Age'
        },
        legend: {
            bottom: '15%'
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '8%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
        },
        yAxis: {
            type: 'category',
            data: usedItems.filter((element, index, array) => {
                return (index % 2 === 0)
            }).map((item) => {
                return item['age']
            }),
            name: 'Age',
            nameLocation: 'middle',
            nameGap: 30,
            
        },
        xAxis: {
            type: 'value',
            name: 'Patient Count',
            nameLocation: 'middle',
            nameGap: 25,
            axisLabel : {
                formatter: '{value} people'
            },
        },
        series: [
            {
                type: 'bar',
                data: usedItems.filter((element) => {
                    return (element['sex'] === 'male')
                }).map((item) => {
                    return item['count']
                }),
                name: 'Male'
            },
            {
                type: 'bar',
                data: usedItems.filter((element) => {
                    return (element['sex'] === 'female')
                }).map((item) => {
                    return item['count']
                }),
                name: 'Female'
            },
        ],
    }
  }
}

export default SecondChart