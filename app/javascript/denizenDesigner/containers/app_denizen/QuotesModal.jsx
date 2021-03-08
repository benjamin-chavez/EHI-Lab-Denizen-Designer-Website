import React, { Component } from 'react';

import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

class QuotesModal extends Component {
  state = {
    isOpen: false,
  };
  // state = { status: false };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        {/* <button onClick={() => this.setState({ status: !status })}>
          {`Current status: ${status ? 'on' : 'off'}`}
        </button> */}
        <p>test</p>
        <Button
          variant='primary'
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          Launch vertically centered modal
        </Button>

        <Modal show={isOpen} size='lg' centered>
          <p>test2</p>
          <Modal.Header closeButton>
            <Button
              variant='primary'
              onClick={() => this.setState({ isOpen: !isOpen })}
            >
              Launch vertically centered modal
            </Button>
            <Modal.Title id='contained-modal-title-vcenter'>
              Modal heading
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default QuotesModal;
