// "use strict";

// -----
function initOnePageScrolling() {
    // https://github.com/peachananr/onepage-scroll
    $("#index").onepage_scroll({
        sectionContainer: ".page",       // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease-out",              // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 500,              // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true,                 // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {     // This option accepts a callback function. The function will be called after the page moves.
            $('#page_control').val(parseInt(window.location.hash.replace('#', ''), 10))
        },
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
    });
}
function initPageControl() {
    var $controls = $('#controls'),
        $pageControl = $('#page_control');
    $pageControl
        .css('width', $(window).height() * 0.7)
        .attr('max', $('.page').length)
        .val(parseInt(window.location.hash.replace(/^$/, '#1').replace('#', ''), 10))
        .on('change', function() {
            var page = parseInt($(this).val(), 10);
            $("#index").moveTo(page);
        })
        .on('touchstart', function () {
            $(this).addClass('active');
        })
        .on('touchend', function () {
            $(this).removeClass('active');
        })
        ;
    $controls
        .css({
            bottom: 0 + $(window).height() / 2,
            right: 0 - $pageControl.width() / 2 + 40
        })
        ;
    if (IS_MOBILE) {
        $controls.show();
        $('.onepage-pagination').hide();
    }
}
function initMedia() {
    $('.project-media').each(function(idx, media) {
        var $media = $(media);
        $media.css({
            'backgroundImage': 'url('+$media.attr('data-url')+')',
            'backgroundSize': 'cover',
            'backgroundPosition': 'center center',
            'backgroundRepeat': 'no-repeat',

            'right': -1 * $media.width() / 2,
            'bottom': -1 * $media.height() / 2
        });
    });
}
function bindEvents() {
    de.time();
}
function init() {
    initOnePageScrolling();
    initPageControl();
    initMedia();
    bindEvents();
    de.time('INITIALIZATION DONE');
}
$(document).ready(function() {
    init();
});
