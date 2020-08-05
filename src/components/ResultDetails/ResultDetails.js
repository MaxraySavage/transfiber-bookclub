import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultDetails extends Component {

  render() {
    return (
      <div>
        <h1>Search Result Details</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(ResultDetails);
