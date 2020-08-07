import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/">
      <h2 className="nav-title">Transfiber Bookclub</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/collection">
        Collection
      </Link>
      {props.user.id ? <LogOutButton className="nav-link"/> : <Link className="nav-link" to="/login">Login</Link>}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {/* {props.user.id && ( */}
        {/* <> */}
          {/* <Link className="nav-link" to="/info"> */}
            {/* Info Page */}
          {/* </Link> */}
          {/* <LogOutButton className="nav-link"/> */}
        {/* </> */}
      {/* )} */}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about"> */}
        {/* About */}
      {/* </Link> */}
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
