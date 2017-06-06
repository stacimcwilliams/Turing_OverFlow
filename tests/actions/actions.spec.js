import React from 'react';
import { shallow } from 'enzyme';
import configMockStore from 'redux-mock-store';
import * as actions from '../../app/actions/actions.js';
import fetchMock from 'fetch-mock';

const chai = require('chai');

const expect = chai.expect;

const store = configMockStore()();

describe('actions', () => {
  const mockQuestion = {
    results: [{
      title: 'How do I get a random number in JavaScript?',
      question: 'I\'m trying to find a way to generate a random number with JavaScript. Any advice much be great.',
      user_name: 'Mike Fenwick',
      views: 11,
      answers: 1,
      votes: 4,
      id: 1000,
    }],
  };

  afterEach(() => {
    store.clearActions();
  });


  it('fetchAllQuestionsAction', () => {
    const expectedAction = { type: 'FETCH_ALL_QUESTIONS', questions: mockQuestion.results };
    store.dispatch(actions.fetchAllQuestionsAction(mockQuestion.results));
    const createdAction = store.getActions();
    expect(createdAction[0]).to.deep.equal(expectedAction);
    expect(createdAction).to.have.lengthOf(1);
  });
});
