function addBottomShadow() {
    if ($('.header').offset().top > 50) {
        $('.header').addClass('bottom-shadow');
    } else {
        $('.header').removeClass('bottom-shadow');
    }
}

$(window).scroll(addBottomShadow);

$(document).ready(function() {
    $(".header__nav--toggle").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("is-active") === true) {
            $(this).removeClass("is-active")
            $(this).parent().find(".header__nav__menu").hide();
        } else {
            $(this).addClass("is-active");
            $(this).parent().find(".header__nav__menu").show();
        }
    });
});