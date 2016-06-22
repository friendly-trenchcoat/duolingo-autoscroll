// ==UserScript==
// @author         friendly-trenchcoat
// @name           Duolingo - Autoscroll
// @description    Scrolls to the first non-gold icon
// @include        https://www.duolingo.com/
// @require	       http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

// NOTE: eq(0) means, use the first non-gold icon. If you want to go to the second, use eq(1); the third, eq(2); etc.
var element = $("span[class*='unlocked']").eq(0).parent().parent().parent().prev(); 

$('html, body').animate({
    scrollTop: $(element).offset().top
}, 2000);
