import React from 'react';
import { Link } from 'react-router-dom';

const PopularQuestions = ({ id, title, views }) => {
  return (
    <div className="popular-question">
      <div className="popular-views">{ views }</div>
      <Link className="title-link" to={`/question/${id}`}>{ title }</Link>
    </div>
  );
};

export default PopularQuestions;