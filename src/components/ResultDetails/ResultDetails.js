import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ResultDetails extends Component {

  render() {
    return (
      <div>
        <h1>Search Result Details</h1>
        {JSON.stringify(this.props.state.resultDetails.volumeInfo)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default withRouter(connect(mapStateToProps)(ResultDetails));
