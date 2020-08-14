import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage';
// import SearchResults from '../SearchResults/SearchResults';
import { withRouter } from 'react-router-dom';

class Community extends Component {
  
  // Home page component that is the parent to the Search Page and Search results components
  render() {
    return (
      <div>
        <h3>Community</h3>
      </div>
      // <div>
      //   <div className="welcome">
      //   {this.props.state.user.username ? <div className="loggedIn">Welcome back, {this.props.state.user.username}</div> : <div className="loggedOut">Welcome to the <i>Transfiber Bookclub</i>, you can search for book titles using the search bar below.</div>}
      // </div>
      //   <SearchPage/>
      // </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(Community));
