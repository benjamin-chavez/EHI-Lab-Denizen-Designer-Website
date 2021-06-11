import React, { Component } from 'react';

import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

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
          <div id=''>
            {/* <iframe
              width='698.1827830188679'
              height='305.5'
              seamless
              frameborder='0'
              scrolling='no'
              src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSj-c0VL15uZa6dSa-0GXJbfZ7lrmIO3cGpQciUjWJgyX3onnlesVFclucRVKejlctPIFwJtRDxG3Rg/pubchart?oid=1200789362&amp;format=interactive'
            ></iframe> */}

            {/* <iframe
                class='embed-responsive-item'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSj-c0VL15uZa6dSa-0GXJbfZ7lrmIO3cGpQciUjWJgyX3onnlesVFclucRVKejlctPIFwJtRDxG3Rg/pubchart?oid=1200789362&amp;format=interactive'
              ></iframe>
             */}
            {/* <div style={{ width: 'auto', height: 'auto' }}>
              <ResponsiveEmbed aspectRatio='1by1' bsPrefix='embed-responsive'>
                <embed
                  type='image/svg+xml'
                  src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSj-c0VL15uZa6dSa-0GXJbfZ7lrmIO3cGpQciUjWJgyX3onnlesVFclucRVKejlctPIFwJtRDxG3Rg/pubchart?oid=1200789362&amp;format=interactive'
                />
              </ResponsiveEmbed>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default EnviSectChart;

// export default enviSectChart;
