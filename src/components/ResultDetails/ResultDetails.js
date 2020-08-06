import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ResultDetails extends Component {

  componentDidMount(){
    const queryString = this.props.history.location.pathname.split('/details/');
    const query = queryString[1];
    // console.log('details query:', query)
    this.props.dispatch({type: 'DETAILS', payload: query})
  }

  render() {
    const book = this.props.state.resultDetails.volumeInfo
    return (
      <div>
        <h1>Search Result Details</h1>
        {/* {JSON.stringify(this.props.state.resultDetails.volumeInfo)} */}
        {/* {JSON.stringify(book)} */}
        {book ? 
        <div>
          {book.imageLinks ? <img src={book.imageLinks.smallThumbnail} alt="thumbnail"></img> : ''}
          {/* {JSON.stringify(book.imageLinks.smallThumbnail)} */}
          {book.title}, {book.authors}, {book.publisher}, {book.publishedDate}, {book.description}, {book.pageCount}
        </div> 
        : ''
        }
        {/* <p>{book.title}, {book.authors}, {book.publisher}, {book.publishedDate}, {book.description}, {book.pageCount}</p>
        <img src={book.imageLinks.smallThumbnail} alt="thumbnail"></img> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default withRouter(connect(mapStateToProps)(ResultDetails));
