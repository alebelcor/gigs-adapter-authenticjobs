'use strict';

const got = require('got');
const defaultsDeep = require('lodash/defaultsDeep');

const getGotOptions = require('./lib/get-got-options');
const fetch = require('./lib/fetch');

const ADAPTER_ENDPOINT = 'https://authenticjobs.com/api/';

module.exports = function gigsAdapterAuthenticJobs(options) {
  options = defaultsDeep({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  return fetch(options)
    .catch(console.error);
}
