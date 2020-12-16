import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { fetchQuotes } from "../../actions";

class QuotesIndex extends Component {
  componentWillMount() {
    this.props.fetchQuotes();
  }

  renderQuotes() {
    return this.props.quotes.map((quote) => {
      return (
        <div className='denizen-quote-card'>
          <div className='denizen-quote-body'>
            "{quote.quote_body}"
            <div className='denizen-quote-author'>Alex Robinson</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Row className='justify-content-center'>
          <Col md='auto'>
            <div className='quote-list'>{this.renderQuotes()}</div>
          </Col>
        </Row>
      </div>
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
