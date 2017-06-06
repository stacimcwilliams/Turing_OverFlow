const recentTags = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECENT_TAGS' :
      return [...action.recentTags];

    default:
      return state;
  }
};

export default recentTags;