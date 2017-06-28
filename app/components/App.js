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

import config from '../../config.json';
import Auth from '../Auth/auth';

const auth = new Auth(config.CLIENT_ID, config.DOMAIN);

export default class App extends Component {

  componentDidMount() {
    const { history, addHistoryToStore } = this.props;
    const profile = auth.getProfile();
    const token = auth.loggedIn();

    addHistoryToStore(history);
    token && (this.storeUser(profile, token));
  }

  storeUser(profile, token) {
    const user = Object.assign({}, profile, { token });
    this.props.userLogin(user);
  }

  render() {
    const { userLogout } = this.props;
    return (
      <div>
        <NavBar auth={ auth } userLogout={ userLogout }/>
        <Route exact path='/ask-question' component={ AskQuestionContainer }/>
        <Route exact path="/" render={ () => {
          return <DashboardContainer auth={ auth } />;
        }}
        />
        <Route path="/question/:id" render={ ({ match }) => {
          return <QuestionDetailContainer id={ match.params.id } history={ history } />;
        }}
        />
        <Route exact path="/search/:searchTerm" render={ ({ match, location }) => {
          return <SearchResultsContainer
            location={ location }
            searchTermMatch={ match.params.searchTerm }
          />;
        }}
        />
        <Route exact path="/search/tag/:tag" render={ ({ match, location }) => {
          return <SearchResultsContainer
            location={ location }
            searchTermMatch={ match.params.tag }
          />;
        }}
        />
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
