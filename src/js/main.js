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

/**
 * ----------------------------
 *   Form Handling            *
 * ----------------------------
 */

const errorMessages = {
    fieldRequired: 'Bu alan gereklidir!',
    validEmail: 'Lütfen geçerli bir email adresi giriniz !',
    passwordsDontMatch: 'Şifre ve şifre tekrarı aynı değil!',
    enterValidPhone: 'Telefon numarsı 05XXXXXXXXXX şeklinde olmalı',
    enterValidPassword: 'Lütfen en az 8 karakterli bir şifre giriniz',
    agreementRequired: 'Sözleşme kabülü gereklidir',
    notProperInfo: 'Eksik yada hatalı bilgi'
};

const errorContext = {
    isAdded: {
        toTextField: false
    }
};

function showErrorMessage(message, parentTarget, isShortMessage = false) {

    let elem;

    if( isShortMessage ) {
        elem = $("<span class='form-element-error error-short'>" + message + "</span>").appendTo( parentTarget );
    } else {
        elem = $("<span class='form-element-error'>" + message + "</span>").appendTo( parentTarget );
    }
    setTimeout(()=> {
        elem.fadeOut(2000);
    }, 2000)
}

function isValidEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function(){

    let formControl = $(".js-form-control");
    let form = $("#siteForm");

    // check if any from element exist in given page

    if( formControl.length > 0 ) {



        form.on('submit', function(event){

            let hasError = false;

            formControl.each(function(key, elem){

                let isRequired = Boolean($(this).attr('data-required'));
                let minChar = $(this).attr('data-min');
                let sameAs = $(this).attr('data-same-as');
                let elementType = $(this).attr('type');
                let elementValue = $(this).val();
                let isCheckbox = (elementType === 'checkbox');
                let isShortErrorMessage = $(this).attr('data-short-error-message');

                // text fields check

                if(isRequired && elementType === 'text') {

                    if( elementValue.length < minChar ) {
                        if( isShortErrorMessage !== undefined ) {
                            showErrorMessage(errorMessages.fieldRequired,
                                $(this).parent()[0], true);
                        } else {
                            showErrorMessage(errorMessages.fieldRequired,
                                $(this).parent()[0]);
                        }
                        $(this).addClass('is-invalid');
                        hasError = true;

                    }

                }

                if(isRequired && elementType === 'email') {
                    if( ! isValidEmail(elementValue) ) {
                        hasError = true;
                        showErrorMessage(errorMessages.validEmail,$(this).parent()[0]);
                        $(this).addClass('is-invalid');
                    }else {
                        console.log('email field ok');
                    }
                }

                if(isRequired && elementType === 'tel') {
                    if( elementValue === '' || elementValue.length !== 11 ) {
                        hasError = true;
                        showErrorMessage(errorMessages.enterValidPhone,$(this).parent()[0]);
                        $(this).addClass('is-invalid');
                    }
                }

                if(isRequired && elementType === 'password') {
                    if( elementValue.length < minChar ) {
                        hasError = true;
                        showErrorMessage(errorMessages.enterValidPassword,$(this).parent()[0]);
                        $(this).addClass('is-invalid');
                    }
                }

                if( ! elementValue === $(sameAs).val() ) {
                    hasError = true;
                    $(sameAs).addClass('is-invalid');
                    showErrorMessage(errorMessages.passwordsDontMatch, $(sameAs).parent()[0])
                }

                if( isRequired && isCheckbox === true ) {
                    if( $(this).prop('checked') === false ) {
                        hasError = true;
                        $(this).addClass('is-invalid');
                    }
                }

            });

            console.log('hasError?', hasError);

            if(hasError === true) {
                event.preventDefault();
                event.stopPropagation();
            }
        });

    }

});