import React from 'react';

import Button from './Button';

const UserVoteDetails = ({ user_name, votes, created_at, handleVotes, details }) => {
  return (
    <div className="user-vote-info-wrapper">
      <div className="vote-details-wrapper">
        <h6>Votes</h6>
        <div className="vote-btn-wrapper">
          <Button
            className="vote-up"
            name="up"
            handleClick={ handleVotes }
          />
          { votes }
          <Button
            className="vote-down"
            name="down"
            handleClick={ handleVotes }
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