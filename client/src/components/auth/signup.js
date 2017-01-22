import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { signup } from '../../actions/signup.action';


class Signup extends Component {
  constructor() {
    super();
    // this.state = { 
    //   passwordsMatch: true,
    //   hasPassword: true,
    //   hasEmail: true
    //    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderValidationAlert = this.renderValidationAlert.bind(this);
    this.renderAuthAlert = this.renderAuthAlert.bind(this);
  }
  handleFormSubmit({ email, password }) {
    // this.setState({ hasEmail: !!email });
    // this.setState({ hasPassword: !!password });
    // const pwordMatch = password === passwordConfirm;
    // this.setState({ passwordsMatch: pwordMatch });
    // if (pwordMatch && !!email && !! password) {
    //   this.props.signup({ email, password });
    // }
    this.props.signup({ email, password });
  }
  renderValidationAlert({ email, password, passwordConfirm }) {
    let showErrors = [];
    if (email.error) {
      showErrors.push(<div key="noEmail"><strong>Hey!</strong>Enter an email</div>);
    }
    if (password.error) {
      showErrors.push(<div key="noPword"><strong>Hey!</strong>Enter a password</div>);
    }
    if (passwordConfirm.error) {
      showErrors.push(<div key="noMatch"><strong>Oops!</strong>Passwords don't match</div>);
    }
    if (showErrors.length > 0) return showErrors;
  }
  renderAuthAlert(err) {
    if (err) {
      return <div><strong>Oops!</strong>{err}</div>
    }
  }
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
    return (
      <section>
        <h1>You're one step away from your collection of moments.</h1>
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <label htmlFor="email">email</label>
            <div><Field {...email} name="email" component="input" type="text" /></div>

            <label htmlFor="password">password</label>
            <div><Field {...password} name="password" component="input" type="password" /></div>

            <label htmlFor="passwordConfirm">confirm password</label>
            <div><Field {...passwordConfirm} name="passwordConfirm" component="input" type="password" /></div>

            <button type="submit">Submit</button>
          </form>
        </div>
        {this.renderValidationAlert({ email, password, passwordConfirm })}
        {this.renderAuthAlert(this.props.errorMessage)}
      </section>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  const actions = { signup };
  return bindActionCreators(actions, dispatch);
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = true;
  }
  if (!formProps.email) {
    errors.email = true
  }
  if (!formProps.password) {
    errors.email = true
  }

  return errors;
}

const Form = function(form){
  return reduxForm({
            validate,
            form: 'login',
            fields: ['email', 'password', 'passwordConfirm']
          })(form);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form(Signup));

