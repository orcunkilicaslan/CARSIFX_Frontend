let headerElem=document.getElementById("siteHeader"),stickyPosition=headerElem.offsetTop;function makeStickyHeader(){window.pageYOffset>stickyPosition?headerElem.classList.add("header-sticky"):headerElem.classList.remove("header-sticky")}window.onscroll=function(){makeStickyHeader()};const breakPoints={xSmall:576,small:768,medium:992,large:1280,xLarge:1490,xxLarge:1920,xxxLarge:2560};function isMobile(){return window.innerWidth<breakPoints.xSmall}const menuToggle=$(".js-menu-toggle"),menuClose=$(".js-menu-close"),mobileMenu=$(".js-mobile-menu");$(document).ready(function(){menuToggle.on("click",function(){mobileMenu.is(":visible")||mobileMenu.fadeIn("fast")}),menuClose.on("click",function(){mobileMenu.is(":visible")&&mobileMenu.fadeOut("fast")})});const popupToggle=$(".js-toggle-login-popup"),forgotLink=$(".js-forgot-pw"),popupContainer=$(".js-popup-container");popupToggle.on("click",function(){popupContainer.fadeIn("fast")}),$(document).on("click",function(e){e.target.classList.contains("js-toggle-login-popup")||popupContainer.hide()});const errorMessages={fieldRequired:"Bu alan gereklidir!",validEmail:"Lütfen geçerli bir email adresi giriniz !",passwordsDontMatch:"Şifre ve şifre tekrarı aynı değil!",enterValidPhone:"Telefon numarsı 05XXXXXXXXXX şeklinde olmalı",enterValidPassword:"Lütfen en az 8 karakterli bir şifre giriniz",agreementRequired:"Sözleşme kabülü gereklidir",notProperInfo:"Eksik yada hatalı bilgi"},errorContext={isAdded:{toTextField:!1}};function showErrorMessage(e,s,i=!1){let o;o=i?$("<span class='form-element-error error-short'>"+e+"</span>").appendTo(s):$("<span class='form-element-error'>"+e+"</span>").appendTo(s),setTimeout(()=>{o.fadeOut(2e3)},2e3)}function isValidEmail(e){return/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function isTablet(){return window.innerWidth<breakPoints.medium}if($(document).ready(function(){let e=$(".js-form-control"),s=$("#siteForm");e.length>0&&s.on("submit",function(s){let i=!1;e.each(function(e,s){let o=Boolean($(this).attr("data-required")),r=$(this).attr("data-min"),a=$(this).attr("data-same-as"),t=$(this).attr("type"),n=$(this).val(),l="checkbox"===t,d=$(this).attr("data-short-error-message");o&&"text"===t&&n.length<r&&(void 0!==d?showErrorMessage(errorMessages.fieldRequired,$(this).parent()[0],!0):showErrorMessage(errorMessages.fieldRequired,$(this).parent()[0]),$(this).addClass("is-invalid"),i=!0),o&&"email"===t&&(isValidEmail(n)?console.log("email field ok"):(i=!0,showErrorMessage(errorMessages.validEmail,$(this).parent()[0]),$(this).addClass("is-invalid"))),o&&"tel"===t&&(""!==n&&11===n.length||(i=!0,showErrorMessage(errorMessages.enterValidPhone,$(this).parent()[0]),$(this).addClass("is-invalid"))),o&&"password"===t&&n.length<r&&(i=!0,showErrorMessage(errorMessages.enterValidPassword,$(this).parent()[0]),$(this).addClass("is-invalid")),!n===$(a).val()&&(i=!0,$(a).addClass("is-invalid"),showErrorMessage(errorMessages.passwordsDontMatch,$(a).parent()[0])),o&&!0===l&&!1===$(this).prop("checked")&&(i=!0,$(this).addClass("is-invalid"))}),console.log("hasError?",i),!0===i&&(s.preventDefault(),s.stopPropagation())})}),isMobile()||isTablet()){let e=document.querySelector(".js-card-carousel");null!==e&&new Glider(e,{slidesToShow:1,draggable:!0,dots:".dots"})}let homeSlider=$(".owl-carousel");$(document).ready(function(){homeSlider.owlCarousel({loop:!0,margin:10,nav:!1,dots:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1},autoHeight:!0}})});