
$(function() {
    'use strict';
    var breakPoint = 767; //
    var MODAL_OPEN = false;

    $('.modal').modaal({
        hide_close: true,
        should_open: function() {
            if (window.innerWidth > breakPoint) { //PC
                MODAL_OPEN = true;
                return true;
            } else {
                return false;
            }

        },
        after_close: function() {
            MODAL_OPEN = false;
        }
    });

    $(window).on('resize load', function() {
        if (window.innerWidth > breakPoint) { //PC

            $('.modal-close').click(function() {
                $('.modal').modaal('close');

                return false;
            });
        } else { //SP
            var ACTIVE_CLASS = 'is-active';

            if (MODAL_OPEN == true) {
                $('.modal').modaal('close');
                MODAL_OPEN = false
            }

            $('.modal').off('click.sp').on('click.sp', function() {
                $(this).next().toggleClass(ACTIVE_CLASS);

                return false;
            });
        }
    });
});