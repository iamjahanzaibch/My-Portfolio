document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Python', 'Database', 'Deep Learning'],
        typeSpeed: 50,
    });

    var typed1 = new Typed('#element1', {
        strings: ['Web Developer', 'Python', 'Database', 'Deep Learning'],
        typeSpeed: 50,
    });

    // Side navigation menu functionality
    var menu = document.getElementById("menuebar");
    var sidenav = document.getElementById("sidenav");
    sidenav.style.width = "0px";

    menu.onclick = function () {
        if (sidenav.style.width == "0px") {
            sidenav.style.width = "250px";
        } else {
            sidenav.style.width = "0px";
        }
    }

    // Form validation and submission
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            form.submit();
            alert('Message successfully received. Thank you!');
        } else {
            alert('Please fill in all required fields.');
        }
    });

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        if (
            nameInput.value.trim() === '' ||
            emailInput.value.trim() === '' ||
            messageInput.value.trim() === ''
        ) {
            return false;
        }
        return true;
    }
});
