function initSlider() {
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
}
$(document).on('ready', function () {
    initSlider();
});