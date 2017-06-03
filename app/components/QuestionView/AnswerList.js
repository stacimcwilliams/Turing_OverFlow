import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../Button'
import AnswerDetail from './AnswerDetail'
import AnswerInputContainer from '../../containers/AnswerInputContainer'

export default class AnswerList extends Component {
  constructor() {
    super();
    this.state = {
      answersArray: [],
      toggleInput: false
    };
  }

  componentDidMount () {
    const { question_id } = this.props

    if (question_id) {
      fetch('/api/v1/answers/' + question_id)
      .then(response => {
        response.json()
        .then((answersArray) => {
          this.setState({ answersArray: answersArray })
        })
      })
    }
  }

  getAnswers () {
    const { question_id } = this.props

    if (question_id) {
      fetch('/api/v1/answers/' + question_id)
      .then(response => {
        response.json()
        .then((answersArray) => {
          this.setState({ answersArray: answersArray })
        })
      })
    }
  }


  render() {
    let { toggleInput } = this.state
    const { question_id } = this.props

    const answersComponents = this.state.answersArray.map(answer => {
      return <AnswerDetail key={ answer.id } answer={ answer } />
    });

    return (
      <div> 
        <h2>Answers</h2>
        <section className="answer-list-wrapper">
          { answersComponents }
        </section>
          <Button name={'Sumbit a new Answer!'} handleClick={() => {
            toggleInput = !toggleInput 
            this.setState({ toggleInput })
          }}/>
          {
            toggleInput && <AnswerInputContainer refreshAnswers={() => this.getAnswers()} question_id={question_id } /> 
          }
      </div>
    )
  }
}








