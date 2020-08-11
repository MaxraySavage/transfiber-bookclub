import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class SearchResults extends Component {
  
  componentDidMount(){
    const queryString = this.props.history.location.pathname.split('/book/');
    const query = queryString[1];
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
        {this.props.reduxState.user.username ?
        <Link to="/form">Not finding what you're looking for? Add A Book</Link>
        : ''}
        {this.props.reduxState.databaseResults ? this.props.reduxState.databaseResults.map((book)=>{
          return (
            <div key={book.id} onClick={(event)=>this.viewDbDetails(event, book.id)}>
              <p>{book.title}, {book.author}, {book.publisher}, {book.publish_date}</p>
            </div>
          )
        }) : ''}
        {/* renders search results */}
        {this.props.reduxState.apiResults.map((book)=>{
          // select expected data from object and assign to variable 'item'
          const item = book.volumeInfo
           return (
              <div key={book.id} onClick={ (event) => this.viewDetails(event, book.id) }>
              <p>{item.title}, {item.authors}, {item.publisher}, {item.publishedDate}</p>
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
