import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../Button'
import AnswerInputContainer from '../../containers/AnswerInputContainer'
import AnswerList from './AnswerList'
// import AnswerDetailContainer from '../../containers/AnswerDetailContainer'

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
    };
  }

  componentDidMount () {
    const { questions, id } = this.props;
    if (questions) {
      const q = questions.find((q) => {
        return q.id * 1 === id * 1;
      });
      this.setState(q);
      // this.fetchAnswers().then(anwsers => this.setState({ answersArray }))
    } else {
      // fetch the specific question
      // fetchQuestion().then(fetchAnswers).then(anwsers => this.setState({ answersArray }))
    }
  }

  fetchQuestion() {
    //return fetch(ble bla)
  }

  render() {
    const { title, question, user_name, answers, views, votes, created_at } = this.state
    let id = this.state.id || this.props.id
    return (
      <section>
        <div className="question-desc-wrapper">
          <h1 className="question-desc-title">{ title }</h1>
          <ReactMarkdown
            className="question-desc-md"
            source={ question }
          />
          <p>{ user_name }</p>
          <AnswerList question_id={id} />
        </div>
      </section>
    );
  }
}
