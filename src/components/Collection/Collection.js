import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';

class Collection extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'CLEAR_COLLECTION'})
    // dispatch to get collection for users
    this.props.dispatch({type: 'FETCH_COLLECTION', payload: this.props.user})
  }


  render() {
    return (
      <div>
        <div className="content">Your Collection</div>
        {/* {JSON.stringify(this.props.collection)} */}
        {this.props.collection.map((item)=>{
          return (
            <CollectionItem key={ item.id } book={ item }/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  user: reduxState.user.id,
  collection: reduxState.collection
});

export default withRouter(connect(mapStateToProps)(Collection));
