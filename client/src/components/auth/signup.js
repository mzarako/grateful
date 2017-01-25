import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { signup } from '../../actions/signup.action';


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      hasName: true,
      hasPassword: true,
      passwordsMatch: true,
      passwordLongEnough: true
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderValidationAlert = this.renderValidationAlert.bind(this);
    this.renderAuthAlert = this.renderAuthAlert.bind(this);
  }
  handleFormSubmit({  name, password, passwordConfirm }) {
    const pwordLongEnough = password.length > 7;
    const pwordMatch = password === passwordConfirm;
    this.setState({
      hasName: !!name,
      hasPassword: !!password,
      passwordsMatch: pwordMatch,
      passwordLongEnough: pwordLongEnough
    })
    if (pwordMatch && pwordLongEnough && !!password && !!name) {
      this.props.signup({ password, name });
    }
  }
  renderValidationAlert(state) {
    let showErrors = [];
    if (!state.hasName) {
      showErrors.push(<div key="noName"><strong>Hey!</strong>What is your first name?</div>);
    }
    if (!state.hasPassword) {
      showErrors.push(<div key="noPword"><strong>Hey!</strong>Enter a password</div>);
    }
    else {
      if (!state.passwordLongEnough) {
        showErrors.push(<div key="pwordTooShort">Password need to be at least 8 characters long.</div>);
      }
      else {
        if (!state.passwordsMatch) {
          showErrors.push(<div key="noMatch"><strong>Oops!</strong>Passwords dont match</div>);
        }
      }
    }
    if (showErrors.length > 0) return showErrors;
  }
  renderAuthAlert(err) {
    if (err) {
      return <div><strong>Oops!</strong>{err}</div>
    }
  }
  componentDidMount() {
    this.refs.name.getRenderedComponent().focus();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <h1>You're one step away from your collection of moments.</h1>
        {this.renderValidationAlert(this.state)}
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <div>
              <label htmlFor="name">first name / nickname</label>
              <Field ref="name" withRef="name" name="name" type="text" component="input" />
            </div>

            <div>
              <label htmlFor="password">password</label>
              <Field name="password" type="password" component="input" />
            </div>

            <div>
              <label htmlFor="passwordConfirm">password confirm</label>
              <Field name="passwordConfirm" type="password" component="input" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        {this.renderAuthAlert(this.props.errorMessage)}
      </section>
    )
  }
}


function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    email: state.user.email
   };
}

function mapDispatchToProps(dispatch) {
  const actions = { signup };
  return bindActionCreators(actions, dispatch);
}

const Form = function(form){
  return reduxForm({ form: 'signup' })(form);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form(Signup));
