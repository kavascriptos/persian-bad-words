const { detect } = require('../src/index'); //you should write "persian-bad-words"

console.log(detect("کی ر")); //returns true
console.log(detect("کی‌ر")); //returns true
console.log(detect("سلام زنتو من گای یدم")); //return true
console.log(detect("سلام سوتون چطوری امیدوارم عشق کنی بامون")); //returns true
  
