import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import TagLink from '../TagLink';
import Button from '../Button'


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
  }

  componentDidMount () {
    const { questions, id } = this.props;
    if (questions) {
      const q = questions.find((q) => {
        return q.id * 1 === id * 1;
      });
      this.fetchTags(q.id);
      this.setState(q);
      // fetchAnswers().then(anwsers => this.setState({ answersArray }))
    } else {
      // fetch the specific question
      // fetchQuestion().then(fetchAnswers).then(anwsers => this.setState({ answersArray }))
    }
  }

  fetchAnswers() {
    //fetch the anwsers here
    const answersID = this.state.anwsers
    // return fetch(bla bla bla)
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

  renderTags() {
    return this.state.tags.map(tag => <TagLink key={ tag.id } name={ tag.tag } />);
  }

  render() {
    const { title, question, user_name, answers, views, votes, created_at, id } = this.state;
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
                />
                { votes }
                <Button
                  className="vote-down"
                />
              </div>
            </div>
            <div className="detail-user-info">
              <p>asked { created_at }</p>
              <p>{ user_name }</p>
            </div>
          </div>
          <Button name="Answer"/>
        </div>
      </section>
    );
  }
}
