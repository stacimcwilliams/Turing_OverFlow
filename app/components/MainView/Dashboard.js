import React, { Component } from 'react';

import MainQuestion from './MainQuestion';

export default class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchAllQuestions();
    console.log(this.props);
  }

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <MainQuestion questionID="1" />
      </section>

    );
  }
}