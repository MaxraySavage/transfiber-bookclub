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
            {/* <Redirect exact from="/search/" to="/home"/> */}
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* <Route
              exact
              path="/about"
              component={AboutPage}
            /> */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route exact path="/home" component={HomePage}/>
            <Route path="/book/:id" component={SearchResults}/>
            <Route path="/details/:id" component={ResultDetails}/>
            <ProtectedRoute exact path="/collection" component={Collection}/>
            <ProtectedRoute path="/form" component={BookForm}/>
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            {/* <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>

        </div>
      </Router>
  )}
}

export default connect()(App);
