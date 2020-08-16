import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ComCollectionItem from '../ComCollectionItem/ComCollectionItem';

class CommunityCollection extends Component {

  state = {
    username: ''
  }
  

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_USERS'})
    const queryString = this.props.history.location.search.split('=');
    const query = Number(queryString[1]);
    this.props.dispatch({type: 'CLEAR_COLLECTION'})
    this.props.dispatch({ type: 'FETCH_COM_COLLECTION', payload: query })
  }


  render() {
    const queryString = this.props.history.location.search.split('=');
    const query = Number(queryString[1]);
    const index = this.props.users.findIndex(i=>i.id === query)
    return (
      <div>
        <div className="content">
          {this.props.users[index] ? <>{this.props.users[index].username}'s Collection</> : '' }
        </div>
        {this.props.collection.map((item)=>{
          return (
            <ComCollectionItem key={ item.id } book={ item }/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  collection: reduxState.collection,
  users: reduxState.allUsers,
});

export default withRouter(connect(mapStateToProps)(CommunityCollection));
