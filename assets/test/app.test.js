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
  });
});