import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class SearchPage extends Component {

  state = {
    query: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    })
  }

  handleClick = () => {
    console.log('search query on click:', this.state.query)
    // const query = this.state.query
    // test api call to server from client
    // axios.get('/api/search').then((response)=>{
    //   console.log('back from GET:', response.data);
    // }).catch((err)=>{
    //   console.log('error with GET', err);
    // })
    // get call using sagas and reduers
    this.props.dispatch({type: 'SEARCH'})
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="search" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Enter</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(SearchPage);
