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
  });
});
