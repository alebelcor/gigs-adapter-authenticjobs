'use strict';

import test from 'ava';
import getIsRemote from '../lib/get-is-remote';

test('it should return true', t => {
  t.true(getIsRemote({telecommuting: 1}));
});

test('it should return false', t => {
  t.false(getIsRemote({telecommuting: 0}));
  t.false(getIsRemote({telecommuting: null}));
  t.false(getIsRemote({}));
});
