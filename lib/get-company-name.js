'use strict';

module.exports = json => {
  let companyName = null;

  if (!json.company) {
    return companyName;
  }

  if (typeof json.company.name === 'string') {
    companyName = json.company.name;
  }

  return companyName;
};
