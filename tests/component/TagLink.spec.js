process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const chai = require('chai');

const should = chai.should();
const { expect } = require('chai');

import TagLink from '../../app/components/TagLink.js';


describe('TagLink testing', () => {
  it('TagLink existence', () => {
    const spy = sinon.spy();
    const w = shallow(<TagLink/>);

    expect(w.find('.tag-link').length, 1).equal(1);
  });
});
