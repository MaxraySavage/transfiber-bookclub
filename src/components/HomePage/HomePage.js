import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage';
// import SearchResults from '../SearchResults/SearchResults';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  
  // Home page component that is the parent to the Search Page and Search results components
  render() {
    return (
      <div>
        {/* {JSON.stringify(this.props.state.user)} */}
        {this.props.state.user.username ? `Welcome back, ${this.props.state.user.username}` : <p>Welcome to the <i>Transfiber Bookclub</i>, you can search for book titles using the search bar below.</p>}
        {/* <p>Welcome to the <i>Transfiber Bookclub</i>, you can search for book titles using the search bar below.</p> */}
        {/* <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        <LogOutButton className="log-in" /> */}
        <p>Input search here:</p>
        <SearchPage/>
        {/* {this.props.state.searchResults.length > 0 ? <SearchResults/> : ''} */}
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(HomePage));
