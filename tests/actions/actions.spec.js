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

  const popularQuestions = {
    results: [
      {
        title: 'How do I convert a number to a string in JavaScript?',
        question: 'I\'m trying to find the best way to convert a number to a string in JavaScript. Any thoughts would be great.',
        user_name: 'Staci McWilliams',
        views: 15,
        answers: 1,
        votes: 7,
        id: 1001,
      },
      {
        title: 'How do I get a random number in JavaScript?',
        question: 'I\'m trying to find a way to generate a random number with JavaScript. Any advice much be great.',
        user_name: 'Mike Fenwick',
        views: 11,
        answers: 1,
        votes: 4,
        id: 1000,
      },
    ],
  };

  const recentTags = {
    results: [
      { tag: 'JavaScript', question_id: 1001 },
      { tag: 'Vanilla JS', question_id: 1001 },
      { tag: 'Random Number', question_id: 1001 },
    ],
  };

  const searchResults = {
    results: [
      {
        title: 'How do I convert a number to a string in JavaScript?',
        question: 'I\'m trying to find the best way to convert a number to a string in JavaScript. Any thoughts would be great.',
        user_name: 'Staci McWilliams',
        views: 15,
        answers: 1,
        votes: 7,
        id: 1001,
      },
      {
        title: 'How do I get a random number in JavaScript?',
        question: 'I\'m trying to find a way to generate a random number with JavaScript. Any advice much be great.',
        user_name: 'Mike Fenwick',
        views: 11,
        answers: 1,
        votes: 4,
        id: 1000,
      },
    ],
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

  it('fetchPopularQuestionsAction', () => {
    const expectedAction = { type: 'FETCH_POPULAR_QUESTIONS', popularQuestions: popularQuestions.results };
    store.dispatch(actions.fetchPopularQuestionsAction(popularQuestions.results));
    const createdAction = store.getActions();
    expect(createdAction[0]).to.deep.equal(expectedAction);
    expect(createdAction).to.have.lengthOf(1);
  });

  it('fetchRecentTagsAction', () => {
    const expectedAction = { type: 'FETCH_RECENT_TAGS', recentTags: recentTags.results };
    store.dispatch(actions.fetchRecentTagsAction(recentTags.results));
    const createdAction = store.getActions();
    expect(createdAction[0]).to.deep.equal(expectedAction);
    expect(createdAction).to.have.lengthOf(1);
  });

  it('searchResults', () => {
    const expectedAction = { type: 'ADD_SEARCH_RESULTS', searchResults: searchResults.results };
    store.dispatch(actions.searchResults(searchResults.results));
    const createdAction = store.getActions();
    expect(createdAction[0]).to.deep.equal(expectedAction);
    expect(createdAction).to.have.lengthOf(1);
  });
});
