import React from 'react';

const TagLink = ({ name, fetchTag, storedHistory }) => {
  const searchDB = () => {
    fetchTag(name).then(() => storedHistory.push(`/search/tag/${name}`));
  };

  return (
    <a className="tag-link" onClick={ () => searchDB() }>
      { name }
    </a>
  );
};

export default TagLink;
