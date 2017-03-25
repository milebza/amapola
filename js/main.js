/************************** 

    JavaScript (jQuery)

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

$(document).ready(function() {
    $(window).scroll(addBottomShadow);
    
    //-----------------------------
    //  Open/close mobile menu
    //-----------------------------
    
    $('.js-toggle').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('is-active') === true) {
            $(this).removeClass('is-active');
            $(this).parent().find('.js-menu').slideUp(500);
        } else {
            $(this).addClass('is-active');
            $(this).parent().find('.js-menu').slideDown(500);
        }
    });
    
    
    //-----------------
    //  Open carousel
    //-----------------
    
    $('.js-projc').click(function(e) {
        e.preventDefault();
        var type = $(this).attr('data-type');
        $('.'+type).addClass('visible');
        $('.js-backgr').addClass('visible');
    });
    
    
    //-----------------
    //  Close carousel
    //-----------------
    
    $('.js-backgr').click(function(e) {
        e.preventDefault();
        $('.js-carousel').removeClass('visible');
        $(this).removeClass('visible');
    });
    
    
    //-----------------
    //  Scroll to page
    //-----------------
    
    $('.js-scroll-to').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('data-page')).offset().top
        }, 1500, 'easeInOutExpo');
    });
    
    
    //-----------------------------
    //  Initialize slick (carousel)
    //-----------------------------
    
    $('.js-slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true
    });
});