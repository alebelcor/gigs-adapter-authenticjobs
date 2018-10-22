'use strict';

const got = require('got');
const flattenDeep = require('lodash/flattenDeep');

const getResponseBody = require('./get-response-body');
const getGigs = require('./get-gigs');
const getNextOptions = require('./get-next-options');

const results = [];

module.exports = function fetch(options) {
  return got.get(options.endpoint, options.gotOptions)
    .then(getResponseBody)
    .then(json => {
      if (Number(json.listings.page) <= json.listings.pages) {
        results.push(getGigs(json));
        return fetch(getNextOptions(options));
      }

      return flattenDeep(results);
    });
};
