String.prototype.hasVowels = function() {
  var vowels = /[aeiou]/i; // checks for any vowel existence in a String
  return vowels.test(this); // check if input contains any vowels
};

String.prototype.toUpper = function() {
  var upperCased = ''; // variable to hold output
  for (var index = 0; index < this.length; index++) {
    //loop through the String
    var currentValue = this.charCodeAt(index); // the Unicode value of the current character.
    if (currentValue > 96 && currentValue < 123) {
      // check if its NOT within the CharCodes range of Capitalized alphabets
      upperCased += String.fromCharCode(currentValue & ~(1 << 5)); // if true, transform to Capital letter
    } else {
      upperCased += this[index]; // add it to the output
    }
  }
  return upperCased; // return the output
};

String.prototype.toLower = function() {
  var lowerCased = ''; // variable to hold output
  for (var index = 0; index < this.length; index++) {
    //loop through the String
    var currentValue = this.charCodeAt(index); // the Unicode value of the current character.
    if (currentValue > 64 && currentValue < 91) {
      // check if its NOT within the CharCodes range of small alphabets
      lowerCased += String.fromCharCode(currentValue + 32); // if true, transform to smalll letter
    } else {
      lowerCased += this[index]; // add it to the output
    }
  }
  return lowerCased;  // return the output
};

String.prototype.ucFirst = function() {
  // loop through String value and select the first Character, Capitalise it then set the trailing characters to lowercase
  return /[a-zA-Z]/.exec(this)[0].toUpper() + this.substring(1).toLower();
};

String.prototype.isQuestion = function() {
  return /^\w.+\?$/.test(this); // check if a word or sentence ends with a string
};

String.prototype.words = function() {
  return this.match(/\w/g); // check if input is a word type
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  /^([0-9]+)[.]?([0-9]{1,2})/.test(this);  // match numbers that may contain a dot and other numbers after the dot
  return Number(this)
    .toFixed(2) // convert the number to decimal point of 2
    .replace(/\d(?=(\d{3})+\.)/g, '$&,'); //  when  a digit is followed by 3 digits, add the digit and a comma
};

String.prototype.fromCurrency = function() {
  var value = /(\d+,)+/; // match a number with comma
  return value.test(this)
    ? this.replace(/,(?=\d)/g, '') // when match a digit with comma, replace with space
    : 'Wrong number format.';
};

String.prototype.invertCase = function() {
  var inverted = '';
  for (var index = 0; index < this.length; index++) {
    /[a-z]/.test(this[index])
      ? (inverted += this[index].toUpper())
      : (inverted += this[index].toLower());
  }
  return inverted;
};

String.prototype.alternateCase = function() {
  var alternatedString = /[a-zA-Z]/.exec(this)[0].toLower() + this[1].toUpper();
  for (var index = 2; index < this.length; index++) {
    index % 2 === 0
      ? (alternatedString += this[index].toLower())
      : (alternatedString += this[index].toUpper());
  }
  return alternatedString;
};

String.prototype.numberWords = function() {
  var numberKeys = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  var wordNumbers = [];
  for (var index = 0; index < this.length; index++) {
    wordNumbers.push(numberKeys[this[index]]);
  }
  return wordNumbers.join(' ');
};

String.prototype.isDigit = function() {
  // check if a digit is accompanied by any other digits
  return /(\d)(?=\d+)/.test(this) ? false : true;
};
module.exports = String;
