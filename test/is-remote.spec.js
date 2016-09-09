'use strict';

import test from 'ava';
import isRemote from '../lib/is-remote';

test('it should return true', t => {
  t.true(isRemote({telecommuting: 1}));
});

test('it should return false', t => {
  t.false(isRemote({telecommuting: 0}));
  t.false(isRemote({telecommuting: null}));
  t.false(isRemote({}));
});
