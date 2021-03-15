! function (e) {
    "use strict";


    $(document).ready(function () {


        // scrollSmoothTop
        function scrollSmoothTop() {
            if (('.scroll_down').length > 0) {
                $('.scroll_down a[href^="#"], .mainMenu a[href^="#"]').on('click', function (event) {
                    var target = $(this.getAttribute('href'));
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').stop().animate({
                            scrollTop: target.offset().top - 80
                        }, 500);
                    }
                });
            }
        }
        scrollSmoothTop();

        // menuOpacity
        function menuOpacity() {
            $("#mainMenu .navbar-nav .nav-link").on('mouseover', function () {
                $("#mainMenu .navbar-nav .nav-link").addClass("menuHover");
                $(this).removeClass("menuHover");
            });

            $("#mainMenu .navbar-nav .nav-link").on('mouseleave', function () {
                $("#mainMenu .navbar-nav .nav-link").removeClass("menuHover");
            });
        }
        menuOpacity();

        // headerFixed
        function headerFixed() {
            var $scTop = $(window).scrollTop();
            var sdsdsdsdsd = $(".banner_wrap").outerHeight();
            if ($scTop > sdsdsdsdsd) {
                $(".header").addClass("fixdHeader");
            }
            else {
                $(".header").removeClass("fixdHeader");
            }
        }
        headerFixed();



        $(window).on('scroll', function () {
            var $opcn = 1 - $scTop / 700;
            var $scTop = $(window).scrollTop();
            //$(".banner_wrap").css("opacity", $opcn);
            if ($opcn < 0) {
                $(".banner_wrap").addClass('hide');
            } else {
                $(".banner_wrap").removeClass('hide');
            }
            if ($scTop < 120) {
                $('.go_to_top').hide(300);
            } else {
                $('.go_to_top').show(300);
            }

            headerFixed();
        });
    });

}(jQuery);