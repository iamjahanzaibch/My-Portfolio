document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Python', 'Database', 'Deep Learning'],
        typeSpeed: 50,
    });

    var typed1 = new Typed('#element1', {
        strings: ['Web Developer', 'Python', 'Database', 'Deep Learning'],
        typeSpeed: 50,
    });
});

var menu = document.getElementById("menuebar");
var sidenav = document.getElementById("sidenav");
sidenav.style.width = "0px";
menu.onclick = function () {
    if (sidenav.style.width == "0px") {
        sidenav.style.width = "250px";
    }
    else {
        sidenav.style.width = "0px";
    }
}
