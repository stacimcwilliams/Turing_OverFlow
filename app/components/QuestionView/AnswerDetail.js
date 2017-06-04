import React from 'react';
import ReactMarkdown from 'react-markdown';

import UserVoteDetails from '../UserVoteDetails';

const AnswerDetail = ({ answer: { answer, votes, created_at, user_name } }) => {
  return (
    <div className="answer-detail">
      <ReactMarkdown
        className="answer-desc-md"
        source ={ answer }
      />
      <UserVoteDetails
        user_name={ user_name }
        votes={ votes }
        // handleVotes={ this.handleVotes }
        created_at={ created_at }
      />
    </div>
  );
};

export default AnswerDetail;
