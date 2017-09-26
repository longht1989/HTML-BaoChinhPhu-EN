/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // highlight slider
    $('.zone--highlight .slider').bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '#highlight-slider-next',
        prevSelector: '#highlight-slider-prev',
        pagerCustom: '#highlight-pager',
        auto: 1
    });
    // featured slider
    $('.zone--slider .slider').bxSlider({
        pager: false,
        nextText: '',
        prevText: '',
        nextSelector: '#featured-slider-next',
        prevSelector: '#featured-slider-prev'
    });
    // galleria article
    $(function() {
        // Load the classic theme
        Galleria.loadTheme('../Jscripts/vendor/galleria/themes/classic/galleria.classic.min.js');

        // Initialize Galleria
        Galleria.run('#galleria', {
            height: 400
        });
    });
});
