// ==UserScript==
// @name         Parse sales
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://submit.shutterstock.com/earnings/daily*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let earnings = document.querySelector('.earnings-container').outerHTML;
    console.log(earnings);

    let fd = new FormData();
    fd.append('append', JSON.stringify(earnings));

    fetch("http://127.0.0.1:8000/append", {
        method: "POST",
        body: fd
    }).then(res => {
        console.log("Request complete! response:", res);
    });

    // Your code here...
})();
