import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {

  render() {
    return (
      <div>
        Search Results:
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(SearchResults);
