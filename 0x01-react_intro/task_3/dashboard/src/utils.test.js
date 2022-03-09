import React from 'react';
import { act } from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'


// test to check getFullYear returns correct year
test('getFullYear returns correct year', () => {
	  expect(getFullYear()).toBe(2022);
});


// test to check that getFooter returns correc string
// when arg is true or false
test('getFooter returns correct string', () => {
	  expect(getFooterCopy(true)).toBe('Holberton School');
	  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});


// test to check that getLatestNotification returns correct
// html string
test('getLatestNotification returns correct html string', () => {
	  expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});