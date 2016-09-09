'use strict';

const pkg = require('../package.json');

module.exports = function getGotOptions() {
  const apiKey = process.env.AUTHENTICJOBS_API_KEY;

  if (typeof apiKey !== 'string' || apiKey.length === 0) {
    throw new TypeError('Environment variable `AUTHENTICJOBS_API_KEY` is missing');
  }

  return {
    json: true,
    headers: {
      'user-agent': pkg.repository.url
    },
    query: {
      api_key: apiKey,
      method: 'aj.jobs.search',
      format: 'json',
      perpage: 100,
      page: 1
    }
  };
};
