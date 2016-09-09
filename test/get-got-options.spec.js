'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import getGotOptions from '../lib/get-got-options';

const token = '0123456789';

test.beforeEach(t => {
  process.env.AUTHENTICJOBS_API_KEY = token;
});

test('it should validate the api key env variable', t => {
  process.env.AUTHENTICJOBS_API_KEY = '';
  t.throws(() => getGotOptions());

  delete process.env.AUTHENTICJOBS_API_KEY;
  t.throws(() => getGotOptions());

  process.env.AUTHENTICJOBS_API_KEY = token;
  t.notThrows(() => getGotOptions());
});

test('it should return an object', t => {
  t.true(isPlainObj(getGotOptions()));
});
