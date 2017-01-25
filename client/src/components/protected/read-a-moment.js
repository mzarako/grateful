import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nuka from './carousel';
import fetchMoments from '../../actions/fetch-moments.action';

class ReadMoment extends Component {
  constructor() {
    super();
    // this.showMoments = this.showMoments.bind(this);
    this.fetchAllMoments = this.fetchAllMoments.bind(this);
    this.showAllMomentTitles = this.showAllMomentTitles.bind(this);
  }
  fetchAllMoments() {
    // this.props.fetchMoments();
  }
  showAllMomentTitles(moments) {
    console.log('in showAllMomentTitles', moments);
    let momentTitles;
    if (moments.length > 0) {
      momentTitles = moments.map(moment => {
        return <div key={moment._id}><h4>{moment.date}</h4></div>
      });

      return (
        <div className="moment-titles">
          {momentTitles}
        </div>
      )
    }
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
        <button type="button">Save changes</button>
        <button type="button">Delete</button>
        <button type="button" onClick={this.fetchAllMoments}>Display all</button>
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
