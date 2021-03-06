// "use strict";

function getCurrentPageFromHash() {
    return parseInt(window.location.hash.replace(/^$/, '#1').replace('#', ''), 10);
}
function enableProjectPages() {
    $('.page').show();
}
function enableControls() {
    $('#controls').show();
}
function activateControls() {
    $('body').addClass('control-activated');
}
function deactivateControls() {
    $('body').removeClass('control-activated');
}
function updateNavigationHints(page) {
    var idx = page - 1;
    var pages = $('.page');
    var prev = pages[idx - 1] ? '← ' + $(pages[idx - 1]).attr('data-title') : '';
    var next = pages[idx + 1] ? $(pages[idx + 1]).attr('data-title') + ' →' : '';
    var curr = $(pages[idx]).attr('data-title');
    //$('#page_control').attr('data-prev', prev).attr('data-next', next);
    $('#prev_title').text(prev);
    $('#next_title').text(next);
    $('#controls').attr('data-curr', curr);
}
// -----
function initModels() {
    window.controller = $.observable({});

    controller.on('landOnHome', function () {
        if (SHOULD_OVERRIDE_CONTROL) {
            enableControls();
            updateNavigationHints(1);
        }
    });
    controller.on('landOnPage', function (page) {
        if (SHOULD_OVERRIDE_CONTROL) {
            enableControls();
            updateNavigationHints(page);
        }
    });
    controller.on('enterProjects', function () {
        if (SHOULD_OVERRIDE_CONTROL) {
            activateControls();
        } else {
            $("#index").moveTo(2); // first project
        }
    });
    controller.on('switchToPage', function (page) { // starts from 1
        if (SHOULD_OVERRIDE_CONTROL) {
            updateNavigationHints(page);
            $("#index").moveTo(page);
        }
    })
}
function initOnePageScrolling() {
    // https://github.com/peachananr/onepage-scroll
    $("#index").onepage_scroll({
        sectionContainer: ".page",       // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease-out",              // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 500,              // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true,                 // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {    // This option accepts a callback function. The function will be called before the page moves.
            //de.time('beforeMove', index);
        },
        afterMove: function(index) {     // This option accepts a callback function. The function will be called after the page moves.
            //de.time('afterMove', index);
            $('#page_control').val(parseInt(index, 10));
        },
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
    });
}
function initMobilePageControl() {
    var $controls = $('#controls'),
        $pageControl = $('#page_control');
    $pageControl
//        .css('width', $(window).height() * 0.7) // vertical_bar
        .css('width', $(window).width() * 0.8) // horizontal_bar
        .attr('max', $('.page').length)
        .val(parseInt(getCurrentPageFromHash()))
        .on('change', function() {
            var page = parseInt($(this).val(), 10); // starts from 1
            controller.trigger('switchToPage', page);
        })
        .on('change touchmove', function() {
            var page = parseInt($(this).val(), 10); // starts from 1
            if (page == getCurrentPageFromHash()) {
                return;
            }

            controller.trigger('switchToPage', page);
        })
        .on('touchstart', function () {
            activateControls();
        })
        .on('touchend', function () {
            deactivateControls();
        })
        ;
    $controls
        .css({
//            bottom: 0 + $(window).height() / 2, // vertical_bar
//            right: 0 - $pageControl.width() / 2 + 40 // vertical_bar
            bottom: '80px', // horizontal_bar
            left: '10%' // horizontal_bar
        })
        ;
    if (SHOULD_OVERRIDE_CONTROL) {
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
    $('#description').find('a:nth-child(1)').click(function() {
        controller.trigger('enterProjects');
    });
    $(window).resize(function () {
        $('#page_control').css('width', $(window).width() * 0.8) // horizontal_bar
    });
}
function init() {
    initModels();
    initOnePageScrolling();
    initMobilePageControl();
    initMedia();
    bindEvents();
    de.time('INITIALIZATION DONE');
}
$(document).ready(function() {
    window.SHOULD_OVERRIDE_CONTROL = $('html').hasClass('touch');
    init();
    if (window.location.hash === '') {
        controller.trigger('landOnHome');
    } else {
        controller.trigger('landOnPage', getCurrentPageFromHash());
    }
    enableProjectPages(); // avoid FOUC
});
