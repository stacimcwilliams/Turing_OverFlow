import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../containers/SearchContainer';

const NavBar = ({ auth, userLogout }) => {
  const loggedIn = auth.loggedIn();
  return (
    <div className={ 'nav-bar' }>
      <Link to={ '/' } className='home-link' />
      { loggedIn ?
          <button onClick={ () => { auth.logout(); userLogout({}); }}>Log Out</button>
          :
          <button onClick={ () => auth.login() }>Login</button>
      }
      <Search />
    </div>
  );
};

export default NavBar;
