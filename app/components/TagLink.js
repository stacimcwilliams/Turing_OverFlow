import React from 'react';

const TagLink = ({ name, added, handleDelete }) => {
  return (
    <a className="tag-link">
      { name }
      { added === 'ask' &&
        (<span
          className="delete-tag-btn"
          onClick={ () => handleDelete(name) }>
          X
        </span>)
      }
    </a>
  );
};

export default TagLink;
