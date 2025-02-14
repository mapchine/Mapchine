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
                    scrollTop: (target.offset().top - 40) // Ajusta este valor si la barra de navegación fija cubre parte de la sección
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
    if (windowWidth > 757) { // Ajusta este valor según el punto de quiebre de tu diseño responsivo
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) { // Ajusta este valor según cuándo quieras que cambie el fondo
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
        if ($(this).scrollTop() > 600) { // Muestra el botón después de 600px de desplazamiento
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000); // Desplazamiento suave hacia arriba
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
        boxClass:     'wow',      // Clase CSS para elementos a animar
        animateClass: 'animated', // Clase CSS para animaciones
        offset:       0,          // Distancia desde el viewport para activar la animación
        mobile:       false,      // Desactivar animaciones en dispositivos móviles
        live:         true        // Activa la observación de DOM en vivo
    });
    wow.init();

    // ---------------------------------------------------
    // 7. Inicialización de OWL Carousel (Comentado)
    // ---------------------------------------------------
    // Si decides usar OWL Carousel en el futuro, descomenta y ajusta el siguiente código.
    /*
    $('.testimonials').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        autoplayHoverPause: true
    });
    */

    // ---------------------------------------------------
    // 8. Inicialización del Mapa
    // ---------------------------------------------------
    // Verificar que el contenedor del mapa exista
    if ($('#map').length) {
        // Crear el mapa centrado en una ubicación promedio
        var map = L.map('map').setView([20.0, -100.0], 3); // Coordenadas centradas en el Caribe

        // Añadir la capa de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Función para crear marcadores con popups
        function addMarker(lat, lon, popupContent) {
            L.marker([lat, lon]).addTo(map)
                .bindPopup(popupContent)
                .openPopup();
        }

        // Añadir Marcadores
        // Puerto Rico
        addMarker(18.2208, -66.5901, '<b>Puerto Rico</b>');

        // North Dakota
        addMarker(47.5515, -101.0020, '<b>North Dakota, USA</b>');

        // Costa Rica
        addMarker(9.7489, -83.7534, '<b>Costa Rica</b>');
    }
});
