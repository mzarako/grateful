import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nuka from './carousel';
import fetchMoments from '../../actions/fetch-moments.action';

class ReadMoment extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchMoments();
  }
  render() {
    console.log('in read-a-moment render', this.props.moments);
    return (
      <div className="read-moment">
        <h1>Read a Moment</h1>
        <div className="nuka"><Nuka moments={this.props.moments} /></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { moments: state.moments };
}

function mapDispatchToProps(dispatch) {
  const actions = { fetchMoments };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadMoment);
