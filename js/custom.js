$(function () {
    "use strict";
    document.getElementsByClassName('lateral_submenu').style.minHeight = $(window).height() - ($('.header_page').height() + $('.recherche').height() + 15);
});
