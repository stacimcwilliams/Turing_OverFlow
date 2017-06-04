import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import UserVoteDetails from '../UserVoteDetails';

export default class AnswerDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      votes: props.answer.votes,
    };
    this.handleAnswerVotes = this.handleAnswerVotes.bind(this);
  }

  handleAnswerVotes(e) {
    const { id } = this.props.answer;
    const { name } = e.target;
    this.props.updateAnswerCounters(id, name)
      .then((response) => {
        this.setState({ votes: response.votes });
      });
  }

  render() {
    const { user_name, handleAnswerVotes, created_at, answer } = this.props.answer;
    const { votes } = this.state;
    return (
      <div className="answer-detail">
        <ReactMarkdown
          className="answer-desc-md"
          source ={ answer }
        />
        <UserVoteDetails
          user_name={ user_name }
          votes={ votes }
          handleVotes={ this.handleAnswerVotes }
          created_at={ created_at }
        />
      </div>
    );
  }
}
