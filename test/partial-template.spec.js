'use strict';

const t = require('tap');
const partial = require('../lib/partial-template.js');

console.log(partial);

t.test('module exports a function', t => {
  t.ok(partial);
  t.type(partial, 'function');
  t.end();
});

t.test('partial tag returns a function', t => {
  const half = partial`hello`;
  t.type(half, 'function');
  t.end();
});

t.test('Basic template interpoliation behaves', t => {
  const half = partial`Hello, ${'name'}`;
  t.equals(half({name: 'world'}), 'Hello, world');
  t.end();
});

t.test('throws when property name not found', t =>  {
  const half = partial `Hello, ${'name'}`;
  t.throws(() => {
    half({_: 'wrong name'});
  });
  t.end();
});
