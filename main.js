$(document).ready(function() {
    $('.sidebar_button').mouseenter(function() {
        $('.sidebar_button').fadeTo('fast' , 0.5)
    });
    $('.sidebar_button').mouseleave(function() {
        $('.sidebar_button').fadeTo('fast' , 1)
    });
});
