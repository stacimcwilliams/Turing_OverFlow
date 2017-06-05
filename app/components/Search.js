import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';

import Button from './Button';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    }

    this.searchDB = this.searchDB.bind(this);
  }

  searchDB() {
    const { searchTerm } = this.state
    const { fetchSearch, history } = this.props

    if( searchTerm ) {
      fetchSearch(searchTerm).then(() => history.push(`/search/${searchTerm}`))
    } else {
      Alert.error(`Please enter a term to search`);
    }
  }

  componentDidMount() {
    console.log('search DID MOUNT ')
    document.getElementsByClassName('search-input')[0].onkeypress = (e) => {
      if (!e) e = window.event; //stack o
      var keyCode = e.keyCode || e.which; //stack o
      if (keyCode == '13'){
        this.searchDB()
      }
    }
  }

  render() {
    return (
      <div className="search-container">
        <input 
          className="search-input" 
          placeholder="Search..." 
          onChange={(e)=> this.setState({ searchTerm: e.target.value })}/>
        <Button className="search--btn" handleClick={ this.searchDB }/>
      </div>
    );
  }
}
