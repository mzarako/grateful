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
  }
  handleTextChange(event) {
    const newText = event.target.value;
    this.setState({ momentText: newText });
  }
  handleFormSubmit({ moment }) {
    this.props.createMoment({ moment, date: this.state.date });
  }
  componentWillMount() {
    const date = new Date();
    // const dateID = date.valueOf();
    const dateString = `${getMonthString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
    this.setState({ date: dateString });
  }
  componentDidMount() {
    this.refs.moment.getRenderedComponent().focus();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="write-moment">
        <h1>Write a Moment</h1>
        <div className="moment-div">
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <div className="content">
              <label htmlFor="moment">{this.state.date}</label>
              <span className="fa fa-quote-left"></span>
               <Field ref="moment" withRef="moment" name="moment" component="textarea" />
              <span className="fa fa-quote-right"></span>
            </div>
            <button className="button" type="submit">Save Moment</button>
          </form>
        </div>
      </div>
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

const Form = function(form){
  return reduxForm({
            form: 'write a moment',
          })(form);
}

export default connect(null, mapDispatchToProps)(Form(WriteMoment));
