import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
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
// import { fetchQuotes } from '../../actions';

// import { fetchParticipants1 } from '../../actions';
import {
  fetchParticipants1,
  fetchParticipant,
  fetchQuotes,
} from '../../actions';
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

  useEffect(() => {
    fetchParticipant();
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

  // let currentUserId = location.pathname.split('/').pop();

  const numOfQuotes = 0;
  let filteredQuotes = [];
  // filteredQuotes
  const filteredQuotesFunc = (quotesArray) => {
    quotesArray.forEach((quote) => {
      // console.log(quote.participant_id);
      if (quote.participant_id == location.pathname.split('/').pop()) {
        filteredQuotes.push(quote);
      }
    });
    filteredQuotes = filteredQuotes.slice(0, 2);
    console.log(filteredQuotes);
  };

  let curParticipant1 = '';

  const curParticipantFunc = (participantsArray) => {
    participantsArray.forEach((participant) => {
      console.log('hihihihihihihihihihihi');
    });
  };

  return quoteData.loading ? (
    <h2>Loading...</h2>
  ) : quoteData.error ? (
    <h2>{quoteData.error}</h2>
  ) : (
    <div>
      <div className='participant-show participantShow pb-3'>
        <div>
          <Row className='mt-2'>
            <Col xs={12}>
              <Link to='/denizendesigner/interviews'>
                <Button className='back-btn' variant='light'>
                  {' '}
                  <i className='fa fa-chevron-left'>
                    {' '}
                    <span className='back-btn-text'>Back</span>
                  </i>
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>

      <div className=''>
        <CardColumns>
          {quoteData &&
            quoteData.quotes &&
            filteredQuotesFunc(quoteData.quotes)}

          {filteredQuotes.map((quote, index) => (
            <div key={quote.id}>
              <Card
                className='denizen-quote-card'
                onClick={() => {
                  setCurQuote(quote.quote_body);
                  setQuoteOwner(
                    `${
                      participantsData.participants1.find(
                        (item) => item.id === quote.participant_id
                      ).bio
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
                <h2 className='name'>
                  {quote.first_name} {quote.last_name}
                </h2>
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
            </div>
          ))}
        </CardColumns>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const participant = state.participants.find(
    (p) => p.id === location.pathname.split('/').pop()
  );
  return {
    quoteData: state.quotes,
    participantsData: state.participants1,
    curParticipant: participant,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
    fetchParticipants1: () => dispatch(fetchParticipants1()),
    fetchParticipant: () => dispatch(fetchParticipant()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesIndex);
