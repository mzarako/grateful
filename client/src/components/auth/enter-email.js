import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { searchEmails } from '../../actions/search-emails.action';


class EnterEmail extends Component {
  constructor() {
    super();
    this.state = {
      hasEmail: true,
      validEmail: true
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderValidationAlert = this.renderValidationAlert.bind(this);
    this.renderAuthAlert = this.renderAuthAlert.bind(this);
  }
  handleFormSubmit({ email }) {
    this.setState({ hasEmail: !!email });
    const validEmail = email.includes('@') && email.includes('.');
    this.setState({ validEmail });
    if (!!email && validEmail) {
      this.props.searchEmails(email);
    }
  }
  renderValidationAlert(state) {
    let showErrors = [];
    if (!state.hasEmail) {
      showErrors.push(<div key="noEmail" className="error"><p>* Please enter your email *</p></div>);
    }
    if (!state.validEmail && state.hasEmail) {
      showErrors.push(<div key="invalidEmail" className="error"><p>* Please enter a valid email *</p></div>);
    }
    if (showErrors.length > 0) return showErrors;
  }
  renderAuthAlert(err) {
    if (err) {
      return <div><strong>Oops!</strong>{err}</div>
    }
  }
  componentDidMount() {
    this.refs.email.getRenderedComponent().focus();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="account sign-in-up">
        <h3>Hey there!</h3><br /><h2>Enter your email to get started.</h2>
        {this.renderValidationAlert(this.state)}
        <div className="form-container">
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <div className="field-container">
              <label htmlFor="email">Email:</label>
              <Field ref="email" withRef="email" name="email" type="text" component="input" />
            </div>

            <button type="submit"><h4>Submit</h4></button>
          </form>
        </div>
        {this.renderAuthAlert(this.props.errorMessage)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = { searchEmails };
  return bindActionCreators(actions, dispatch);
}

const Form = function(form){
  return reduxForm({
            form: 'enter email',
          })(form);
}

export default connect(null, mapDispatchToProps)(Form(EnterEmail));
