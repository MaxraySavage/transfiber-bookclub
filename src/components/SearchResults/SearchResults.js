import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {

  viewDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book id:', data);
  }


  render() {
    return (
      <div>
        Search Results:
        {/* {JSON.stringify(this.props.state.searchResults)} */}
        {this.props.state.searchResults.map((book, index)=>{
          const item = book.volumeInfo
           return <div key={index}>
             <p>{JSON.stringify(item)}</p>
             {/* Clicking this button navigates to the details page for the individual book item */}
             <button onClick={ (event) => this.viewDetails(event, book.id) }>view details</button>
             {/* <Link to="/details/:id">Details for id number 47</Link> */}
             </div>
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(SearchResults);
