import React, { Component } from 'react';

import { Doughnut, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'White/Caucasion',
          'Asian',
          'Latina/Latina/Latinx/Hispanic',
          'Bi-/Multi-racial',
          'Black/African American',
          'Prefer not to say',
          'Native/Hawaiian',
          'Native American/FirstNations/First People',
        ],
        datasets: [
          {
            label: 'Population',
            data: [71, 36, 8, 5, 3, 3, 1, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(252, 2, 40, 0.8)',
              'rgba(21, 0, 255, 0.9)',
            ],
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
  };

  render() {
    return (
      <div>
        <div className='chart'>
          <Doughnut
            data={this.state.chartData}
            // width={100}
            // height={50}
            // options={{ maintainAspectRatio: false }}
            options={{
              plugins: {
                title: {
                  // display: true,
                  // text: 'Largest Cities In Massachusetts',
                  // fontSize: 25,
                  display: this.props.displayTitle,
                  text: 'Demographics of the Denizen Designers',
                  fontSize: 25,
                },
                legend: {
                  // display: true,
                  // position: 'right',
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
