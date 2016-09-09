'use strict';

module.exports = function getRemote(json) {
  return json.telecommuting === 1;
};
