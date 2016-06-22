// ==UserScript==
// @author         friendly-trenchcoat
// @name           Duolingo - Autoscroll
// @description    Scrolls to the first non-gold icon
// @include        https://www.duolingo.com/
// @require	       http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var n = 2; // USERS NOTE: If you want to skip one skill, set to 1; if you want to skip two, set to 2; etc.
var autoscroll = 1; // scroll on page load

setInterval(function() { // check every second
    // if not defined or you are not on the main page, set it to scroll
    if(document.body.innerHTML.search('Daily Goal') == -1){
        autoscroll = 1;
    }
    // else if on main page and set to scroll
    else if(document.body.innerHTML.search('Daily Goal') !== -1 && autoscroll == 1){
        var element = $("span[class*='unlocked']").eq(n).parent().parent().parent().prev();
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 2000);
        autoscroll = 0;
    }
}, 1000);
