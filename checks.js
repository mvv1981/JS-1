// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('./index.js');

assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.equal(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');
assert.deepStrictEqual(sum('38 попугаев', '17'), NaN, 'При сложении "38 попугаев" и 17 получится NaN');
assert.deepStrictEqual(sum(38, '17 бегемотов'), NaN, 'При сложении 38 и "17 бегемотов" получится NaN');
assert.deepStrictEqual(sum(-101, '--17'), NaN, 'При сложении -101 и "--17" получится NaN');
assert.equal(sum("-10", '-10'), -20, 'При сложении "-10" и "-10" получится -20');
console.info('OK!');
