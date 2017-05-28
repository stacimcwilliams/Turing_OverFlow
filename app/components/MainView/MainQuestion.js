import React from 'react';

import { Link } from 'react-router-dom';


const MainQuestion = ({ id, title, user_name, answers, views, votes, created_at }) => {
  return (
    <div>
      <div className="count-wrapper">
        <div>votes: { votes }</div>
        <div>answers: { answers }</div>
        <div>views: { views }</div>
      </div>
      <div className="summary-wrapper">
        <Link to={'/question'}> {title} </Link>
        <h4>{ user_name }</h4>
        <h5>{ created_at }</h5>
      </div>
    </div>
  );
};

export default MainQuestion;
