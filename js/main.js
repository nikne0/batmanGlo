/*
 *** Created by NikNet 27.03.2020
*/
"use strict";

$(document).ready(function () {
console.log("Bene");

let tabsItem = $('.tabs-item');

tabsItem.on('click', function(event) {
    event.preventDefault();

    let activeContent = $(this).attr('href');

    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');

    $('.tabs-item-active').toggleClass('tabs-item-active')
    $(this).toggleClass('tabs-item-active');

    console.log();
    });

});
    