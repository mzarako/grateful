import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import createMoment from '../../actions/create-moment.action';

class WriteMoment extends Component {
  constructor() {
    super();
    this.state = { momentText: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.greet = this.greet.bind(this);
  }
  handleTextChange(event) {
    const newText = event.target.value;
    this.setState({ momentText: newText });
  }
  handleFormSubmit({ moment }) {
    this.props.createMoment({ moment, date: this.state.date });
  }
  greet(name) {
    if (name) return <div>Hello {name}!</div>
  }
  componentWillMount() {
    const date = new Date();
    // const dateID = date.valueOf();
    const dateString = `${getMonthString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
    this.setState({ date: dateString });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        {this.greet(this.props.name)}
        <h1>Write a Moment</h1>
        <div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <div>
              <label htmlFor="moment">{this.state.date}</label>
              <Field name="moment" component="textarea" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

function getMonthString(n) {
  switch (n) {
    case 0: return 'January';
    case 1: return 'February';
    case 2: return 'March';
    case 3: return 'April';
    case 4: return 'May';
    case 5: return 'June';
    case 6: return 'July';
    case 7: return 'August';
    case 8: return 'September';
    case 9: return 'October';
    case 10: return 'November';
    case 11: return 'December';
    default: return '';
  }
}

function mapDispatchToProps(dispatch) {
  const actions = { createMoment };
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    name: state.user.name
  };
}

const Form = function(form){
  return reduxForm({
            form: 'write a moment',
          })(form);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form(WriteMoment));
