import React from 'react';

const TagLink = ({ name, added, handleClick }) => {
  return (
    <a className="tag-link">
      { name }
      { added === 'ask' &&
        (<span
          className="delete-tag-btn"
          onClick={ () => handleClick(name) }>
          X
        </span>)
      }
    </a>
  );
};

export default TagLink;
