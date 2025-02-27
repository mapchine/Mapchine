"use strict";

jQuery(document).ready(function ($) {
    // ---------------------------------------------------
    // 1. Preloader
    // ---------------------------------------------------
    $(window).on('load', function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });

    // ---------------------------------------------------
    // 2. Desplazamiento Suave para Enlaces del Menú
    // ---------------------------------------------------
    $('#navbar-collapse').find('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 40) // Ajusta si la navbar fija cubre la sección
                }, 1000);
                if ($('.navbar-toggle').css('display') !== 'none') {
                    $(this).closest('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    // ---------------------------------------------------
    // 3. Cambio de Fondo del Menú al Desplazarse
    // ---------------------------------------------------
    var windowWidth = $(window).width();
    if (windowWidth > 757) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.navbar').fadeIn(200);
                $('.navbar').addClass('menu-bg');
            } else {
                $('.navbar').removeClass('menu-bg');
            }
        });
    }

    // ---------------------------------------------------
    // 4. Botón de Scroll Up
    // ---------------------------------------------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // ---------------------------------------------------
    // 5. Inicialización de CounterUp
    // ---------------------------------------------------
    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

    // ---------------------------------------------------
    // 6. Inicialización de WOW.js
    // ---------------------------------------------------
    var wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       false,
        live:         true
    });
    wow.init();

    // ---------------------------------------------------
    // 7. Inicialización de Bootstrap Carousel
    // ---------------------------------------------------
    if ($('#carousel-example-generic').length) {
        $('#carousel-example-generic').carousel({
            interval: 2000, // Cambia de slide cada 3 segundos
            pause: "hover"  // Pausa el carrusel al pasar el mouse
        });
    }

});
