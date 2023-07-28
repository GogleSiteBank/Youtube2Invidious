// ==UserScript==
// @name        YouTube2Invidious
// @namespace   GogleSiteBank UserScripts
// @match       *://*.youtube.com/*
// @grant       none
// @version     1.0
// @author      -
// @description Redirect from youtube to invidious
// ==/UserScript==


const webPageName = document.URL;
if (!webPageName.includes("watch?")) {
    window.location.href = 'https://redirect.invidious.io'
} else {
const Video = webPageName.split("watch?v=")
window.location.href = "https://redirect.invidious.io/watch/" + Video
}
