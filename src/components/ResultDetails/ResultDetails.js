import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';

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

  postDbToCollection = () => {
    alert('figure out how to add this by id with transaction')
  }

  goBack = () => {
      this.props.history.goBack();
  }
  
  render() {
    const book = this.props.state.resultDetails.volumeInfo
    const dbBook = this.props.state.resultDetails
    return (
        <>
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
                    </div>
                </div>
                {this.props.state.user.username ?
                        <div className="collection-btn"> 
                            <button id="btn" onClick={this.postToCollection}>Add to Collection</button>
                        </div>  
                        : '' }
            </>
        : ''}
        {dbBook && !book ? 
            <>
                <div className="book-details">
                    <div className="book-img">
                        {dbBook.img_url ? <img src={dbBook.img_url} alt="thumbnail" className="img-thumb"></img> : ''}
                    </div>
                    <div className="book-info">
                        <div className="book-title">
                            {dbBook.title ? dbBook.title : ''}
                        </div>
                        <div className="book-data">
                            {dbBook.author}, {dbBook.publisher}, {dbBook.publish_date}, {dbBook.page_count}
                        </div> 
                        <div className="book-description">
                            {dbBook.description ? parse(dbBook.description) : 'N/A'}
                        </div>
                    </div>
                </div>
                {this.props.state.user.username ?
                        <div className="collection-btn"> 
                            <button id="btn" onClick={this.postDbToCollection}>Add to Collection</button>
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
