import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createParticipant } from '../../actions';

export class NewParticipant extends Component {
  onSubmit = (values) => {
    this.props.createParticipant(values, (participant) => {
      this.props.history.push('/dashboard');
      return participant;
    });
  };

  renderField(field) {
    return (
      <div className='form-group'>
        <label htmlFor=''>{field.label}</label>
        <input className='form-control' type={field.type} {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>NEW PARTICIPANT form</h1>
        <Row>
          <Col>
            <span className='mt-1'>
              {' '}
              <Link to={`/dashboard`}>
                <Button>Back</Button>
              </Link>
            </span>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                label='First Name'
                name='first_name'
                type='text'
                component={this.renderField}
              />{' '}
              l
              <Field
                label='Last Name'
                name='last_name'
                type='text'
                component={this.renderField}
              />
              <button
                className='btn btn-primary mt-1'
                type='submit'
                disabled={this.props.pristine || this.props.submitting}
              >
                Create Participant
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

// export default NewParticipant;

export default reduxForm({ form: 'newParticipantForm ' })(
  connect(null, { createParticipant })(NewParticipant)
);
