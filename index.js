'use strict';

const got = require('got');

const fetch = require('./lib/fetch');
const getGotOptions = require('./lib/get-got-options');

const ADAPTER_ENDPOINT = 'https://authenticjobs.com/api/';

module.exports = function gigsAdapterAuthenticJobs(options) {
  options = Object.assign({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  return fetch(options)
    .catch(console.error);
}
