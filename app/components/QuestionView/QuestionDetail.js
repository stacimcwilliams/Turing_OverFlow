import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../Button';
import TagLink from '../TagLink';
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
    if (questions) {
      const q = questions.find((q) => {
        return q.id * 1 === id * 1;
      });
      this.fetchTags(q.id);
      this.setState(q);
      this.updateQuestionViews(q.id);
      // this.fetchAnswers().then(anwsers => this.setState({ answersArray }))
    } else {
      // fetch the specific question
      // fetchQuestion().then(fetchAnswers).then(anwsers => this.setState({ answersArray }))
    }
  }

  fetchQuestion() {
    //return fetch(ble bla)
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
          <div className="question-info-wrapper">
            <div className="vote-details-wrapper">
              <h6>Votes</h6>
              <div className="vote-btn-wrapper">
                <Button
                  className="vote-up"
                  name="up"
                  handleClick= { this.handleVotes }
                />
                { votes }
                <Button
                  className="vote-down"
                  name="down"
                  handleClick= { this.handleVotes }
                />
              </div>
            </div>
            <div className="detail-user-info">
              <p>asked { created_at }</p>
              <p>{ user_name }</p>
            </div>
          </div>
        </div>
        <AnswerListContainer question_id={id} />
      </section>
    );
  }
}
