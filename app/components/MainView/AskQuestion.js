import React, { Component } from 'react';
import SimpleMDE from 'simplemde';
import Alert from 'react-s-alert';

import Button from '../Button';
import TagLink from '../TagLink';
import '../../../node_modules/simplemde/dist/simplemde.min.css';

export default class AskQuestion extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      name: '',
      question: '',
      tagText: '',
      tags: [],
    };
    this.handleTagDelete = this.handleTagDelete.bind(this);
  }

  componentDidMount() {
    const simplemde = new SimpleMDE({
      element: document.getElementById('editor'),
      placeholder: 'Type question here...',
    });
    simplemde.codemirror.on('change', () => {
      const question = simplemde.value();
      this.setState({ question });
    });
    simplemde.value(this.state.question);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleTags(tag) {
    this.setState({
      tags: this.state.tags.concat(tag),
      tagText: '',
    });
  }

  inputChecker() {
    return Object.keys(this.state).filter((value) => {
      if (!this.state[value].length && value !== 'tagText') {
        Alert.error(`Please enter a value into the ${value} field`);
      } else {
        return value;
      }
    });
  }

  postQuestion(title, question, name, tags) {
    const valuesEntered = this.inputChecker();
    if (valuesEntered.length === 5) {
      this.props.addQuestion(title, question, name, tags)
        .then((response) => {
          console.log('postQuestion', response);
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
    const { title, question, tagText, tags, name } = this.state;
    const renderTags = this.renderTags();

    return (
      <div className="ask-question-wrapper">
        <h2 className="ask-question-header">Ask Question</h2>
        <div className="title-wrapper">
          <label>Title</label>
          <input
            className="title-input"
            placeholder="Enter your programming question"
            name="title"
            value={ title }
            minLength="15"
            maxLength="200"
            onChange={ e => this.handleInput(e) }
          />
        </div>
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
        <div className="tags-wrapper">
          <label>Tags</label>
          <input
            className="tag-input"
            placeholder="Enter a minimum of one tag"
            name="tagText"
            value={ tagText }
            minLength="15"
            maxLength="50"
            onChange={ e => this.handleInput(e) }
          />
          <Button
            className="tag--btn"
            name="+"
            handleClick={ () => this.handleTags(tagText) }
          />
        </div>
        <div className="add-tags-wrapper">
          { tags.length !== 0 && (renderTags) }
        </div>
        <Button
          className="submit-question--btn"
          name="Submit Question"
          handleClick={ () => this.postQuestion(title, question, name, tags) }
        />
      </div>
    );
  }
}