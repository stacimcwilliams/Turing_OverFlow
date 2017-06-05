process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';

const chai = require('chai');
const should = chai.should();
const { expect } = require('chai');
// import App from '../../app/components/App.js'

describe('App testing', () => {
  it('connects', () => {
    // const w = shallow(<App />)

    expect(true)
  })
})

