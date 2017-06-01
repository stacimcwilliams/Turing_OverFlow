import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  constructor() {
    super();


    this.searchDB = this.searchDB.bind(this);
  }

  searchDB() {
    console.log('here ya go!');
  }

  render() {
    return (
      <div className="search-container">
        <input className="search-input" placeholder="Search..."/>
        <Button className="search--btn" handleClick={ this.searchDB } />
      </div>
    );
  }
}
