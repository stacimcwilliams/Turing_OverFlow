import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../containers/SearchContainer';

const NavBar = () => {
  return (
    <div className={ 'nav-bar' }>
      <Link to={ '/' } className='home-link' />
      <Search />
    </div>
  );
};

export default NavBar;
