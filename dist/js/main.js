/**
 * ----------------------------
 *   Sticky Header Code  *
 * ----------------------------
 */


let headerElem = document.getElementById('siteHeader');
let stickyPosition = headerElem.offsetTop;

function makeStickyHeader() {

    if( window.pageYOffset > stickyPosition ) {
        headerElem.classList.add('header-sticky')
    } else {
        headerElem.classList.remove('header-sticky')
    }

}

window.onscroll = function() {
    makeStickyHeader();
};


/**
 * ----------------------------
 *   Mobile menu open-close  *
 * ----------------------------
 */

const menuToggle = $(".js-menu-toggle");
const menuClose  = $(".js-menu-close");
const mobileMenu = $(".js-mobile-menu");

$(document).ready(function(){

    menuToggle.on('click', function(){
        if(! mobileMenu.is(':visible')) {
            mobileMenu.fadeIn('fast');
        }
    });

    menuClose.on('click', function(){
        if( mobileMenu.is(':visible') ) {
            mobileMenu.fadeOut('fast');
        }
    })

});
