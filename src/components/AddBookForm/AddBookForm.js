import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddBookForm extends Component {

  state = {
    title: '',
    author: '',
    publisher: '',
    publishedDate: '',
    description: '',
    pageCount: '',
    imgUrl: ''
  }
  handleChange = (propertyName) => (event) => {
    event.preventDefault();
    console.log(`form input for ${propertyName}: ${event.target.value}`)
    switch (propertyName) {
      case 'title':
        this.setState({
          title: event.target.value
        });
      break;
      case 'author':
        this.setState({
          author: event.target.value
        });;
      break;
      case 'publisher':
        this.setState({
          publisher: event.target.value
        });
      break;
      case 'publish-date':
        this.setState({
          publishedDate: event.target.value
        });
      break;
      case 'description':
        this.setState({
          description: event.target.value
        });
      break;
      case 'page-count':
        this.setState({
          pageCount: event.target.value
        });
      break;
      case 'image-url':
        this.setState({
          imgUrl: event.target.value
        });
      break;
      default:
        return propertyName;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit clicked with:', this.state);
    this.props.dispatch({type: 'ADD_BOOK', payload: this.state})
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" onChange={this.handleChange('title')}></input><br/>
          <input type="text" placeholder="author" onChange={this.handleChange('author')}></input><br/>
          <input type="text" placeholder="publisher" onChange={this.handleChange('publisher')}></input><br/>
          <input type="text" placeholder="publish date" onChange={this.handleChange('publish-date')}></input><br/>
          <input type="text" placeholder="description" onChange={this.handleChange('description')}></input><br/>
          <input type="text" placeholder="page count" onChange={this.handleChange('page-count')}></input><br/>
          <input type="text" placeholder="image URL" onChange={this.handleChange('image-url')}></input><br/>
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (reduxState) => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(AddBookForm));
