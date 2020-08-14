import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
// const BrowserHistory = require('react-router/lib/BrowserHistory').default;

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
      imgUrl: book.imageLinks.thumbnail,
      user_id: this.props.state.user.id  
    }
    this.props.dispatch({type: 'ADD_BOOK', payload: bookToAdd})
  }

  goBack = () => {
      this.props.history.goBack();
  }
  
  render() {
    const book = this.props.state.resultDetails.volumeInfo
    return (
        <>
        {/* <h1>Search Result Details</h1> */}
        <div className="go-back" onClick={this.goBack}>&#10229; back to search</div>
        {book ? 
            <>
                <div className="book-details">
                    <div className="book-img">
                        {book.imageLinks ? <img src={book.imageLinks.thumbnail} alt="thumbnail" className="img-thumb"></img> : ''}
                    </div>
                    <div className="book-info">
                        <div className="book-title">
                            {book.title ? book.title : ''}
                        </div>
                        <div className="book-data">
                            {book.authors[0]}, {book.publisher}, {book.publishedDate}, {book.pageCount}
                        </div> 
                        <div className="book-description">
                            {book.description ? parse(book.description) : 'N/A'}
                        </div>
                        {/* <div className="collection-button">
                            {this.props.state.user.username ? <button onClick={this.postToCollection}>Add to Collection</button> : '' }
                        </div> */}
                    </div>
                </div>
                {this.props.state.user.username ?
                        <div className="collection-btn"> 
                            {/* <label htmlFor="add">Add to Collection</label> */}
                            <button id="btn" onClick={this.postToCollection}>Add to Collection</button>
                        </div>  
                        : '' }
            </>
        : ''}
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default withRouter(connect(mapStateToProps)(ResultDetails));
