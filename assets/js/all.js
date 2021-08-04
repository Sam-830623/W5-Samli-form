"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
}); // BS5 modal js

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});
//# sourceMappingURL=all.js.map
