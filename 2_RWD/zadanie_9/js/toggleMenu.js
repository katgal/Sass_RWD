$(document).ready(function() {

    var hamburgerMenu = $(".hamburger");
    var list = $(".list");

    hamburgerMenu.on("click", function() {
        list.slideToggle(500, function() { //rozwijane menu
            // najpierw wlaczam slide>pojawianie-znikanie i dodaje callback,...
            //najpierw czysci style, bo inaczej na wiekszym ekranie nie bedzie widac menu w ogole!!!!!
            //a dopiero potem dodaje klase
            $(this).attr('style', "").toggleClass("show");
        });
    });
});
