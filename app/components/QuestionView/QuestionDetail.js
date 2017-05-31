import React, { Component } from 'react';
import Button from '../Button'


export default class QuestionDetail extends Component {
  constructor() {
    super()
    this.state ={ 
    	title: '',
    	user_name: '',
    	answers: '',
    	answersArray:[],
    	views: '',
    	votes: '',
    	created_at: '',
    	id: '',
    }
  }

  render() {
  	const { title, question, user_name, answers, views, votes, created_at, id } = this.state
    return (
    	<div>
     	 	<h1>{ title }</h1>
      	<p>{ user_name }</p>
      	<p> { question } </p>
      	<Button name={'Answer!'}/>
      </div>
    )
  }

  fetchAnswers() {
  	//fetch the anwsers here
  	const answersID = this.state.anwsers
  	// return fetch(bla bla bla)
  }

  fetchQuestion() {
  	//return fetch(ble bla)
  }


  componentDidMount () {
  	const { questions, id } = this.props
  	if(questions) {
  		const q = questions.find(q => {
  			return q.id *1 === id *1
  		})
  		this.setState(q)
  		fetchAnswers().then(anwsers => this.setState({answersArray}))			
  	} else {
  		// fetch the specific question
  		fetchQuestion().then(fetchAnswers).then(anwsers => this.setState({answersArray}))		
  	}


  }
}
