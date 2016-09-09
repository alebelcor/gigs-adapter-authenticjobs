'use strict';

module.exports = function isFullTime(json) {
  let isJobFullTime = null;

  if (!json.type) {
    return isJobFullTime;
  }

  if (json.type.name) {
    isJobFullTime = json.type.name === 'Full-time';
  }

  return isJobFullTime;
};
