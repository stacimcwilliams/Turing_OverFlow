import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import MainQuestionContainer from '../containers/MainQuestionContainer';

export default class SearchResults extends Component {

  renderQuestions() {
    return this.props.searchResults.resultsArray.map((question) => {
      return (
        <MainQuestionContainer key={ question.id } { ...question } />
      );
    });
  }

  componentWillMount() {
    const { searchResults: { searchTerm, resultsArray }, searchTermMatch, fetchSearch } = this.props;

    if ((!searchTerm || !(searchTerm === searchTermMatch)) && searchTermMatch) {
      fetchSearch(searchTermMatch);
    }
  }

  render() {
    const questionResults = this.renderQuestions();

    return (
      <div className="search-results">
        <h2 className="search-results-header">Search results</h2>
        {
          questionResults.length ?
          questionResults :
          <p>No results found</p>
        }
      </div>
    );
  }
}
