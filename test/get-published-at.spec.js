'use strict';

import test from 'ava';
import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-07-15', getPublishedAt({post_date: '2016-07-15 16:44:19'}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
