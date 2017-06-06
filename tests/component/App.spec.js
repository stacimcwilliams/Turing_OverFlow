process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
const chai = require('chai');
const should = chai.should();
const { expect } = require('chai');

// import App from '../../app/components/App.js'

describe('App testing', () => {
  it.skip('connects', () => {
    // const w = shallow(<App />)

    expect(true);
  });
});
