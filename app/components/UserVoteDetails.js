import React from 'react';

import AuthButton from './AuthButton';

const UserVoteDetails = ({ user_name, votes, created_at, handleVotes, details, auth }) => {
  return (
    <div className="user-vote-info-wrapper">
      <div className="vote-details-wrapper">
        <h6>Votes</h6>
        <div className="vote-btn-wrapper">
          <AuthButton
            className="vote-up"
            name="up"
            handleClick={ handleVotes }
            auth={ auth }
          />
          { votes }
          <AuthButton
            className="vote-down"
            name="down"
            handleClick={ handleVotes }
            auth={ auth }
          />
        </div>
      </div>
      <div className="detail-user-info">
        <p>{ details } { created_at }</p>
        <p>{ user_name }</p>
      </div>
    </div>
  );
};

export default UserVoteDetails;