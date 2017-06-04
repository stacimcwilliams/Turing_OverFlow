import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../Button';
import AnswerDetail from './AnswerDetail';
import AnswerInputContainer from '../../containers/AnswerInputContainer';

export default class AnswerList extends Component {
  constructor() {
    super();
    this.state = {
      answersArray: [],
      toggleInput: false,
    };
  }

  componentDidMount() {
    this.getAnswers('mount');
  }

  getAnswers(fired) {
    const { question_id } = this.props;

    if (question_id) {
      fetch(`/api/v1/answers/${question_id}`)
      .then(response => {
        response.json()
        .then((answersArray) => {
          fired !== 'mount' && this.props.updateQuestionCounters(question_id, 'up', 'answers');
          this.setState({ answersArray });
        });
      });
    }
  }

  toggleInput() {
    const toggleInput = !this.state.toggleInput;
    this.setState({ toggleInput });
  }


  render() {
    const { toggleInput } = this.state;
    const { question_id } = this.props;
    const answersComponents = this.state.answersArray.map(answer => {
      return <AnswerDetail key={ answer.id } answer={ answer } />;
    });

    return (
      <div>
        <h2>Answers</h2>
        <section className="answer-list-wrapper">
          { answersComponents }
        </section>
          <Button
            className="show-answer--btn"
            btnName={'Add a new Answer'}
            handleClick={() => this.toggleInput() }
          />
          {
            toggleInput &&
            <AnswerInputContainer
              refreshAnswers={ () => this.getAnswers() }
              question_id={ question_id }
            />
          }
      </div>
    );
  }
}
