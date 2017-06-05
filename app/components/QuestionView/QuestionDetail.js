import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../Button';
import TagLink from '../TagLink';
import UserVoteDetails from '../UserVoteDetails';
import AnswerInputContainer from '../../containers/AnswerInputContainer';
import AnswerListContainer from '../../containers/AnswerListContainer';

export default class QuestionDetail extends Component {
  constructor() {
    super();
    this.state = {
      answers: '',
      answersArray: [],
      created_at: '',
      id: '',
      question: '',
      title: '',
      updated_at: '',
      user_name: '',
      views: '',
      votes: '',
      tags: [],
    };
    this.handleVotes = this.handleVotes.bind(this);
  }

  componentWillMount() {
    const { questions, id } = this.props;
    const q = questions.find((q) => {
      return q.id * 1 === id * 1;
    });

    if (q) {
      this.fetchMatchedQuestion(q);
    } else {
      this.fetchNewQuestion(id);
    }
  }

  fetchNewQuestion(id) {
    this.props.fetchQuestion(id)
      .then(question => {
        this.setState(question);
        this.fetchTags(question.id);
      });
  }

  fetchMatchedQuestion(question) {
    this.fetchTags(question.id);
    this.setState(question);
    this.updateQuestionViews(question.id);
  }

  fetchTags(id) {
    this.props.fetchQuestionTags(id)
      .then((tags) => {
        this.setState({ tags: this.state.tags.concat(tags) });
      });
  }

  updateQuestionViews(id) {
    this.props.updateQuestionCounters(id, 'up', 'views')
    .then((response) => {
      this.setState({ views: response.views });
    });
  }

  renderTags() {
    return this.state.tags.map(tag => <TagLink key={ tag.id } name={ tag.tag } />);
  }

  handleVotes(e) {
    const { id } = this.state;
    const { name } = e.target;

    this.props.updateQuestionCounters(id, name, 'votes')
      .then((response) => {
        this.setState({ votes: response.votes });
      });
  }

  render() {
    const { title, question, user_name, answers, views, votes, created_at } = this.state;
    const id = this.state.id || this.props.id;
    const tags = this.renderTags();

    return (
      <section>
        <div className="question-desc-wrapper">
          <h1 className="question-desc-title">{ title }</h1>
          <ReactMarkdown
            className="question-desc-md"
            source={ question }
          />
          <div className="tags-wrapper">
            { tags }
          </div>
          <UserVoteDetails
            user_name={ user_name }
            votes={ votes }
            handleVotes={ this.handleVotes }
            created_at={ created_at }
            details={'asked'}
          />
        </div>
        <AnswerListContainer question_id={ id } />
      </section>
    );
  }
}
