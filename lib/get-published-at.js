'use strict';

const moment = require('moment');

module.exports = json => {
  let publishedAt = null;

  if (json.post_date) {
    publishedAt = moment.utc(json.post_date, 'YYYY-MM-DD HH:mm:ss', true).format('YYYY-MM-DD');
  }

  return publishedAt;
};
