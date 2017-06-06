process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
const chai = require('chai');
const should = chai.should();
const { expect } = require('chai');

import AnswerInput from '../../app/components/QuestionView/AnswerInput.js'

describe('AnswerInput testing', () => {
  const spy = sinon.spy();

  it('connects', () => {
    const w = shallow(<AnswerInput refreshAnswers={spy} toggleInput={spy} question_id={1} />)

    expect(true);
  });
});
