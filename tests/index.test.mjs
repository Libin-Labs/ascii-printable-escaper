import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('leaves printable ASCII', () => {
  assert.equal(api.escapeNonAscii('Hello!'), 'Hello!');
});
test('escapes accented letter', () => {
  assert.equal(api.escapeNonAscii('é'), '\\u{e9}');
});
test('escapes supplementary code point', () => {
  assert.equal(api.escapeNonAscii('😀'), '\\u{1f600}');
});
test('escapes newline', () => {
  assert.equal(api.escapeNonAscii('\n'), '\\u{a}');
});
test('handles empty text', () => {
  assert.equal(api.escapeNonAscii(''), '');
});
test('rejects non-string', () => {
  assert.throws(() => api.escapeNonAscii(5), TypeError);
});
