import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage';
import './SearchResults.css';

class SearchResults extends Component {
  
  // componentDidMount(){
  //   const queryString = this.props.history.location.pathname.split('/book/');
  //   const query = queryString[1];
  //   // search dispatch to API
  //   this.props.dispatch({type: 'SEARCH_API', payload: query});
  //   // search dispatch to Database
  //   this.props.dispatch({type: 'SEARCH_DB', payload: query});
  // }
  componentDidMount(){
    const queryString = this.props.history.location.pathname.split('/book/');
    const query = queryString[1];
    this.props.dispatch({type: 'CLEAR_RESULTS'});
    // search dispatch to API
    this.props.dispatch({type: 'SEARCH_API', payload: query});
    // search dispatch to Database
    this.props.dispatch({type: 'SEARCH_DB', payload: query});
    
  }

  viewDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book id:', data);
    // this.props.dispatch({type: 'DETAILS', payload: data})
    this.props.history.push(`/details/${data}`);
  }

  viewDbDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book id:', data);
    // this.props.dispatch({type: 'DETAILS', payload: data})
    this.props.history.push(`/details/db/${data}`);
  }


  render() {
    return (
      <div>
        {/* == Conditional render only shows Add A Book Link if user is signed in */}
        <div className="search-header">
        Not finding what you're looking for?<br/>
        {this.props.reduxState.user.username ?
        <div><Link className="text-link" to="/form"> Add A Book</Link> or</div> 
        : ''}
        Search again:
        </div>
        <SearchPage/>
        {this.props.reduxState.databaseResults ? this.props.reduxState.databaseResults.map((book, index)=>{
          return (
            <div className="search-result" key={index} onClick={(event)=>this.viewDbDetails(event, book.id)}>
              {book.title}, {book.author}, {book.publisher}, {book.publish_date}
            </div>
          )
        }) : ''}
        {/* renders search results */}
        {this.props.reduxState.apiResults.map((book, index)=>{
          // select expected data from object and assign to variable 'item'
          const item = book.volumeInfo
           return (
              <div className="search-result" key={index} onClick={ (event) => this.viewDetails(event, book.id) }>
              {item.title}, {item.authors}, {item.publisher}, {item.publishedDate}
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
