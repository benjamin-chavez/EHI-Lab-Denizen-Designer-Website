import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { Row, Col, Card, Container } from 'react-bootstrap';
// yarn add react-masonry-layout
import MasonryLayout from 'react-masonry-layout';

import { fetchQuotes } from '../../actions';

import QuoteHooks from './QuoteHooks';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class QuotesIndex extends Component {
  componentWillMount() {
    this.props.fetchQuotes();
  }

  // renderQuotes() {
  //   return this.props.quotes.map((quote) => {
  //     return (
  //       <div>
  //         <div className='denizen-quote-card'>
  //           <div className='denizen-quote-body'>
  //             "{quote.quote_body}"
  //             <div className='denizen-quote-author'>{quote.participant_id}</div>
  //             {/* <h1>{quote.participant_id == 1 ? 'hello' : 'no'}</h1> */}
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  renderQuotes() {
    return (
      <div>test</div>
      // <div>
      //   {/* <QuoteHooks /> */}
      //   {/* <Row className='justify-content-center'>
      //     <Col md='auto'> */}
      //   {/* <div className='quote-list'>{this.renderQuotes()}</div> */}
      //   {/* <div className=''>{this.renderQuotes()}</div> */}
      //   <div className='quote-list'>
      //     <MasonryLayout
      //       id='masonry-layout'
      //       infiniteScroll={this.loadItems}
      //       sizes={sizes}
      //     >
      //       {this.props.quotes.map((v, i) => {
      //         let height = i % 2 === 0 ? 200 : 100;
      //         return (
      //           <div
      //             key={i}
      //             style={{
      //               width: '340px',
      //               // display: 'flex',
      //               // flexWrap: 'wrap',
      //               // // list-style: 'none',
      //               justifyContent: 'space-around',
      //             }}
      //           >
      //             <div className='denizen-quote-card'>
      //               <div className='denizen-quote-body'>
      //                 "{v.quote_body}"
      //                 <div className='denizen-quote-author'>
      //                   {v.participant_id}
      //                 </div>
      //                 {/* <h1>{quote.participant_id == 1 ? 'hello' : 'no'}</h1> */}
      //               </div>
      //             </div>
      //           </div>
      //         );
      //       })}
      //     </MasonryLayout>
      //   </div>
      //   {/* </Col>
      //   </Row> */}
      // </div>
    );
  }
  shuffledArray = shuffleArray(this.props.quotes);

  render() {
    const sizes = [
      { columns: 1, gutter: 30 },
      { mq: '576px', columns: 1, gutter: 30 },
      { mq: '768px', columns: 2, gutter: 30 },
      { mq: '992px', columns: 2, gutter: 30 },
      { mq: '1200px', columns: 3, gutter: 30 },
      { mq: '1400px', columns: 3, gutter: 30 },
    ];
    return (
      <div>
        {/* <QuoteHooks /> */}
        {/* <Row className='justify-content-center'>
          <Col md='auto'> */}
        {/* <div className='quote-list'>{this.renderQuotes()}</div> */}
        {/* <div className=''>{this.renderQuotes()}</div> */}
        <div className='quote-list'>
          <MasonryLayout
            id='masonry-layout'
            infiniteScroll={this.loadItems}
            sizes={sizes}
          >
            {this.shuffledArray.map((v, i) => {
              let height = i % 2 === 0 ? 200 : 100;
              return (
                <div
                  key={i}
                  style={{
                    width: '340px',
                    // display: 'flex',
                    // flexWrap: 'wrap',
                    // // list-style: 'none',
                    justifyContent: 'space-around',
                  }}
                >
                  <div className='denizen-quote-card'>
                    <div className='denizen-quote-body'>
                      "{v.quote_body}"
                      <div className='denizen-quote-author'>
                        {v.participant_id}
                      </div>
                      {/* <h1>{quote.participant_id == 1 ? 'hello' : 'no'}</h1> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </MasonryLayout>
        </div>
        {/* </Col>
        </Row> */}
      </div>
      // <div>
      //   <div>{this.renderQuotes()}</div>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuotes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesIndex);
