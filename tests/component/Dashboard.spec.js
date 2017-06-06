process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const chai = require('chai');

const should = chai.should();
const { expect } = require('chai');

import Dashboard from '../../app/components/MainView/Dashboard.js';


describe('Dashboard testing', () => {
  it('dashboard existence', () => {
    const spy = sinon.spy();
    const w = shallow(<Dashboard fetchAllQuestions={spy} questions= {[]}/>);

    expect(w.find('.dashboard').length, 1).equal(1);
    expect(w.find('Link').length, 1).equal(1);
  });
});
