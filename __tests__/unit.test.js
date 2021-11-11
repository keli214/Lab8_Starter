// unit.test.js

const { test, expect} = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('8181111234 is not a valid phone number', ()=>{
    expect(functions.isPhoneNumber("8181111234")).toBe(false);
});

test('2344-566-331111-1111 is a valid phone number', ()=>{
    expect(functions.isPhoneNumber("2344-566-331111-1111")).toBe(true);
});

test('818-111-1234 is a valid phone number', ()=>{
    expect(functions.isPhoneNumber("818-111-1234")).toBe(true);
});

test('1118181111234 is not a valid phone number', ()=>{
    expect(functions.isPhoneNumber("1118181111234")).toBe(false);
});

test('kkkk.ucsd.edu is not a valid email address', ()=>{
    expect(functions.isEmail("kkkk.ucsd.edu")).toBe(false);
});

test('kkkk@ucsd.edu is a valid email address', ()=>{
    expect(functions.isEmail("kkkk@ucsd.edu")).toBe(true);
});

test('45666ucsd.edu is not a email address', ()=>{
    expect(functions.isEmail("45666ucsd.edu")).toBe(false);
});

test('44445@gamil.com is a email address', ()=>{
    expect(functions.isEmail("44445@gamil.com")).toBe(true);
});

test('123456789 is not a secure password', ()=>{
    expect(functions.isStrongPassword("123456789")).toBe(false);
});

test('weie4566633 is a secure password', ()=>{
    expect(functions.isStrongPassword("weie4566633")).toBe(true);
});

test('dfg is not a secure password', ()=>{
    expect(functions.isStrongPassword("dfg")).toBe(false);
});

test('wrrr333 is a secure password', ()=>{
    expect(functions.isStrongPassword("wrrr333")).toBe(true);
});

test('05/02/2000 is a correct date', ()=>{
    expect(functions.isDate("05/02/2000")).toBe(true);
});

test('11/12/2000 is a correct date', ()=>{
    expect(functions.isDate("11/12/2000")).toBe(true);
});

test('1111/12/2000 is not a correct date', ()=>{
    expect(functions.isDate("1111/12/2000")).toBe(false);
});

test('9999/1/00 is not a correct date', ()=>{
    expect(functions.isDate("9999/1/00")).toBe(false);
});

test('fff is a hex number', ()=>{
    expect(functions.isHexColor("fff")).toBe(true);
});

test('#AAAAAA is a hex number', ()=>{
    expect(functions.isHexColor("#AAAAAA")).toBe(true);
});

test('#5555 is not a hex number', ()=>{
    expect(functions.isHexColor("#5555")).toBe(false);
});

test('#zzz000 is not a hex number', ()=>{
    expect(functions.isHexColor("#zzz000")).toBe(false);
});
