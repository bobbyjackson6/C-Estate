$(document).ready(function () {
    $("#carousel1").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        merge: true,
        margin: 30,
        navText: ["", ""],
    });
    $("#carousel2").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ["", ""],
    });
});