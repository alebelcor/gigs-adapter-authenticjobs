'use strict';

const getIsRemote = require('./get-is-remote');

module.exports = function getLocation(json) {
  let location = null;

  if (getIsRemote(json) || !json.company || !json.company.location) {
    return location;
  }

  if (json.company.location.city) {
    location = json.company.location.city;
  }

  if (json.company.location.state) {
    location = location ? `${location}, ${json.company.location.state}` : json.company.location.state;
  }

  if (json.company.location.country) {
    location = location ? `${location}, ${json.company.location.country}` : json.company.location.country;
  }

  return location;
};
