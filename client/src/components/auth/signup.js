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
      showErrors.push(<div className="error" key="noName"><p>* Please enter your name *</p></div>);
    }
    if (!state.hasPassword) {
      showErrors.push(<div className="error" key="noPword"><p>* Please enter a password *</p></div>);
    }
    else {
      if (!state.passwordLongEnough) {
        showErrors.push(<div className="error" key="pwordTooShort"><p>* Passwords must be at least 8 characters long *</p></div>);
      }
      else {
        if (!state.passwordsMatch) {
          showErrors.push(<div className="error" key="noMatch"><p>* Passwords don't match *</p></div>);
        }
      }
    }
    if (showErrors.length > 0) return showErrors;
  }
  renderAuthAlert(err) {
    if (err) {
      return <div className="error"><p>Oops! {err}</p></div>
    }
  }
  componentDidMount() {
    this.refs.name.getRenderedComponent().focus();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="account new-user">
        <h3>Almost there!</h3>
        {this.renderValidationAlert(this.state)}
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <div className="field-container">
              <label htmlFor="name">First Name:</label>
              <Field ref="name" withRef="name" name="name" type="text" component="input" />
            </div>

            <div className="field-container">
              <label htmlFor="password">Password:</label>
              <Field name="password" type="password" component="input" />
            </div>

            <div className="field-container">
              <label htmlFor="passwordConfirm">Confirm Password:</label>
              <Field name="passwordConfirm" type="password" component="input" />
            </div>

            <button type="submit"><h4>Sign Up</h4></button>
          </form>
        </div>
        {this.renderAuthAlert(this.props.errorMessage)}
      </div>
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
