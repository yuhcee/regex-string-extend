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
    expect('Unbelievable'.wordCount()).toBe(12);
  });
});

describe('Test for String toCurrency', function() {
  test('should return a currency representation of the String ', () => {
    expect('11111.11'.toCurrency()).toBe('11,111.11');
    expect('11121.11'.toCurrency()).toBe('11,121.11');
    expect('234121.01'.toCurrency()).toBe('234,121.01');
  });
});

describe('Test for String fromCurrency', function() {
  test('should return a number representation of the Currency String ', () => {
    expect('11,111.11'.fromCurrency()).toBe('11111.11');
    expect('1000011'.fromCurrency()).toBe('Wrong number format.');
  });
});

describe('Test for String to inverseCase', function() {
  test('should return each letter in the string as an inverse of its current case ', () => {
    expect('Mr. Ben'.invertCase()).toBe('mR. bEN');
    expect('i aM uCHE'.invertCase()).toBe('I Am Uche');
  });
});
