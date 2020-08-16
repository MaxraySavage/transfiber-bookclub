import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';


class ComCollectionItem extends Component {

  removeFromCollection = () => {
    const book = this.props.book
    this.props.dispatch({type: 'REMOVE_FROM_COLLECTION', payload: book.book_id})
  }

  render() {
    const book = this.props.book
    return (
      <div className="book-details">
        <div className="book-img">
            {book.img_url ? <img src={book.img_url} alt="thumbnail"></img> : ''}
        </div>
        <div className="book-info">
          <div className="book-header">
            <div className="book-title">
              {book.title ? book.title : ''}
            </div>
            <div className="book-progress">
              {book.is_complete ? 'Completed' : 'In Progress'}
            </div>
          </div>
            <div className="book-data">
                {book.author}, {book.publisher}, {book.publishe_date}, {book.pageCount}
            </div>
            <div className="book-description">
                {book.description ? parse(book.description) : 'N/A'}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapStateToProps)(ComCollectionItem));
