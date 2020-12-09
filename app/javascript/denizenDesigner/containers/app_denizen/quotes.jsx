import React, { Component } from "react";
import QuotesIndex from "./quotes_index";

class Quotes extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Quotes Page</h1>
          <p></p>
          <QuotesIndex />
        </div>
      </div>
    );
  }
}

export default Quotes;
