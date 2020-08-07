import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class Collection extends Component {
  
  // componentDidMount(){
  //   const queryString = this.props.history.location.pathname.split('/search/');
  //   const query = queryString[1];
  //   // search dispatch to API
  //   this.props.dispatch({type: 'SEARCH_API', payload: query});
  //   // search dispatch to Database
  //   this.props.dispatch({type: 'SEARCH_DB', payload: query});
  // }

  // viewDetails = (event, data) => {
  //   event.preventDefault();
  //   console.log('viewDetails button clicked with book id:', data);
  //   // this.props.dispatch({type: 'DETAILS', payload: data})
  //   this.props.history.push(`/details/${data}`);
  // }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapStateToProps)(Collection));
