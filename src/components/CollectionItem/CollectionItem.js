import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CollectionItem extends Component {

  render() {
      const book = this.props.book
    return (
      <div>
          {/* {JSON.stringify(this.props.book)} */}
          {book.img_url ? <img src={book.img_url} alt="thumbnail"></img> : ''}
          {/* {JSON.stringify(this.props.state.resultDetails.id)} */}
          {book.title ? book.title : ''}, {book.author}, {book.publisher}, {book.publishe_date}, {book.description ? book.description : 'N/A'}, {book.pageCount}
          {/* {this.props.state.user.username ? <button onClick={this.postToCollection}>Add to Collection</button> : '' }  */}
          {/* <button>Add to Collection</button> */}

      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapStateToProps)(CollectionItem));
