import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ComCollectionItem from '../ComCollectionItem/ComCollectionItem';

class CommunityCollection extends Component {
  

  componentDidMount(){
    // dispatch to get collection for users
    // this.props.dispatch({type: 'FETCH_COLLECTION', payload: this.props.reduxState.user.id})
    // this.props.dispatch({type: 'FETCH_COM_COLLECTION', payload: this.state.user})
  }


  render() {
    return (
      <div>
        <h3>::{JSON.stringify(this.props.users)}</h3>
        {/* {JSON.stringify(this.props.collection)} */}
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
