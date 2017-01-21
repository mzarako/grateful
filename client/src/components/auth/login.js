import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../actions/login.action';


class Login extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.login({ email, password });
  }
  renderAlert(err) {
    if (err) {
      return <div><strong>Oops!</strong>{err}</div>
    }
  }
  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <section>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <label htmlFor="email">email</label>
            <div><Field {...email} name="email" component="input" type="text" /></div>

            <label htmlFor="password">password</label>
            <div><Field {...password} name="password" component="input" type="password" /></div>

            {this.renderAlert(this.props.errorMessage)}
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  const actions = { login: login };
  return bindActionCreators(actions, dispatch);
}

const Form = function(form){
  return reduxForm({
            form: 'login',
            fields: ['email', 'password']
          })(form);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form(Login));

// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//   form: 'login',
//   fields: ['email', 'password']
// })(Login));
