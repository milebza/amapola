function addBottomShadow() {
    if ($('.header').offset().top > 50) {
        $('.header').addClass('bottom-shadow');
    } else {
        $('.header').removeClass('bottom-shadow');
    }
}

$(window).scroll(addBottomShadow);

$(document).ready(function() {
    $(".js-toggle").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("is-active") === true) {
            $(this).removeClass("is-active")
            $(this).parent().find(".header__nav__menu").hide();
        } else {
            $(this).addClass("is-active");
            $(this).parent().find(".header__nav__menu").show();
        }
    });
    
    $('.js-scroll-to').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("data-page")).offset().top - 50
        }, 1500, function() {});
    });
});