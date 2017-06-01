import React from 'react';

const Button = ({ handleClick, className, name }) => {
  return (
    <button className={ `btn ${className}` } onClick={ () => handleClick() }>{ name }</button>
  );
};

export default Button;
