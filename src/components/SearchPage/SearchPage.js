import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './SearchPage.css';

// import SearchResults from '../SearchResults/SearchResults';

class SearchPage extends Component {
  
  state = {
    query: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    })
  }

  handleClick = () => {
    console.log('search query on click:', this.state.query)
    const query = this.state.query
    this.props.history.replace(`/book/${query}`);
    // // search dispatch to API
    // this.props.dispatch({type: 'SEARCH_API', payload: query});
    // // search dispatch to Database
    // this.props.dispatch({type: 'SEARCH_DB', payload: query});
    this.props.dispatch({type: 'CLEAR_RESULTS'});
    // search dispatch to API
    this.props.dispatch({type: 'SEARCH_API', payload: query});
    // search dispatch to Database
    this.props.dispatch({type: 'SEARCH_DB', payload: query});

  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="search" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Enter</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default withRouter(connect(mapStateToProps)(SearchPage));
