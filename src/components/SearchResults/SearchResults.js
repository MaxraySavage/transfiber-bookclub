import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {

  viewDetails = (event, data) => {
    event.preventDefault();
    console.log('viewDetails button clicked with book item data:', data);
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
             <button onClick={ (event) => this.viewDetails(event, item) }>view details</button>
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
