import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReportImg1 from "../../../assets/images/report-img-1.svg";

class Report extends Component {
  render() {
    return (
      // <div className='row '>
      //   <div className='col-sm-4'>
      //     <ul className='test123'>
      //       <li className='selected'>Executive Summary</li>
      //       <li>Introduction</li>
      //       <li>I. Header</li>
      //       <li>II. Header</li>
      //       <li>III. Header</li>
      //       <li>IV. Header</li>
      //       <li>Conclusion & Key Recommendations</li>
      //       <li>Bibliography</li>
      //     </ul>
      //   </div>
      //   <div className='col-sm-8'>
      //     <h1 className=''>Report Page</h1>
      //     <p></p>
      //   </div>
      // </div>
      <Row>
        <Col sm={2}>
          <ul className='test123'>
            <li className='selected'>Executive Summary</li>
            <li>Introduction</li>
            <li>I. Header</li>
            <li>II. Header</li>
            <li>III. Header</li>
            <li>IV. Header</li>
            <li>Conclusion & Key Recommendations</li>
            <li>Bibliography</li>
          </ul>
        </Col>

        <Col sm={9}>
          <Container className='report-container'>
            <h2> Executive Summary</h2>
            <h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              vitae adipiscing augue mauris diam porta. Aenean nisi, erat vel
              ante fringilla semper libero aliquet laoreet. Eget pulvinar eu est
              vel. Faucibus egestas euismod feugiat sapien integer luctus odio.
              Interdum elit, diam eget nunc egestas. Augue felis magna tellus
              enim sed molestie enim mi. Sociis arcu etiam urna fermentum erat
              sodales libero. Sollicitudin purus pretium semper integer leo
              sollicitudin arcu sed. Ultrices ullamcorper nunc donec ac
              ullamcorper interdum proin sit.
            </p>
            <div className='report-img'>
              {" "}
              <img src={ReportImg1} alt='Denizen Designer Logo' />
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              vitae adipiscing augue mauris diam porta. Aenean nisi, erat vel
              ante fringilla semper libero aliquet laoreet. Eget pulvinar eu est
              vel. Faucibus egestas euismod feugiat sapien integer luctus odio.
              Interdum elit, diam eget nunc egestas. Augue felis magna tellus
              enim sed molestie enim mi. Sociis arcu etiam urna fermentum erat
              sodales libero. Sollicitudin purus pretium semper integer leo
              sollicitudin arcu sed. Ultrices ullamcorper nunc donec ac
              ullamcorper interdum proin sit.
            </p>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default Report;
