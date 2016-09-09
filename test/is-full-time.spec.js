'use strict';

import test from 'ava';
import isFullTime from '../lib/is-full-time';

test('it should return true', t => {
  t.true(isFullTime({type: {name: 'Full-time'}}));
});

test('it should return false', t => {
  t.false(isFullTime({type: {name: 'foo'}}));
  t.false(isFullTime({type: {name: 'Part-time'}}));
});

test('it should return null', t => {
  t.deepEqual(null, isFullTime({type: {}}));
  t.deepEqual(null, isFullTime({}));
});
