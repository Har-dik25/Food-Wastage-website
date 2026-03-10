// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById("toast");
    if (toast) {
        toast.innerText = message;
        toast.className = "show";
        setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
    }
}

// Handle Form Submissions Smoothly
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Simple validation for phone numbers if present
        const phoneInput = form.querySelector('input[type="tel"]');
        if (phoneInput) {
            if (phoneInput.value.length < 10 || isNaN(phoneInput.value)) {
                showToast("Please enter a valid 10-digit phone number.");
                return;
            }
        }

        // Show success toast
        showToast("Thank you! Your request has been received.");
        form.reset(); // Clear the form
    });
});
