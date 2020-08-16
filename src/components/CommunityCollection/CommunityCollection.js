import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ComCollectionItem from '../ComCollectionItem/ComCollectionItem';

class CommunityCollection extends Component {

  state = {
    username: ''
  }
  

  componentDidMount(){
    // this.props.dispatch({type: 'FETCH_USERS'})

    const queryString = this.props.history.location.search.split('=');
    const query = Number(queryString[1]);
    this.props.dispatch({ type: 'FETCH_COM_COLLECTION', payload: query })
    // this.setState({
    //   username: this.props.users[index].username
    // })
    // console.log('user:', this.props.users[index].username)
    // dispatch to get collection for users
    // this.props.dispatch({type: 'FETCH_COLLECTION', payload: this.props.reduxState.user.id})
    // this.props.dispatch({type: 'FETCH_COM_COLLECTION', payload: this.state.user})
    // console.log('showing user id:', this.userId)
  }


  render() {
    // const queryString = this.props.history.location.search.split('=');
    // const query = Number(queryString[1]);
    // const index = this.props.users.findIndex(i=>i.id === query)
    // const user = this.props.users[index].username
    // const index = this.props.users.findIndex(i=>i.id === query);
    return (
      <div>
        <h3>'s Collection</h3>
        {/* {JSON.stringify(this.props.collection)} */}
        {/* {JSON.stringify(this.props.users)} */}
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
