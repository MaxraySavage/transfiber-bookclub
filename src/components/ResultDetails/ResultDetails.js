import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ResultDetails extends Component {

  state = {
    title: '',
    author: '',
    publisher: '',
    publishedDate: '',
    description: '',
    pageCount: '',
    imgUrl: ''
  }

  componentDidMount(){
    const queryString = this.props.history.location.pathname.split('/details/');
    const query = queryString[1];
    // console.log('details query:', query)
    this.props.dispatch({type: 'DETAILS', payload: query})
  }

  postToCollection = () => {
    // adding a book to collection will need to first add this book to the database
    const book = this.props.state.resultDetails.volumeInfo
    const bookToAdd = {
      api_id: this.props.state.resultDetails.id,
      title: book.title,
      author: book.authors[0],
      publisher: book.publisher,
      publishedDate: book.publishedDate,
      description: book.description,
      pageCount: book.pageCount,
      imgUrl: book.imageLinks.smallThumbnail,
      user_id: this.props.state.user.id  
    }
    this.props.dispatch({type: 'ADD_BOOK', payload: bookToAdd})

    // this.props.dispatch({type: 'ADD_TO_COLLECTION', payload: this.props.state.resultDetails.volumeInfo});
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
          {/* {JSON.stringify(this.props.state.resultDetails.id)} */}
          {book.title ? book.title : ''}, {book.authors[0]}, {book.publisher}, {book.publishedDate}, {book.description ? book.description : 'N/A'}, {book.pageCount}
          {this.props.state.user.username ? <button onClick={this.postToCollection}>Add to Collection</button> : '' } 
          {/* <button>Add to Collection</button> */}
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
