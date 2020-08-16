import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage';
import './SearchResults.css';

class SearchResults extends Component {
  
  componentDidMount(){
    // clears previous results from reducers before returning new search results
    this.props.dispatch({type: 'CLEAR_RESULTS'});
    // grabs search query from search param in URL
    const queryString = this.props.history.location.pathname.split('/book/');
    // grabs split array item and assigns to query variable
    const query = queryString[1];
    // search dispatch to API
    this.props.dispatch({type: 'SEARCH_API', payload: query});
    // search dispatch to Database
    this.props.dispatch({type: 'SEARCH_DB', payload: query});  
  }

  // onClick to view Details for selected book
  viewDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book id:', data);
    this.props.history.push(`/details/${data}`);
  }

  // onClick to view Details for selected book from local database
  viewDbDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book id:', data);
    this.props.history.push(`/details/db/${data}`);
  }


  render() {
    return (
      <div>
        {/* == Conditional render only shows Add A Book Link if user is signed in */}
        <div className="search-header">
        Not finding what you're looking for?<br/>
        {this.props.reduxState.user.username ?
        <div><Link className="add-link" to="/form"> Add A Book</Link> or</div> 
        : ''}
        Search again:
        </div>
        <SearchPage/>
        {this.props.reduxState.databaseResults ? this.props.reduxState.databaseResults.map((book, index)=>{
          return (
            <div className="search-result" key={index}>
              <Link className="text-link" to="/details" onClick={() => this.props.dispatch({type: 'DETAILS', payload: book})}>{book.title}, {book.author}, {book.publisher}, {book.publish_date}</Link>
            </div>
          )
        }) : ''}
        {/* renders search results */}
        {this.props.reduxState.apiResults.map((book, index)=>{
          // select expected data from object and assign to variable 'item'
          const item = book.volumeInfo
           return (
              <div className="search-result" key={index}>
                <Link className="text-link" to="/details" onClick={() => this.props.dispatch({type: 'DETAILS', payload: book})}>{item.title}, {item.authors}, {item.publisher}, {item.publishedDate}</Link>
              </div>
            )
          })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(SearchResults));
