String.prototype.hasVowels = function() {
  var vowels = /[aeiou]/i;
  return vowels.test(this);
};

String.prototype.toUpper = function() {
  var upperCased = '';
  for (var index = 0; index < this.length; index++) {
    var currentValue = this.charCodeAt(index);
    if (currentValue > 96 && currentValue < 123) {
      upperCased += String.fromCharCode(currentValue & ~(1 << 5));
    } else {
      upperCased += this[index];
    }
  }
  return upperCased;
};

String.prototype.toLower = function() {
  var lowerCased = '';
  for (var index = 0; index < this.length; index++) {
    var currentValue = this.charCodeAt(index);
    if (currentValue > 64 && currentValue < 91) {
      lowerCased += String.fromCharCode(currentValue + 32);
    } else {
      lowerCased += this[index];
    }
  }
  return lowerCased;
};

String.prototype.ucFirst = function() {
  return /[a-zA-Z]/.exec(this)[0].toUpper() + this.substring(1).toLower();
};

String.prototype.isQuestion = function() {
  return /^\w.+\?$/.test(this);
};

String.prototype.words = function() {
  return this.match(/\w/g);
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  var pattern = /^([0-9]+)[.]?([0-9]{1,2})/; // collect input format, to start with digit followed by optional (.) and trims at max two numbers after the dot
  return pattern.test(this) // test if input is correct
    ? Number(this)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,') // if found at any place, a digit with possibly 3 trailing digits, replace the number with itself and add a comma.
    : 'Wrong number format.';
};

String.prototype.fromCurrency = function() {
  var value = /(\d+,)+/; // collect input format, to be a digit or group of digits with a trailing comma and other numbers.
  return value.test(this)
    ? this.replace(/,(?=\d)/g, '') // if found any comma possibly been followed by any digits, replace it with an empty space.
    : 'Wrong number format.';
};
module.exports = String;
