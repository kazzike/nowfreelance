'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
require('../static/replacer/replacer-core.js');
const core = globalThis.ReplacerCore;

test('replaces whole words but preserves partial matches', () => {
  const r = core.replace({text:'Juan and Juanita', wordMappings:{juan:{original:'Juan',replacement:'PERSON_001'}}, wholeWord:true});
  assert.equal(r.text, 'PERSON_001 and Juanita');
});
test('replaces substrings when whole-word mode is disabled', () => {
  const r = core.replace({text:'Juanita', wordMappings:{juan:{original:'Juan',replacement:'PERSON_001'}}, wholeWord:false});
  assert.equal(r.text, 'PERSON_001ita');
});
test('keeps generated email mappings stable', () => {
  const a = core.replace({text:'person@example.com',replaceAllEmails:true});
  const b = core.replace({text:'Again person@example.com',replaceAllEmails:true,emailMappings:a.emailMappings});
  assert.equal(b.text, 'Again ' + a.emailMappings['person@example.com']);
});
test('restores word and email mappings', () => {
  const r = core.restore({text:'PERSON_001 fake@example.test',wordMappings:{x:{original:'Juan Pérez',replacement:'PERSON_001'}},emailMappings:{'real@example.com':'fake@example.test'}});
  assert.equal(r.text,'Juan Pérez real@example.com');
});
test('escapes regex metacharacters', () => {
  const r = core.replace({text:'Company (A+B)',wordMappings:{x:{original:'Company (A+B)',replacement:'ORG_001'}},wholeWord:true});
  assert.equal(r.text,'ORG_001');
});

test('whole-word matching supports accented words and punctuation', () => {
  const result = core.replace({
    text: 'José, Josefa; Company (A+B)',
    wordMappings: {
      jose: { original: 'José', replacement: 'PERSON_001' },
      company: { original: 'Company (A+B)', replacement: 'ORG_001' }
    },
    wholeWord: true
  });
  assert.equal(result.text, 'PERSON_001, Josefa; ORG_001');
});

test('replacement strings are treated literally', () => {
  const result = core.replace({
    text: 'Name: Juan',
    wordMappings: { juan: { original: 'Juan', replacement: '$&-TOKEN' } },
    wholeWord: true
  });
  assert.equal(result.text, 'Name: $&-TOKEN');
});
