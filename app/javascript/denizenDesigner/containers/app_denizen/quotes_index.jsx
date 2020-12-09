import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
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
        <div className='quote-item'>
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Body>
              <Card.Text className='denizen-quote-card'>
                "{quote.quote_body}"
              </Card.Text>
              <Card.Text className='denizen-quote-card'>
                Alex Robinson
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <br /> */}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <Row>
            <Col md='auto'>
              <div className='participant-list'>{this.renderQuotes()}</div>
            </Col>
          </Row>
        </div>
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
