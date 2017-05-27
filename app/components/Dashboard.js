import React, { Component } from 'react';

export default class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchAllQuestions();
    console.log(this.props);
  }

  render() {
    return (
      <h2>Dashboard</h2>
    );
  }
}