import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import fetchMoments from '../../actions/fetch-moments.action';
import clearSaved from '../../actions/clear-saved.action';

class UserHome extends Component {
  constructor() {
    super();
    this.greet = this.greet.bind(this);
    this.momentSaved = this.momentSaved.bind(this);
  }
  greet(name) {
    if (name) return <div className="welcome"><h4>Welcome {name}!</h4></div>
  }
  momentSaved(saved) {
    if (saved) return <div className="moment-saved"><p>* A moment was just added to your collection. *</p></div>
  }
  componentWillMount() {
    this.props.fetchMoments();
  }
  render() {
    return (
      <div className="account user-home">
        {this.greet(this.props.name)}
        {this.momentSaved(this.props.saved)}
        <Link className="button write" onClick={this.props.clearSaved} to="/write-a-moment">Write a Moment</Link>
        <Link className="button read" onClick={this.props.clearSaved} to="/read-a-moment">Read a Moment</Link>
      </div>
  )}
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    saved: state.saved
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { fetchMoments, clearSaved };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
