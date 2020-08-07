import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class SearchResults extends Component {
  
  componentDidMount(){
    const queryString = this.props.history.location.pathname.split('/search/');
    const query = queryString[1];
    this.props.dispatch({type: 'SEARCH', payload: query})
    // console.log('search query is', )
  }

  viewDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book id:', data);
    // this.props.dispatch({type: 'DETAILS', payload: data})
    this.props.history.push(`/details/${data}`);
  }


  render() {
    return (
      <div>
        {/* == Conditional render only shows Add A Book Link if user is signed in */}
        {this.props.reduxState.user.username ?
        <Link to="/form">Not finding what you're looking for? Add A Book</Link>
        : ''}
        {/* renders search results */}
        {this.props.reduxState.searchResults.map((book, index)=>{
          // select expected data from object and assign to variable 'item'
          const item = book.volumeInfo
           return (
              // RENDER DIV WITH BUTTON TO VIEW DETAILS
              // <div key={index}>
              // <p>{item.title}, {item.authors}, {item.publisher}, {item.publishedDate}, {item.description}</p>
              // {/* Clicking this button navigates to the details page for the individual book item */}
              // <button onClick={ (event) => this.viewDetails(event, book.id) }>view details</button>
              // </div>
              // RENDER RESULT AS LINK
              <div key={index} onClick={ (event) => this.viewDetails(event, book.id) }>
              <p>{item.title}, {item.authors}, {item.publisher}, {item.publishedDate}, {item.description}</p>
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
