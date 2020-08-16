import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import SearchResults from '../SearchResults/SearchResults';
import ResultDetails from '../ResultDetails/ResultDetails';
import BookForm from '../BookForm/BookForm';
import Collection from '../Collection/Collection';
import Community from '../Community/Community';
import CommunityCollection from '../CommunityCollection/CommunityCollection';


import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  clearSearch = () => {
    console.log('nav title clicked');
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={HomePage}/>
            <Route path="/book/:id" component={SearchResults}/>
            <Route path="/details/" component={ResultDetails}/>
            <ProtectedRoute exact path="/collection" component={Collection}/>
            <ProtectedRoute exact path="/community" component={Community}/>
            <ProtectedRoute exact path="/community/collection" component={CommunityCollection}/>
            <ProtectedRoute path="/form" component={BookForm}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>

        </div>
      </Router>
  )}
}

export default connect()(App);
