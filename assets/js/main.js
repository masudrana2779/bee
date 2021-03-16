!function (e) {
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
            } else {
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


        /*===========Portfolio isotope js===========*/
        function filTeTiSotOp() {
            var $grid = $('.filter_items_section');
            if ($grid.length) {
                $grid.imagesLoaded(function () {
                    $grid.isotope({
                        itemSelector: '.filter_single_item',
                        percentPosition: true,
                        layoutMode: 'masonry',
                        filter: "*",
                        animationOptions: {
                            duration: 1000
                        },
                        stagger: 0,
                        transitionDuration: '0.9s',
                        masonry: {
                            // use outer width of grid-sizer for columnWidth
                            columnWidth: 1
                        }
                    });
                    $(".filter_menu li").on('click', function () {
                        $(".filter_menu li").removeClass("active");
                        $(this).addClass("active");

                        var selector = $(this).attr("data-filter");
                        $grid.isotope({
                            filter: selector,
                            animationOptions: {
                                animationDuration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                });
            }
        }

        filTeTiSotOp();


        /*---------LIGHT-BOX js-----------*/

        function lightBoxImages() {

            var selectorG = '.lightbox';
            if ($(selectorG).length) {
                var instanceG = $(selectorG).imageLightbox({
                    quitOnDocClick: false,
                    button: true,
                    activity: true,
                    overlay: true,
                    arrows: true,
                    preloadNext: true,
                });
            }
        }

        lightBoxImages();

    });

}(jQuery);