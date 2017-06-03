import React from 'react';
import ReactMarkdown from 'react-markdown';

const AnswerDetail = ({ answer: { answer, user_name } }) => {
  return (
    <div className="answer-detail">
      <p>{ user_name }</p>
      <ReactMarkdown
        className="answer-desc-md"
        source ={ answer }
      />
    </div>
  );
};

export default AnswerDetail;
