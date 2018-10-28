'use strict';

module.exports = function getIsRemote(json) {
  return json.telecommuting === 1;
};
