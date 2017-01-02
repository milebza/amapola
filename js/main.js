/************************** 

    JavaScript (jQuery) for
    
    Milena Baeza's website

***************************/


//-----------------------
//  Add a bottom shadow
//-----------------------

function addBottomShadow() {
    if ($('.header').offset().top > 50) {
        $('.header').addClass('bottom-shadow');
    } else {
        $('.header').removeClass('bottom-shadow');
    }
}

$(window).scroll(addBottomShadow);


$(document).ready(function() {
    
    //-----------------------------
    //  Open/close mobile menu
    //-----------------------------
    
    $(".js-toggle").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("is-active") === true) {
            $(this).removeClass("is-active")
            $(this).parent().find(".header__nav__menu").slideUp(500);
        } else {
            $(this).addClass("is-active");
            $(this).parent().find(".header__nav__menu").slideDown(500);
        }
    });
    
    
    //-----------------
    //  Scroll to page
    //-----------------
    
    $('.js-scroll-to').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("data-page")).offset().top
        }, 1500, 'easeInOutExpo');
    });
    
    
    //-------------------
    //  Slick (Carousel)
    //-------------------
    
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});