'use strict';

import test from 'ava';
import proxyquire from 'proxyquire';

test('it should return a promise', t => {
  const fetch = proxyquire('../lib/fetch', {
    'got': {
      get: () => {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve({
              body: {listings: {listing: []}}
            });
          }, 250);
        });
      }
    }
  });

  t.true(typeof fetch({}).then === 'function');
});

test('it should accumulate/flatten the results', async t => {
  let count = 1;
  let total = 2;
  const fetch = proxyquire('../lib/fetch', {
    'got': {
      get: () => {
        const body = {listings: {listing: [{title: 'foo'}, {title: 'bar'}]}};

        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            body.listings.page = count.toString();
            body.listings.pages = 2;

            resolve({
              body: body
            });

            count += 1;
          }, 250);
        });
      }
    }
  });

  const results = await fetch({gotOptions: {query: {page: 1}}});

  t.true(Array.isArray(results));
  t.deepEqual(4, results.length);
});
