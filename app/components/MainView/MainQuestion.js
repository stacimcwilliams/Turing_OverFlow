import React from 'react';

import { Link } from 'react-router-dom'


const MainQuestion = ({ questionID }) => {
  return (
    <div>
      <Link to={'/question'} className="btn" > great question: {questionID} </Link>
    </div>
  )
}

export default MainQuestion
