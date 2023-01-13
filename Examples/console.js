const { detect, get_bad_word } = require('../src/index'); //you should write "persian-bad-words"

console.log(detect("کی ر")); //returns true
console.log(detect("کی‌ر")); //returns true
console.log(detect("سلام زنتو من گای یدم")); //return true
console.log(detect("سلام سوتون چطوری امیدوارم عشق کنی بامون")); //returns true

console.log(get_bad_word("کی ر")); //returns true
console.log(get_bad_word("کی‌ر")); //returns true
console.log(get_bad_word("سلام زنتو من گای یدم")); //return true
console.log(get_bad_word("سلام سوتون چطوری امیدوارم عشق کنی بامون")); //returns true
