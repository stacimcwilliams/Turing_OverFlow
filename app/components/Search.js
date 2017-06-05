import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

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

    fetchSearch(searchTerm).then(() => history.push(`/search/${searchTerm}`))

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
