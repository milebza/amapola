/************************** 

    JavaScript (jQuery)

***************************/


//-----------------------
//  Adds a bottom shadow
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiBcclxuXHJcbiAgICBKYXZhU2NyaXB0IChqUXVlcnkpXHJcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgQWRkcyBhIGJvdHRvbSBzaGFkb3dcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gYWRkQm90dG9tU2hhZG93KCkge1xyXG4gICAgaWYgKCQoJy5oZWFkZXInKS5vZmZzZXQoKS50b3AgPiA1MCkge1xyXG4gICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcygnYm90dG9tLXNoYWRvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JvdHRvbS1zaGFkb3cnKTtcclxuICAgIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGFkZEJvdHRvbVNoYWRvdyk7XHJcbiAgICBcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vICBPcGVuL2Nsb3NlIG1vYmlsZSBtZW51XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuICAgICQoJy5qcy10b2dnbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuanMtbWVudScpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuanMtbWVudScpLnNsaWRlRG93big1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vICBPcGVuIGNhcm91c2VsXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuICAgICQoJy5qcy1wcm9qYycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHR5cGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdHlwZScpO1xyXG4gICAgICAgICQoJy4nK3R5cGUpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgJCgnLmpzLWJhY2tncicpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyAgQ2xvc2UgY2Fyb3VzZWxcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgJCgnLmpzLWJhY2tncicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmpzLWNhcm91c2VsJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyAgU2Nyb2xsIHRvIHBhZ2VcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgJCgnLmpzLXNjcm9sbC10bycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdkYXRhLXBhZ2UnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vICBJbml0aWFsaXplIHNsaWNrIChjYXJvdXNlbClcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgJCgnLmpzLXNsaWNrJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
