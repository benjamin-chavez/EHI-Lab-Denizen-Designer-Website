import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { fetchParticipant, updateParticipant } from '../../actions';

export class EditParticipant extends Component {
  componentDidMount() {
    if (!this.props.participant) {
      this.props.fetchParticipant(this.props.match.params.id);
    }
  }

  onSubmit = (values) => {
    this.props.updateParticipant(1, values, (participant) => {
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
    if (!this.props.participant) {
      return null;
    }

    return (
      <div>
        <h1>This is the edit participant form</h1>
        <Row>
          <Col>
            <span className='p-1'>
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
              />
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
                Update Participant
              </button>
            </form>
          </Col>
        </Row>
        <p>{this.props.participant.first_name}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const participant = state.participants.find((p) => p.id === idFromUrl);
  return { participant };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipant }, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(EditParticipant);

export default reduxForm({
  form: 'updateParticipantForm',
  enableReinitialize: true,
})(
  // connect(null, { createParticipant })(NewParticipant)
  connect(mapStateToProps, {
    mapStateToProps,
    mapDispatchToProps,
    fetchParticipant,
    updateParticipant,
  })(EditParticipant)
);
