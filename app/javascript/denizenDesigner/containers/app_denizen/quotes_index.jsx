import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardColumns,
  Container,
  Modal,
  Button,
} from 'react-bootstrap';
// import Pagination from './pagination';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { fetchQuotes } from '../../actions';

import { fetchParticipants1 } from '../../actions';
import quotes from './quotes';

function QuotesIndex({
  quoteData,
  fetchQuotes,
  fetchParticipants1,
  quoteCategoryPath,
  participantsData,
}) {
  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    fetchParticipants1();
  }, []);

  useEffect(() => {}, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [curQuote, setCurQuote] = useState('');
  const [quoteOwner, setQuoteOwner] = useState('');
  const [ownerRole, setOwnerRole] = useState('');
  const [ownerID, setOwnerID] = useState('');
  const [fadeState, setfadeState] = useState(true);

  const lala = () => {
    return participantsData.loading
      ? console.log(
          // participantsData.participants1.find((item) => item.id === 1).first_name
          'nooooooooooooooooooooo'
        )
      : console.log(
          participantsData.participants1.find((item) => item.id === 1)
            .first_name
        );
  };

  // console.log('testing');
  // console.log(lala);
  // lala;

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
              <Link to={`/denizendesigner/interviews/${ownerID}`}>
                <span className='modal-name px-3'>{quoteOwner}</span>
              </Link>
            </Row>
            <Row className='justify-content-center pb-1'>
              <span className='modal-role'>{ownerRole}</span>
            </Row>
          </Modal.Body>
        </Modal>
      </div>

      <div className=''>
        {/* <p>{quote.first}</p> */}

        <CardColumns>
          {quoteData &&
            quoteData.quotes &&
            quoteData.quotes.map((quote) =>
              quoteCategoryPath == 'all_quotes' ||
              quote.categories.includes(quoteCategoryPath) ? (
                <div key={quote.id}>
                  <Fade bottom duration={1500} count={1}>
                    <Card
                      className='denizen-quote-card'
                      onClick={() => {
                        setCurQuote(quote.quote_body);
                        setQuoteOwner(
                          `${
                            participantsData.participants1.find(
                              (item) => item.id === quote.participant_id
                            ).first_name
                          } ${
                            participantsData.participants1.find(
                              (item) => item.id === quote.participant_id
                            ).last_name
                          }`
                        );
                        // setOwnerRole('Designer Type');
                        setOwnerRole(
                          participantsData.participants1.find(
                            (item) => item.id === quote.participant_id
                          ).designer_type
                        );
                        setOwnerID(quote.participant_id);
                        handleShow();
                        lala();
                      }}
                    >
                      <Card.Body className='denizen-quote-body'>
                        <Row>
                          <Col sm={12}>
                            <Card.Text>"{quote.quote_body}"</Card.Text>
                          </Col>

                          <Col sm={12}>
                            {' '}
                            <Link
                              to={`/denizendesigner/interviews/${quote.participant_id}`}
                            >
                              <Card.Text className='denizen-quote-author ml-0'>
                                {quote.first_name}
                                {` `}
                                {quote.last_name}
                              </Card.Text>
                            </Link>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Fade>
                </div>
              ) : (
                ''
              )
            )}
        </CardColumns>
        {/* <Pagination
          quotesPerPage={quotesPerPage}
          totalQuotes={134}
          paginate={paginate}
        /> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quoteData: state.quotes,
    participantsData: state.participants1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
    fetchParticipants1: () => dispatch(fetchParticipants1()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesIndex);
