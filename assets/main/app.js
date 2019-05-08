String.prototype.hasVowels = function() {
  var vowels = /[aieou]/i;
  return vowels.test(this);
};

module.exports = String;
