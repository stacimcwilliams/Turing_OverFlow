import React from 'react';
import Button from './Button'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className={ `nav-bar` }>
      <Link to={ '/' } className='btn home' />
    </div>
  )
}

export default NavBar