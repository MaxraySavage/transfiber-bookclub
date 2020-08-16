import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SearchPage from '../SearchPage/SearchPage';
// import SearchResults from '../SearchResults/SearchResults';
import { Link, withRouter } from 'react-router-dom';
// import CommunityCollection from '../CommunityCollection/CommunityCollection';

class Community extends Component {

  state = {
    userSearch: '' 
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      userSearch: event.target.value
    })
    console.log(event.target.value)
  }

  handleClick = (event) => {
    this.props.dispatch({type: 'FETCH_USERS'})
  }

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_USERS'})
  }  
  // Home page component that is the parent to the Search Page and Search results components
  render() {
    const el = this.props.state.user.id;
    const index = this.props.state.allUsers.findIndex(i=>i.id === el);
    this.props.state.allUsers.splice(index, 1);

    return (
      <div>
        <div className="content">Search for user:</div>
        {/* {JSON.stringify(this.props.state.allUsers)} */}
        {/* {JSON.stringify(this.props.state.user)} */}
        <div className="search-bar">
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Search</button>
        </div>
        <div>
          {this.props.state.allUsers.map((item)=>{
            if (item.username === this.state.userSearch){
              return <Link key={item.id} className="nav-link" to={{pathname: '/community/collection/', search: `?sort=${item.id}`}}>{item.username}</Link>
            } return ''
          })}
        </div>
        
        {/* {JSON.stringify(this.props.state)} */}
        {/* <CommunityCollection/> */}
      </div>
      
      // <div>
      //   <div className="welcome">
      //   {this.props.state.user.username ? <div className="loggedIn">Welcome back, {this.props.state.user.username}</div> : <div className="loggedOut">Welcome to the <i>Transfiber Bookclub</i>, you can search for book titles using the search bar below.</div>}
      // </div>
      //   <SearchPage/>
      // </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(Community));
