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
    expect('Uchenna'.toLower()).toBe('uchenna');
    expect('mATTHew'.toLower()).toBe('matthew');
    expect('EGBO'.toLower()).toBe('egbo');
  });
});
