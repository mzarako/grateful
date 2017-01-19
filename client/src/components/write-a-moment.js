import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ajax_test from '../actions/ajax-test';

class WriteMoment extends Component {
  constructor() {
    super();
    this.state = { momentText: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(event) {
    const newText = event.target.value;
    this.setState({ momentText: newText });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.ajax_test(this.state.momentText);
  }
  render() {
    return (
      <section>
        <h1>Write a Moment</h1>
        <form onSubmit={this.handleSubmit}>
            <textarea name="moment" rows="4" cols="30" onChange={this.handleTextChange} />
          <input type="submit" value="Save" />
        </form>
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ajax_test: ajax_test
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(WriteMoment);
