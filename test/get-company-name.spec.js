'use strict';

import test from 'ava';
import getCompanyName from '../lib/get-company-name';

test('it should return the company name', t => {
  t.deepEqual('foo', getCompanyName({company: {name: 'foo'}}));
});

test('it should return null', t => {
  t.deepEqual(null, getCompanyName({company: {}}));
  t.deepEqual(null, getCompanyName({}));
});
