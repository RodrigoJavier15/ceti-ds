$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        $('#navbar').toggleClass('unfold-navbar');
    });
});

function removeResponsive() {
    $('#navbar').removeClass('unfold-navbar');
    $('#nav-icon').removeClass('open');
}
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();
$(window).scroll(function(event) {
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#navbar').addClass('nav-hide');
        $('.dropdown').removeClass("show");
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#navbar').removeClass('nav-hide');
        }
    }
    lastScrollTop = st;
}


//ABRIR DROPDOWNS
function openDropdown(element){
    if($(element).hasClass('show')){
        $('.dropdown').removeClass("show");
    }
    else{
        $('.dropdown').removeClass("show");
        $(element).toggleClass('show');
    }
}

//CERRAR LOS DROPDOWN CUANDO EL CLICK SEA FUERA DE ESTOS ELEMENTOS
$(document).on("click", function(event) {
    if (!($(event.target).hasClass('dropdown') || $(event.target).hasClass('not-cls-drop'))) {
        $('.dropdown').removeClass("show");
    }
})

