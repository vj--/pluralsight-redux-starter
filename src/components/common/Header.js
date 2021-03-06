import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, authenticated, logout}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      {(authenticated == 1) ? <input type="submit" value="Logout" className="btn btn-secondary" onClick={logout} />:"" }
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.number.isRequired,
  logout: PropTypes.func
};

export default Header;
