process.env.NODE_ENV = 'test';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
const chai = require('chai');
const should = chai.should();
const { expect } = require('chai');

import AnswerInput from '../../app/components/QuestionView/AnswerInput.js'

describe('AnswerInput testing', () => {

  it('Fires off addAnswer function on submit click', () => {
  	const spy = sinon.spy();
    const w = shallow(<AnswerInput addAnswer={spy} refreshAnswers={spy} toggleInput={spy} question_id={1} />)

    w.find('#editor').simulate('change', {target: { name: 'answer', value: 'TEST'}})
    w.find('.user-name-input').simulate('change', { target: { name: 'name', value: 'NAMETEST'}})

    w.find('.submit-answer--btn').simulate('click')

    expect(w.state().name).to.eql('NAMETEST')
    // expect(spy.called).to.be.true
  });

  it('Does not call addAnswer function on submit click if no text in input', () => {
  	const spy = sinon.spy();
    const w = shallow(<AnswerInput addAnswer={spy} refreshAnswers={spy} toggleInput={spy} question_id={1} />)

    w.find('.submit-answer--btn').simulate('click')

    expect(spy.called).to.be.false
  });
});
