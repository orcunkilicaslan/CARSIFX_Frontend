let headerElem=document.getElementById("siteHeader"),stickyPosition=headerElem.offsetTop;function makeStickyHeader(){window.pageYOffset>stickyPosition?headerElem.classList.add("header-sticky"):headerElem.classList.remove("header-sticky")}window.onscroll=function(){makeStickyHeader()};const menuToggle=$(".js-menu-toggle"),menuClose=$(".js-menu-close"),mobileMenu=$(".js-mobile-menu");$(document).ready(function(){menuToggle.on("click",function(){mobileMenu.is(":visible")||mobileMenu.fadeIn("fast")}),menuClose.on("click",function(){mobileMenu.is(":visible")&&mobileMenu.fadeOut("fast")})});