// See reportMain component for base component

import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class RaceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Black or African American',
          'White',
          'Hispanic or Latino',
          'Middle Eastern or Arab ',
          'Asian',
          'Carribean or West Indian',
          'others',
          'American indian/Alaskan',
        ],
        datasets: [
          {
            label: 'Population',
            data: [32.8, 23.7, 6.9, 2.3, 24.4, 1.5, 6.4, 2.3],
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
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'top',
  };

  render() {
    return (
      <div className='chart-styling-outer-div'>
        <div className='chart-styling'>
          <article className=''>
            <Pie
              className='canvas-container'
              data={this.state.chartData}
              // width={80}
              // height={50}
              // options={{ maintainAspectRatio: false }}
              // width={'100%'}
              // options={{ maintainAspectRatio: false }}
              options={{
                responsive: true,
                // maintainAspectRatio: false,
                plugins: {
                  align: 'center',
                  title: {
                    // display: true,
                    // text: 'Largest Cities In Massachusetts',
                    // fontSize: 25,
                    display: this.props.displayTitle,
                    // text: 'Demographics of the Denizen Designers',
                    fontSize: 25,
                  },
                  legend: {
                    // display: true,
                    position: 'right',
                    display: this.props.displayLegend,
                    position: 'bottom',
                  },
                },
              }}
            />
          </article>
        </div>
      </div>
    );
  }
}

export default RaceChart;
