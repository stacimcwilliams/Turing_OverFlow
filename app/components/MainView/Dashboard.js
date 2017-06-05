import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PopularQuestions from './PopularQuestions';
import MainQuestionContainer from '../../containers/MainQuestionContainer';

export default class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchAllQuestions();
    this.props.fetchPopularQuestions();
  }

  renderQuestions() {
    return this.props.questions.map((question) => {
      return (
        <MainQuestionContainer key={ question.id } { ...question } />
      );
    });
  }

  renderPopularQuestions() {
    return this.props.popularQuestions.map((question) => {
      const { id, title, views } = question;
      return (
        <PopularQuestions key={ id } title={ title } views={ views } id={ id } />
      );
    });
  }

  render() {
    const questions = this.renderQuestions();
    const popularQuestions = this.renderPopularQuestions();
    return (
      <section className="dashboard">
        <div className="dashboard-questions-wrapper">
          <div className='dashboard-header-container'>
            <h2 className="dashboard-header">Dashboard</h2>
            <Link className="add-question-link" to={'/ask-question'}>Ask Question</Link>
          </div>
          { questions }
        </div>
        <div className="popular-data">
          <div className='dashboard-header-container'>
            <h2 className="dashboard-header">Popular Questions</h2>
          </div>
          <div className="popular-questions-wrapper">
            { popularQuestions }
          </div>
        </div>
      </section>
    );
  }
}
