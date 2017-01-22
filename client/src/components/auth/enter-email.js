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
    console.log(email);
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
      showErrors.push(<div><strong>Hey!</strong>Enter an email</div>);
    }
    if (!state.validEmail && state.hasEmail) {
      showErrors.push(<div><strong>Hey!</strong>Enter a valid email</div>);
    }
    if (showErrors.length > 0) return showErrors;
  }
  renderAuthAlert(err) {
    if (err) {
      return <div><strong>Oops!</strong>{err}</div>
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <h1>You're two steps away from your collection of moments.</h1>
        {this.renderValidationAlert(this.state)}
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <div>
              <label htmlFor="email">email</label>
              <Field name="email" type="text" component="input" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        {this.renderAuthAlert(this.props.errorMessage)}
      </section>
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
