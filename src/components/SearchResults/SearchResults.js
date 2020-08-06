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
    this.props.dispatch({type: 'DETAILS', payload: data})
    this.props.history.push(`/details/${data}`);
  }


  render() {
    return (
      <div>
        Search Results:
        If you can't find what you're looking for, <Link to="/form">Add A Book</Link>
        {/* {JSON.stringify(this.props.state.searchResults)} */}
        {this.props.reduxState.searchResults.map((book, index)=>{
          const item = book.volumeInfo
           return <div key={index}>
             <p>{JSON.stringify(item)}</p>
             {/* Clicking this button navigates to the details page for the individual book item */}
             <button onClick={ (event) => this.viewDetails(event, book.id) }>view details</button>
             {/* <button><Link to="details">view details</Link></button> */}
             {/* <Link to="/details/:id">Details for id number 47</Link> */}
             </div>
          })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(SearchResults));
