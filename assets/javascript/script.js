$(document).ready(function () {

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
                    x: 1.1,
                    y: 1.1
                },
                easing: "hardsway",
                duration: 1000,
                delay: 65,
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

})