import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMoments from '../../actions/fetch-moments.action';

class ReadMoment extends Component {
  constructor() {
    super();
    this.showMessage = this.showMessage.bind(this);
  }
  showAllMoments() {
    this.props.fetchMoments();
  }
  render() {
    return (
      <section>
        <h1>Read a Moment</h1>
        <div>
          <div className="read-arrow inline">arrow</div>
          <div className="read-moment">
            <p>January 3, 2017</p>
            <p>"Today was such a beautiful day. I feel so grateful to have gone to Sequoia and stood amongst the ancient giants."</p>
          </div>
          <div className="read-arrow inline">arrow</div>
        </div>
        <button type="button">Save changes</button>
        <button type="button">Delete</button>
        <button type="button" onClick={this.showAllMoments}>Display all</button>
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    fetchMoments
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(ReadMoment);
