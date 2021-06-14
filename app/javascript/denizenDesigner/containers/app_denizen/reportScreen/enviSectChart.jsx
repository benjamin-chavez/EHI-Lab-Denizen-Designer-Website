import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';

class EnviSectChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Government',
          'Nonprofit',
          'Academic/University',
          'Independent Consulting',
          'Foundation',
          'For Profit/Industry',
        ],
        datasets: [
          {
            label: 'Both',
            data: [27.7, 19.4, 12.5, 13.2, 46.2, 17.1],
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
          },
          {
            label: 'Online',
            data: [0, 1.6, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Rural',
            data: [5.6, 0, 2.5, 0, 0, 0, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Suburban, College Campus Outside of Major US City',
            data: [0, 0, 2.5, 0, 0, 0, 0],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
          {
            label: 'Urban',
            data: [66.7, 77.4, 82.5, 84.2, 53.8, 82.9],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'Urban, Rural, Both Domestically and Internationally',
            data: [0, 1.6, 0, 2.6, 0, 0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayLegend: false,
    legendPosition: 'top',
  };

  render() {
    return (
      <div className='chart-styling-outer-div'>
        <div className='chart-styling'>
          <article className=''>
            <Bar
              className='canvas-container'
              data={this.state.chartData}
              options={{
                plugins: {
                  align: 'center',

                  legend: {
                    display: this.props.displayLegend,
                    position: 'bottom',
                  },
                },

                responsive: true,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
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

export default EnviSectChart;

// export default enviSectChart;
