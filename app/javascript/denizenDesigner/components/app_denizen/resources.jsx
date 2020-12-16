import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

class Resources extends Component {
  render() {
    if (!this.props) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <Row>
          <Col>
            <h3 className='resources-headers'>Articles</h3>
            <div className='resource-btm-border'></div>
          </Col>
        </Row>
        <Row>
          <Col md='auto'>
            <div className='article-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />

              <div className='article-card-img-container'></div>
              <img
                src='../../../assets/images/Aricle-card-image.svg'
                className='article-card-img'
              />
              <div className='article-card-body'>
                <p className='article-card-title'>The Whole New Normal</p>
                <p className='article-card-author'>By Chole Rockford</p>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='article-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />

              <div className='article-card-img-container'></div>
              <img
                src='../../../assets/images/Aricle-card-image.svg'
                className='article-card-img'
              />
              <div className='article-card-body'>
                <p className='article-card-title'>The Whole New Normal</p>
                <p className='article-card-author'>By Chole Rockford</p>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='article-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />

              <div className='article-card-img-container'></div>
              <img
                src='../../../assets/images/Aricle-card-image.svg'
                className='article-card-img'
              />
              <div className='article-card-body'>
                <p className='article-card-title'>The Whole New Normal</p>
                <p className='article-card-author'>By Chole Rockford</p>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='article-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />

              <div className='article-card-img-container'></div>
              <img
                src='../../../assets/images/Aricle-card-image.svg'
                className='article-card-img'
              />
              <div className='article-card-body'>
                <p className='article-card-title'>The Whole New Normal</p>
                <p className='article-card-author'>By Chole Rockford</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='resources-headers'>Publications</h3>
            <div className='resource-btm-border'></div>
          </Col>
        </Row>
        <Row>
          <Col md='auto'>
            <div className='publication-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />
              <div className='publication-card-body'>
                <Row className='publication-card-title-row'>
                  <Col>
                    <p className='publication-card-title'>
                      The Unexpected Downside of Paying or Sending Messages to
                      People to...
                    </p>
                  </Col>
                </Row>
                <Row className='publication-card-auth-row'>
                  <p className='publication-card-author'>Chole Rockford</p>

                  <p className='publication-card-author'>Chole Rockford</p>
                </Row>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='publication-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />
              <div className='publication-card-body'>
                <Row className='publication-card-title-row'>
                  <Col>
                    <p className='publication-card-title'>
                      The Unexpected Downside of Paying or Sending Messages to
                      People to...
                    </p>
                  </Col>
                </Row>
                <Row className='publication-card-auth-row'>
                  <p className='publication-card-author'>Chole Rockford</p>

                  <p className='publication-card-author'>Chole Rockford</p>
                </Row>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='publication-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />
              <div className='publication-card-body'>
                <Row className='publication-card-title-row'>
                  <Col>
                    <p className='publication-card-title'>
                      The Unexpected Downside of Paying or Sending Messages to
                      People to...
                    </p>
                  </Col>
                </Row>
                <Row className='publication-card-auth-row'>
                  <p className='publication-card-author'>Chole Rockford</p>

                  <p className='publication-card-author'>Chole Rockford</p>
                </Row>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='publication-card'>
              <img
                src='../../../assets/images/article-link-icon.svg'
                className='article-link-icon'
              />
              <div className='publication-card-body'>
                <Row className='publication-card-title-row'>
                  <Col>
                    <p className='publication-card-title'>
                      The Unexpected Downside of Paying or Sending Messages to
                      People to...
                    </p>
                  </Col>
                </Row>
                <Row className='publication-card-auth-row'>
                  <p className='publication-card-author'>Chole Rockford</p>

                  <p className='publication-card-author'>Chole Rockford</p>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Resources;
