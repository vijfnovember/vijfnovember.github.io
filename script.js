/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("check");

var menuButton = document.querySelector("#burger");
var ul = document.querySelector(".sidebar");


menuButton.addEventListener("click", function () {
    ul.classList.toggle("active");
});
