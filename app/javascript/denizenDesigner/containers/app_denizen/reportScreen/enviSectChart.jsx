import React, { Component } from 'react';

import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';

class EnviSectChart extends Component {
  constructor(props) {
    super(props);
    // this.DATA_COUNT = 7;
    // this.NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    // this.labels = Utils.months({ count: 7 });
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
        // datasets: [
        //   {
        //     label: 'Population',
        //     data: [26, 63, 1, 0, 4, 7, 0, 3],
        //     backgroundColor: [
        //       'rgba(255, 99, 132, 0.6)',
        //       'rgba(54, 162, 235, 0.6)',
        //       'rgba(255, 206, 86, 0.6)',
        //       'rgba(75, 192, 192, 0.6)',
        //       'rgba(153, 102, 255, 0.6)',
        //       'rgba(255, 159, 64, 0.6)',
        //       'rgba(252, 2, 40, 0.8)',
        //       'rgba(21, 0, 255, 0.9)',
        //     ],
        //   },
        // ],
        datasets: [
          {
            label: 'Both',
            data: [13, 30, 13, 13, 15, 18, 0],
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
          },
          {
            label: 'Online',
            data: [0, 100, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Rural',
            data: [50, 0, 50, 0, 0, 0, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'suburban, college campus outside of major US city',
            data: [0, 0, 100, 0, 0, 0, 0],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
          {
            label: 'Urban',
            data: [7, 29, 20, 19, 4, 20, 0],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'urban, rural, both domestically and internationally',
            data: [0, 50, 0, 50, 0, 0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
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
                  title: {
                    display: this.props.displayTitle,
                    // text: 'Need New Title',
                    fontSize: 25,
                  },
                  legend: {
                    position: 'right',
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
