process.env.NODE_ENV = 'test';


import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

const chai = require('chai');

const should = chai.should();
const { expect } = require('chai');

import AskQuestion from '../../app/components/MainView/AskQuestion.js';


describe('AskQuestion testing', () => {
  const jsdom = require('jsdom').jsdom;

  global.document = jsdom('');
  global.window = document.defaultView;
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property];
    }
  });

  global.navigator = {
    userAgent: 'node.js',
  };
  it('AskQuestion existence', () => {
    const spy = sinon.spy();
    const w = shallow(<AskQuestion/>);

    expect(w.find('.ask-question-wrapper').length, 1).equal(1);
  });
});
