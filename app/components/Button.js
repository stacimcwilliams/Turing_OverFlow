import React from 'react';

const Button = ({ handleClick, className, name, btnName }) => {
  return (
    <button
      className={ `btn ${className}` }
      name={ name }
      onClick={ (e) => handleClick(e) }>
      { btnName }
    </button>
  )
}

export default Button
