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
      return <div><strong>Hey!</strong>Enter a password</div>;
    }
  }
  renderAuthAlert(err) {
    if (err) {
      return <div><strong>Oops!</strong>{err}</div>
    }
  }
  componentDidMount() {
    this.refs.password.getRenderedComponent().focus();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <div>
              <label htmlFor="password">password</label>
              <Field ref="password" withRef="password" name="password" type="password" component="input" />
            </div>

            {this.renderAuthAlert(this.props.errorMessage)}
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
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
