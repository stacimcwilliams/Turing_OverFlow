import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TagLinkContainer from '../../containers/TagLinkContainer';

export default class MainQuestion extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
    };
  }

  componentWillMount() {
    this.props.fetchQuestionTags(this.props.id)
      .then((tags) => {
        this.setState({ tags: this.state.tags.concat(tags) });
      });
  }

  renderTags() {
    return this.state.tags.map(tag => <TagLinkContainer key={ tag.id } name={ tag.tag } />);
  }

  render() {
    const { title, user_name, answers, views, votes, created_at, id } = this.props;
    const tags = this.renderTags();
    return (
      <div className="question-wrapper">
        <div className="count-wrapper">
          <div>votes: { votes }</div>
          <div>answers: { answers }</div>
          <div>views: { views }</div>
        </div>
        <div className="summary-wrapper">
          <Link className="title-link" to={`/question/${id}`}>{ title }</Link>
          <div className="tags-wrapper">
            { tags }
          </div>
          <h4 className="main-user-name">{ user_name }</h4>
          <h5 className="main-created-at">asked { created_at }</h5>
        </div>
      </div>
    );
  }
}