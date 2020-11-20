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
 *   isMobile Utility         *
 * ----------------------------
 */

const breakPoints = {
    xSmall  : 576,
    small   : 768,
    medium  : 992,
    large   : 1280,
    xLarge  : 1490,
    xxLarge : 1920,
    xxxLarge: 2560,
};

function isMobile() {
    return window.innerWidth < breakPoints.xSmall;
}

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

/**
 * ----------------------------
 *   Init carousel on mobile  *
 * ----------------------------
 */

if( isMobile() ) {
    new Glider(document.querySelector('.js-card-carousel'), {
        slidesToShow: 1,
        draggable: true,
        dots: '.dots',
    });
}

/**
 * ----------------------------
 *   Toggle Login Popup &     *
 *   Forgot Pw Navigation     *
 * ----------------------------
 */

const popupToggle = $('.js-toggle-login-popup');
const forgotLink = $('.js-forgot-pw');
const popupContainer = $('.js-popup-container');

popupToggle.on('click', function(){

    popupContainer.fadeIn('fast');
});

// Handle close popup div on click anywhere

$(document).on('click', function (event) {
    if(! event.target.classList.contains('js-toggle-login-popup')) {
        popupContainer.hide();
    }
});