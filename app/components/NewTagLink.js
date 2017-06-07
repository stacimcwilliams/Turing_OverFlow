import React from 'react';

const NewTagLink = ({ name, handleDelete }) => {
  return (
    <a className="tag-link">
      { name }
        <span
          className="delete-tag-btn"
          onClick={ () => handleDelete(name) }>
          X
        </span>
    </a>
  );
};

export default NewTagLink;
