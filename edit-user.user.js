// ==UserScript==
// @name        Edit User
// @match       https://www.vidlii.com/user/*
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// @version     0.1
// @author      childfucker1488
// @description Adds a shortcut to access the admin panel
// @icon        https://www.vidlii.com/img/favicon.png
// ==/UserScript==

const { register } = VM.shortcut;

register('ctrl-alt-a', () => {
  var current_url = document.location;
  var new_url = "https://www.vidlii.com/admin/users?u=" + current_url.pathname.slice(6);
  location.replace(new_url);
});

