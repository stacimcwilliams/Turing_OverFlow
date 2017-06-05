import React, { Component } from 'react';
import SimpleMDE from 'simplemde';
import Alert from 'react-s-alert';

import Button from '../Button';
import '../../../node_modules/simplemde/dist/simplemde.min.css';

export default class AnswerInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      answer: '',
    };
  }

  componentDidMount() {
    const simplemde = new SimpleMDE({
      element: document.getElementById('editor'),
      placeholder: 'Type answer here...',
    });
    simplemde.codemirror.on('change', () => {
      const answer = simplemde.value();
      this.setState({ answer });
    });
    simplemde.value(this.state.answer);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  inputChecker() {
    return ['name', 'answer'].filter((value) => {
      if (!this.state[value].length) {
        Alert.error(`Please enter a value into the ${value} field`);
      } else {
        return value;
      }
    });
  }

  postAnswer(answer, name) {
    const { question_id, refreshAnswers } = this.props;
    const valuesEntered = this.inputChecker();
    if (valuesEntered.length === 2) {
      this.props.addAnswer(question_id, answer, name)
        .then((response) => {
          refreshAnswers();
        });
    }
  }

  render() {
    const { question, answer, name } = this.state;

    return (
      <div className="ask-question-wrapper">
        <h2 className="ask-question-header">Submit Answer</h2>
        <div className="user-name-wrapper">
          <label>User</label>
          <input
            className="user-name-input"
            placeholder="Enter your name"
            name="name"
            value={ name }
            maxLength="200"
            onChange={ e => this.handleInput(e) }
          />
        </div>
        <textarea id="editor" />
        <Button
          className="submit-answer--btn"
          btnName="Submit Answer"
          handleClick={ () => this.postAnswer(answer, name) }
        />
      </div>
    );
  }
}
