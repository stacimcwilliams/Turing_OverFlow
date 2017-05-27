import React, { Component } from 'react';

export default class Dashboard extends Component {

  componentWillMount() {
    fetch('/api/v1/questions')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((questions) => {
      console.log(questions);
    });
  }

  render() {
    return (
      <h2>Dashboard</h2>
    );
  }
}