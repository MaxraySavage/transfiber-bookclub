import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    // this.props.dispatch({type: 'SEARCH', payload: query})
    this.props.history.replace(`/search/${query}`);
    
  }

  render() {
    return (
      <div>
        <p>Input search here:</p>
        <input type="text" placeholder="search" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Enter</button>
        {/* {this.props.state.searchResults.length > 0 ? <SearchResults/> : ''} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default withRouter(connect(mapStateToProps)(SearchPage));
