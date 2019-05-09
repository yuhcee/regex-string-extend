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

module.exports = String;
