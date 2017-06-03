import React from 'react';

const AnswerDetail = ({ answer: { answer, user_name } }) => {
  return (
    <div className="answer-detail">
      <p>{ answer }</p>
      <p>{ user_name }</p>
    </div>
  );
};

export default AnswerDetail;
