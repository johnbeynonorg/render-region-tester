import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart extends React.Component {
	constructor (props) {
    super(props)
		this.checkResponseTime.bind(this)

    this.state = {
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
		console.log("Updating...")
		console.log(this.state.chartOptions.series[0].data)
		let newData = this.state.chartOptions.series[0].data.concat(this.checkResponseTime())

		// this.setState(prevState => ({
		// 	chartOptions: {
		// 		series: [{
		// 			data: { ...prevState.chartOptions.series[0], newData}
		// 		}]
		// 	}
		// }));

		this.setState({ chartOptions: {
			...this.state.chartOptions,
			series: [{
					data: newData
			}]
		}});

		// this.setState({
		// 	chartOptions: {
		// 		series: [{
		// 			data:  newData
		// 		}]
		// 	}}
		// )
	}

	componentDidMount() {
		setInterval(() => this.update(), 5000)
		//this.update()
	}


  render() {
    return (
      <div>
				<h2>{this.props.region}</h2>
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