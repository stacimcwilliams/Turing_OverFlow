import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';


import NavBar from './NavBar';
import DashboardContainer from '../containers/DashboardContainer';
import AskQuestionContainer from '../containers/AskQuestionContainer';
import QuestionDetailContainer from '../containers/QuestionDetailContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';

export default class App extends Component {

  componentDidMount() {
    const { history, addHistoryToStore } = this.props;
    addHistoryToStore(history);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={ DashboardContainer } />
        <Route exact path='/ask-question' component={ AskQuestionContainer }/>
        <Route path="/question/:id" render={ ({ match }) => {
          return <QuestionDetailContainer id={ match.params.id } history={ history } />;
        }}
      />
      <Route exact path="/search/:searchTerm" render={ ({ match, location }) => {
        return <SearchResultsContainer location={ location } searchTermMatch={ match.params.searchTerm } />;
      }}/>
      <Route exact path="/search/tag/:tag" render={ ({ match, location }) => {
        return <SearchResultsContainer location={ location } searchTermMatch={ match.params.tag } />;
      }}/>
      <Alert
        stack={{ limit: 5 }}
        position="top"
        timeout={ 5000 }
        effect='stackslide'
      />
    </div>
    );
  }
}
