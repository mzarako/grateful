import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../actions/login.action';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      hasPassword: true
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderValidationAlert = this.renderValidationAlert.bind(this);
    this.renderAuthAlert = this.renderAuthAlert.bind(this);
  }
  handleFormSubmit({ password }) {
    this.props.login({ password });
  }
  renderValidationAlert(state) {
    if (!state.hasPassword) {
      return <div className="error"><p>* Please enter a password *</p></div>
    }
  }
  renderAuthAlert(err) {
    if (err) {
      return <div className="error"><p>Oops! {err}</p></div>
    }
  }
  componentDidMount() {
    this.refs.password.getRenderedComponent().focus();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="account old-user">
        <h3>Welcome back!</h3>
        {this.renderValidationAlert(this.state)}
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <div className="field-container">
              <label htmlFor="password">Password:</label>
              <Field ref="password" withRef="password" name="password" type="password" component="input" />
            </div>

            {this.renderAuthAlert(this.props.errorMessage)}
            <button className="button" type="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { login };
  return bindActionCreators(actions, dispatch);
}

const Form = function(form){
  return reduxForm({ form: 'login' })(form);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form(Login));
