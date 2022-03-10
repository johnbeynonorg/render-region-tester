import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const percentile = require("percentile");

class Chart extends React.Component {
	constructor (props) {
    super(props)
		this.checkResponseTime.bind(this)

    this.state = {
			min: 0,
			max: 0,
			p95: 0,
      chartOptions: {
				title: null,
				chart: {
					height: 100,
				},
				yAxis: {
					title: {
						text: "seconds"
					}
				},
				xAxis: {
					labels: {
						enabled: false
					}
				},
				legend: {
					enabled: false
				},
        series: [{
          data: []
        }],
      }
    }    
  }

	checkResponseTime() {
	  let time1 = performance.now();
    fetch(this.props.url);
    let time2 = performance.now();
    return time2 - time1;
	}

	update() {
		let newData = this.state.chartOptions.series[0].data.concat(this.checkResponseTime())
		
		if (newData.length > 50) {
			newData.shift()
		}

		this.setState({ 
			min: Math.min(...newData).toFixed(3), 
			max: Math.max(...newData).toFixed(3),  
			p95: percentile(95, newData).toFixed(3),
			chartOptions: {
			...this.state.chartOptions,
			series: [{
					data: newData
			}]
		}});
	}

	componentDidMount() {
		this.update()
		setInterval( () => this.update(), 2000)
	}

  render() {
    return (
      <div>
				<h2>{this.props.region}</h2>
				<p>min: {this.state.min}sec max: {this.state.max}sec p95: {this.state.p95}sec</p>
 				<div>
					<HighchartsReact
						highcharts={Highcharts}
						options={this.state.chartOptions}
					/>
				</div>
      </div>
    );
  }
}

export default Chart;