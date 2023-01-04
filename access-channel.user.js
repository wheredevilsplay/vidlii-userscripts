// ==UserScript==
// @name        Access Channels
// @match       https://www.vidlii.com/admin/users
// @grant       none
// @version     0.1
// @author      childfucker1488
// @description Adds a link next to the username in the Partnership section of the admin panel
// @icon        https://www.vidlii.com/img/favicon.png
// ==/UserScript==

var collection = document.getElementsByClassName("u_sct_hd");
for (i = 0; i < collection.length; i++) {
  var a = document.createElement('a');
  desiredLink = "https://www.vidlii.com/user/" + collection[i].textContent.slice(0,-9);
  a.setAttribute('href',desiredLink);
  a.innerHTML = " Channel";
  collection[i].appendChild(a);
}

