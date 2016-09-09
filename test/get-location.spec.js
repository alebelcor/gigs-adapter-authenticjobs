'use strict';

import test from 'ava';
import getlocation from '../lib/get-location';

test('it should return null when remote', t => {
  t.deepEqual(null, getlocation({telecommuting: 1}));
});

test('it should return null when no location data', t => {
  t.deepEqual(null, getlocation({}));
  t.deepEqual(null, getlocation({foo: 'bar'}));
  t.deepEqual(null, getlocation({company: {}}));
});

test('it should return at least the city', t => {
  t.deepEqual('foo', getlocation({company: {location: {city: 'foo'}}}));
});

test('it should return at least the state', t => {
  t.deepEqual('bar', getlocation({company: {location: {state: 'bar'}}}));
});

test('it should return at least the country', t => {
  t.deepEqual('baz', getlocation({company: {location: {country: 'baz'}}}));
});

test('it should return at least the city and state', t => {
  t.deepEqual('aaa, bbb', getlocation({company: {location: {city: 'aaa', state: 'bbb'}}}));
});

test('it should return at least the city and country', t => {
  t.deepEqual('ccc, ddd', getlocation({company: {location: {city: 'ccc', country: 'ddd'}}}));
});

test('it should return at least the state and country', t => {
  t.deepEqual('eee, fff', getlocation({company: {location: {state: 'eee', country: 'fff'}}}));
});

test('it should return the city, state and country', t => {
  t.deepEqual('ggg, hhh, iii', getlocation({company: {location: {city: 'ggg', state: 'hhh', country: 'iii'}}}));
});
