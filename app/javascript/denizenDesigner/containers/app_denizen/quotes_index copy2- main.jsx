import React, { useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { Row, Col, Card, Container, Modal, Button } from 'react-bootstrap';
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

  state = {
    isOpen: false,
    quote: '',
    name: 'firstName lastName',
    role: 'Designer',
  };

  renderQuotes() {
    return <div>test</div>;
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
    const { isOpen } = this.state;
    const { quote } = this.state;
    const { name } = this.state;
    const { role } = this.state;

    return (
      <div>
        <Modal show={isOpen} size='lg' centered className='quote-modal'>
          <Modal.Body>
            <Row className='justify-content-center pb-1'>
              {/* <Col sm={12} md={2}> */}
              <Button
                variant='light'
                onClick={() => this.setState({ isOpen: !isOpen })}
                onMouseDown={(e) => e.preventDefault()}
                className='close-button'
              >
                close
              </Button>
              {/* </Col> */}
            </Row>
            <Row className='justify-content-center pb-1'>
              <Col>
                <p className='modal-quote-body'>"{quote}"</p>
              </Col>
            </Row>
            <Row className='justify-content-center pb-2'>
              <span className='modal-name px-3'>{name}</span>
            </Row>
            <Row className='justify-content-center pb-1'>
              <span className='modal-role'>{role}</span>
            </Row>
            {/* <Modal.Body id='contained-modal-title-vcenter'>{quote}</Modal.Body> */}
          </Modal.Body>
        </Modal>

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
                    justifyContent: 'space-around',
                  }}
                >
                  <div
                    className='denizen-quote-card'
                    onClick={() =>
                      this.setState({
                        isOpen: !isOpen,
                        quote: v.quote_body,
                        // name: v.participant_id,
                        // role: v.participant_id,
                      })
                    }
                  >
                    <div className='denizen-quote-body'>
                      "{v.quote_body}"
                      <div className='denizen-quote-author'>
                        {v.participant_id}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </MasonryLayout>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quoteData: state.quote,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesIndex);
