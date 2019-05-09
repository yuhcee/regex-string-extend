require('../main/app');

describe('Test if String has Vowels', function() {
  test('should return true if string contains vowels', () => {
    expect('Uchenna'.hasVowels()).toBeTruthy();
  });
  test('should return false if string does NOT contain vowels', () => {
    expect('Rhythm'.hasVowels()).toBeFalsy();
  });
});

describe('Test for String to Upper Case', function() {
  test('should return the String with all characters in upper cases as applicable', () => {
    expect('Uchenna'.toUpper()).toBe('UCHENNA');
    expect('eGbO ucHeNnA'.toUpper()).toBe('EGBO UCHENNA');
  });
});

describe('Test for String to Lower Case', function() {
  test('should return the String with all characters in their lower cases as applicable', () => {
    expect('Uche Nna'.toLower()).toBe('uche nna');
    expect('mATTHew'.toLower()).toBe('matthew');
    expect('EGBO'.toLower()).toBe('egbo');
  });
});

describe('Test for String to ucFirst', function() {
  test('should return the String but changes the First Character to an Upper case.', () => {
    expect('aDeDaYo'.ucFirst()).toBe('Adedayo');
    expect('uchenna'.ucFirst()).toBe('Uchenna');
    expect('matthew'.ucFirst()).toBe('Matthew');
  });
});

describe('Test if String isQuestion', function() {
  test('should return true if the string is a question (ending with a question mark).', () => {
    expect('What is your name?'.isQuestion()).toBeTruthy();
    expect('Are you Ok  ?'.isQuestion()).toBeTruthy();
  });
  test('should return false if the string is NOT a question (ending without a question mark).', () => {
    expect('I have no name'.isQuestion()).toBeFalsy();
  });
});

describe('Test for String to words in Array', function() {
  test('should return a list of the words in the string, as an Array.', () => {
    expect('Uche'.words()).toEqual(['U', 'c', 'h', 'e']);
    expect('matt'.words()).toEqual(['m', 'a', 't', 't']);
    expect('Nigeria'.words()).toEqual(['N', 'i', 'g', 'e', 'r', 'i', 'a']);
  });
});

describe('Test for wordCount in a String', function() {
  test('should return the number of words in the string', () => {
    expect('Uche'.wordCount()).toBe(4);
    expect('I am Enough'.wordCount()).toBe(9);
  });
});
