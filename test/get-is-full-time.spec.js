'use strict';

import test from 'ava';

import getIsFullTime from '../lib/get-is-full-time';

test('it should return true', t => {
  t.true(getIsFullTime({type: {name: 'Full-time'}}));
});

test('it should return false', t => {
  t.false(getIsFullTime({type: {name: 'foo'}}));
  t.false(getIsFullTime({type: {name: 'Part-time'}}));
});

test('it should return null', t => {
  t.deepEqual(null, getIsFullTime({type: {}}));
  t.deepEqual(null, getIsFullTime({}));
});
