import React, { Component } from 'react';

import { Doughnut, Line, Pie } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';

class GenderChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Man',
          'Women',
          'Transgender Man',
          'Transgender Women',
          'Gender variant / nonconforming',
          'Nonbinary',
          'Prefer not to answer',
          'Other',
        ],
        datasets: [
          {
            label: 'Population',
            data: [26, 63, 1, 0, 4, 7, 0, 3],
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
    legendPosition: 'top',
  };

  render() {
    return (
      <div className='chart-styling-outer-div'>
        <div className='chart-styling'>
          <article className=''>
            <Doughnut
              className='canvas-container'
              data={this.state.chartData}
              options={{
                plugins: {
                  align: 'center',
                  title: {
                    display: this.props.displayTitle,
                    text: 'Demographics of the Denizen Designers',
                    fontSize: 25,
                  },
                  legend: {
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

export default GenderChart;
