process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon'

const chai = require('chai');
const should = chai.should();
const { expect } = require('chai');

import NavBar from "../../app/components/NavBar.js"
import Search from "../../app/components/Search.js"



describe('NavBar testing', () => {
  it('NavBar existance', () => {
  	const spy = sinon.spy()
    const w = shallow(<NavBar fetchAllQuestions={spy} questions= {[]}/>)

    expect(w.find('.nav-bar').length).equal(1)
    // expect(w.find(Search).length).equal(1)
  })
})

