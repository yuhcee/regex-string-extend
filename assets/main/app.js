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
  return /\w/.exec(this)[0].toUpper() + this.substring(1).toLower();
};

String.prototype.isQuestion = function() {
  return /^\w.+\?$/.test(this);
};

String.prototype.words = function() {
  console.log(this.match(/\w/g));
  return this.match(/\w/g);
};

module.exports = String;
