import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import MainQuestionContainer from '../containers/MainQuestionContainer';

export default class SearchResults extends Component {
  constructor() {
    super();

  }

  renderQuestions() {
    console.log(this.props.searchResults)
    return this.props.searchResults.resultsArray.map((question) => {
      return (
        <MainQuestionContainer key={ question.id } { ...question } />
      );
    });
  }


  componentWillMount() {
    const { searchResults: { searchTerm, resultsArray }, searchTermMatch, fetchSearch } = this.props

    if (!searchTerm || !(searchTerm === searchTermMatch)) {
      fetchSearch(searchTermMatch).then(() => {
        console.log('Searching for', searchTermMatch)
        // this.forceUpdate()
      })
    }
  }

  render() {
    const questionResults = this.renderQuestions()
    return (
      <div className="search-results">
        {questionResults}
      </div>
    );
  }
}
