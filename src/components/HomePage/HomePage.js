import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage';
import SearchResults from '../SearchResults/SearchResults';

class HomePage extends Component {

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <p>Welcome to the <i>Transfiber Bookclub</i>, you can search for book titles using the search bar below.</p>
        {/* <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        <LogOutButton className="log-in" /> */}
        <SearchPage/>
        <SearchResults/>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
