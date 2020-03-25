/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown 
below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

const capitalize = (s) => {
  const arr = ['', ''];
  let upperCase = true;

  for(let i = 0; i < s.length; i++) {
    if(upperCase === true) {
      arr[0] += s[i].toUpperCase();
      upperCase = !upperCase;
    } else {
      arr[0] += s[i].toLowerCase();
      upperCase = !upperCase;
    }
  }
  upperCase = false;
  for(let i = 0; i < s.length; i++) {
    if(upperCase === true) {
      arr[1] += s[i].toUpperCase();
      upperCase = !upperCase;
    } else {
      arr[1] += s[i].toLowerCase();
      upperCase = !upperCase;
    }
  }
  

  return arr;
};