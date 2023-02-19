
$(function() {
    'use strict';



    var gnavUlLi = $('.gnav > ul > li');
    gnavUlLi.on({
        'mouseenter.pcHover': function() {
            if ($(this).hasClass('active')) {} else {
                $(this).addClass('is-hover');
            }
        },
        'mouseleave.pcHover': function() {
            if ($(this).find('.gnav-menu').hasClass('is-megamenu')) {} else {
                $(this).removeClass('is-hover');
            }
        }
    });


    // ----------------------------------------

    var rwdGnav = $('.gnav'),
        breakPoint = 768, // 
        slideSpeed = 200, //
        fadeSpeed = 200; //

    var gnavSouce = rwdGnav.html();

    $(window).load(function() {
        function menuSet() {
            if (window.innerWidth < breakPoint) {
                if (!($('.wrapper-gnav-sp').length)) {
                    // 
                    $('.header-head').prepend('<div class="wrapper-gnav-sp"><div class="header-gnav"><button type="button" class="btn-close-gnav"><span class="humberger-icon-close"><span class="sr-only">ナビゲーションクローズボタン</span></span></button></div><nav class="gnav-sp"></nav></div>');
                    $('.gnav-sp').append(gnavSouce);
                    // 
                    $('.gnav-sp > ul > li:nth-of-type(2) > a, .gnav-sp > ul > li:nth-of-type(4) > a').on('click', function() {
                        $(this).parent().toggleClass('is-megamenu-open');
                        return false;
                    });
                    // matchHeight
                    $('.gnav-sp .megamenu--product .megamenu__list, .gnav-sp .megamenu--profile .megamenu__list, .gnav-sp .megamenu--service .megamenu__list, .gnav-sp .megamenu--training .megamenu__list, .gnav-sp .megamenu--ir .megamenu__list').matchHeight({
                        remove: true
                    });

                    var btnOpenGnav = $('.btn-open-gnav'), // 
                        btnCloseGnav = $('.btn-close-gnav'), // 
                        whiteOut = $('.white-out'); // 



                    btnOpenGnav.on('click', function() {
                        if ($(this).hasClass('btn-open-gnav--close')) {} else {

                            $(this).addClass('btn-open-gnav--close');
                            $('.wrapper-gnav-sp').stop().animate({
                                right: '0'
                            }, slideSpeed);
                            whiteOut.stop().animate({
                                opacity: '.2'
                            }, fadeSpeed);
                            $('.wrapper-gnav-sp').swipe({ //
                                swipeRight: function() {
                                    $(this).stop().animate({
                                        right: '-260px'
                                    }, slideSpeed);
                                    btnOpenGnav.removeClass('btn-open-gnav--close');
                                    whiteOut.stop().animate({
                                        opacity: '1'
                                    }, fadeSpeed);
                                },
                                threshold: 100 //
                            });
                        }
                    });
                    btnCloseGnav.on('click', function() {
                        if (btnOpenGnav.hasClass('btn-open-gnav--close')) {
                            btnOpenGnav.removeClass('btn-open-gnav--close');
                            $('.wrapper-gnav-sp').stop().animate({
                                right: '-260px'
                            }, slideSpeed);
                            whiteOut.stop().animate({
                                opacity: '1'
                            }, fadeSpeed);
                        }
                    });
                }
            } else {
                $('.wrapper-gnav-sp').remove();
                $('.btn-open-gnav').removeClass('btn-open-gnav--close');



            }
        }

        $(window).on('resize', function() {
            menuSet();
        });

        menuSet();
    });
});


$(function() {
    'use strict';
    $('.page-top').hide();
    $(function() {
        $(window).on('load scroll resize', function() {
            if ($(this).scrollTop() > 400) {
                $('.page-top').fadeIn(30);
            } else {
                $('.page-top').fadeOut(30);
            }
        });

        $('.page-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});