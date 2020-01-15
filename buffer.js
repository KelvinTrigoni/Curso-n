var buf = require('buffer').Buffer;

var buff = buf.from('olá {}[]()!@#$%¨&* 123456');

console.log(buff.toString());