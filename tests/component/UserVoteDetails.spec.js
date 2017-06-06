process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const chai = require('chai');

const should = chai.should();
const { expect } = require('chai');

import UserVoteDetails from '../../app/components/UserVoteDetails.js';

describe('UserVoteDetails testing', () => {
  it('UserVoteDetails existence', () => {
    const spy = sinon.spy();
    const w = shallow(<UserVoteDetails/>);

    expect(w.find('.user-vote-info-wrapper').length, 1).equal(1);
    expect(w.find('.vote-btn-wrapper').length, 1).equal(1);
    expect(w.find('.vote-details-wrapper').length, 1).equal(1);
    expect(w.find('.vote-up').length, 1).equal(1);
    expect(w.find('.vote-down').length, 1).equal(1);
    expect(w.find('.detail-user-info').length, 1).equal(1);
  });
});
