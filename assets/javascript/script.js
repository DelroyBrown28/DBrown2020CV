$(document).ready(function () {


    // bounce function for Coding button
    $('.coding').click(function () {
        var bounce = new Bounce();
        bounce
            .rotate({
                from: 0,
                to: 0,
                duration: 1000,
                stiffness: 1
            })
            .scale({
                from: {
                    x: 1,
                    y: 1
                },
                to: {
                    x: 2,
                    y: 2
                },
                easing: "sway",
                duration: 1000,
                delay: 0,
                stiffness: 1
            })
            .translate({
                from: {
                    x: 0,
                    y: 0
                },
                to: {
                    x: 0.5,
                    y: 0.7
                },
                easing: "sway",
                duration: 1000,
                delay: 30,
            })
            .applyTo(document.querySelectorAll("#github_link"));
    })

    // Click to show music carousel
    $('.music').click(function () {
        $('.music_carousel, .carousel_wrap').toggle();
        $('.all_books').css('display', 'none');

    })

    $('.books').click(function () {
        $('.music_carousel, .carousel_wrap').css('display', 'none');
        $('.all_books').toggle()
    })

    // Carousel for music album covers
    $('.music_carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        autoplay: true,
        autoplayspeed: 300,
    });





})