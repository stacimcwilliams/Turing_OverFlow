import React, { Component } from 'react';
import SimpleMDE from 'simplemde';
import Alert from 'react-s-alert';

import Button from '../Button';
import TagLink from '../TagLink';
import '../../../node_modules/simplemde/dist/simplemde.min.css';

export default class AnswerInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      answer: ''
    };
    this.handleTagDelete = this.handleTagDelete.bind(this);
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
    const { question_id } = this.props
    const valuesEntered = this.inputChecker();
    if (valuesEntered.length === 2) {
      this.props.addAnswer(question_id, answer, name)
        .then((response) => {
          console.log('postAnswer', response);
        });
    }
  }

  renderTags() {
    return this.state.tags.map((tag, i) =>
      <TagLink key={i} name={ tag } added='ask' handleDelete={ this.handleTagDelete }/>,
    );
  }

  handleTagDelete(tagName) {
    const filteredTags = this.state.tags.filter(tag => tag !== tagName);
    this.setState({ tags: filteredTags });
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
          name="Submit answer"
          handleClick={ () => this.postAnswer(answer, name) }
        />
      </div>
    );
  }
}