process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const chai = require('chai');

const should = chai.should();
const { expect } = require('chai');

describe('App testing', () => {
  it.skip('connects', () => {
    // const w = shallow(<App />)

    expect(true);
  });
});
