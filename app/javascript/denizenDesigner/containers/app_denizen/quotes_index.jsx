import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { Row, Col, Card, Container, Modal, Button } from 'react-bootstrap';
// delete: yarn add masonry-layout
// react-masonry-css
import Masonry from 'react-masonry-css';
// yarn add react-masonry-layout
import MasonryLayout from 'react-masonry-layout';
// import QuotesModal from './QuotesModal';
import { fetchQuotes } from '../../actions';

function QuotesIndex({ quoteData, fetchQuotes }) {
  useEffect(() => {
    fetchQuotes();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [curQuote, setCurQuote] = useState('');
  const [quoteOwner, setQuoteOwner] = useState('');
  const [ownerRole, setOwnerRole] = useState('');

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,

    // default: 4,
    // 1100: 3,
    // 700: 2,
    // 500: 1,
  };

  return quoteData.loading ? (
    <h2>Loading...</h2>
  ) : quoteData.error ? (
    <h2>{quoteData.error}</h2>
  ) : (
    <div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          size='lg'
          centered
          className='quote-modal'
        >
          <Modal.Body>
            <Row className='justify-content-center pb-1'>
              <Button
                variant='light'
                onClick={handleClose}
                onMouseDown={(e) => e.preventDefault()}
                className='close-button'
              >
                close
              </Button>
            </Row>
            <Row className='justify-content-center pb-1'>
              <Col>
                <p className='modal-quote-body'>"{curQuote}"</p>
              </Col>
            </Row>
            <Row className='justify-content-center pb-2'>
              <span className='modal-name px-3'>{quoteOwner}</span>
            </Row>
            <Row className='justify-content-center pb-1'>
              <span className='modal-role'>{ownerRole}</span>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
      {/* <QuotesModal /> */}
      {/* <div className='quote-list'> */}
      <div className=''>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          // breakpointCols={4}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {quoteData &&
            quoteData.quotes &&
            quoteData.quotes.map((quote) => (
              <div
                className=''
                style={{
                  width: '340px',
                  justifyContent: 'space-around',
                }}
              >
                <div
                  className='denizen-quote-card'
                  onClick={() => {
                    setCurQuote(quote.quote_body);
                    setQuoteOwner(quote.participant_id);
                    setOwnerRole('Designer Type');
                    handleShow();
                  }}
                >
                  <div className='denizen-quote-body'>
                    "{quote.quote_body}"
                    <div className='denizen-quote-author'>
                      {quote.participant_id}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Masonry>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quoteData: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesIndex);
