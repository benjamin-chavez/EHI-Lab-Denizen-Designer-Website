import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

import {
  fetchParticipants1,
  fetchParticipant,
  fetchQuotes,
} from '../../../actions';
import quotes from '../QuotesScreen/quotes';

function ParticipantsShowQuotes({
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

  const [setQuoteOwner] = useState();

  const lala = () => {
    return participantsData.loading
      ? console.log('Loading')
      : setQuoteOwner(
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
  };

  let filteredQuotes = [];

  const filteredQuotesFunc = (quotesArray) => {
    quotesArray.forEach((quote) => {
      if (quote.participant_id == location.pathname.split('/').pop()) {
        filteredQuotes.push(quote);
      }
    });
    filteredQuotes = filteredQuotes.slice(0, 2);
    console.log(filteredQuotes);
  };

  return quoteData.loading ? (
    <h2>Loading...</h2>
  ) : quoteData.error ? (
    <h2>{quoteData.error}</h2>
  ) : (
    <div>
      <div className=''>
        {quoteData &&
          quoteData.quotes &&
          filteredQuotesFunc(quoteData.quotes) &&
          lala()}

        {filteredQuotes.map((quote) => (
          <div key={quote.id}>
            <Card className='mb-3 quoteCard'>
              <Card.Body className=''>
                <span>"{quote.quote_body}"</span>
              </Card.Body>
            </Card>
          </div>
        ))}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantsShowQuotes);
