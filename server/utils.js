const moment = require('moment');

exports.alterTimeStamp = (data) => {
  return data.map((eachData) => {
    const created_at = moment(eachData.created_at).fromNow();
    const updated_at = moment(eachData.updated_at).fromNow();
    return Object.assign({}, eachData, { created_at, updated_at });
  });
};
