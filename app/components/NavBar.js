import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../containers/SearchContainer';

const NavBar = ({ history }) => {
  return (
    <div className={ 'nav-bar' }>
      <Link to={ '/' } className='home-link' >
        <img src="https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/182/Turing---Logo-Black.png" />
      </Link >
      <Search history={ history } />
    </div>
  );
};

export default NavBar;
