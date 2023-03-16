$(document).ready(function() {
    "use strict";
    (new WOW).init(), $("#fullpage").fullpage({
        navigation: false,
        anchors: ["home", "about", "works", "contact"],
        sectionsColor: ["transparent", "#F25C27", "transparent", "#F25C27"],
        autoScrolling: false,
        scrollOverflowReset: true,
    })
});