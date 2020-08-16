import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/" className='title-link'>
      <div className="nav-header">
        <div className="nav-title">Transfiber Bookclub</div>
      </div>
    </Link>
    <div className="nav-views">
      <Link className="nav-link" to="/">
        Home
      </Link>
      {props.user.id ? 
        <Link className="nav-link" to="/community">
        Community
        </Link>
      : ''}
      {props.user.id ? 
        <Link className="nav-link" to="/collection">
          Collection
        </Link>
      : ''}
      {props.user.id ? <Link className="nav-link" to="/" onClick={() => props.dispatch({ type: 'LOGOUT' })}> Log Out</Link> : <Link className="nav-link" to="/login">Login/Register</Link>}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Nav));
