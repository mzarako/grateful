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
    if (saved) return <div className="moment-saved"><p>A moment was just added to your collection.</p></div>
  }
  componentWillMount() {
    this.props.fetchMoments();
  }
  render() {
    return (
      <div className="user-home">
        {this.greet(this.props.name)}
        {this.momentSaved(this.props.saved)}
        <button onClick={this.props.clearSaved}><Link to="/write-a-moment"><h4>Write a Moment</h4></Link></button>
        <button onClick={this.props.clearSaved}><Link to="/read-a-moment"><h4>Read a Moment</h4></Link></button>
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
