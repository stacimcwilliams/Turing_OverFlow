import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainQuestionContainer from '../../containers/MainQuestionContainer';

export default class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchAllQuestions();
  }

  renderQuestions() {
    return this.props.questions.map((question) => {
      return (
        <MainQuestionContainer key={ question.id } { ...question } />
      );
    });
  }

  render() {
    const questions = this.renderQuestions();
    return (
      <section className="dashboard">
        <h2 className="dashboard-header">Dashboard</h2>
        <Link className="add-question-link" to={'/ask-question'}>Ask Question</Link>
        { questions }
      </section>
    );
  }
}
