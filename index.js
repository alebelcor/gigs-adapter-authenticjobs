'use strict';

const got = require('got');

const getGotOptions = require('./lib/get-got-options');
const fetch = require('./lib/fetch');

const ADAPTER_ENDPOINT = 'https://authenticjobs.com/api/';

module.exports = function gigsAdapterAuthenticJobs(options) {
  options = Object.assign({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  return fetch(options)
    .catch(console.error);
}
