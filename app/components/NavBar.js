import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../containers/SearchContainer';

const NavBar = ({ auth, userLogout }) => {
  const loggedIn = auth.loggedIn();
  return (
    <div className={ 'nav-bar' }>
      <Link to={ '/' } className='home-link' />
      <Search />
      { loggedIn ?
          <button className='logout--btn' onClick={ () => { auth.logout(); userLogout({}); }}>Log Out</button>
          :
          <button className='login--btn' onClick={ () => auth.login() }>Login</button>
      }
    </div>
  );
};

export default NavBar;
