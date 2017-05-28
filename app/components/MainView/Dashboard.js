import React, { Component } from 'react';

import MainQuestion from './MainQuestion';

export default class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchAllQuestions();
    console.log(this.props);
  }

  renderQuestions() {
    return this.props.questions.map((question, i) => {
      return (
        <MainQuestion key={question.id} {...question} />
      );
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h2 className="dashboard-header">Dashboard</h2>
        {this.renderQuestions()}
      </section>
    );
  }
}
