import React, { Component } from 'react';


export default class QuestionDetail extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <h1>{ this.props.questionID }</h1>
    )
  }
}
