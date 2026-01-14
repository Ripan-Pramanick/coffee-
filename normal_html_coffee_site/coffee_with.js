document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('header');
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('nav-menu');

            // Scroll Listener for Fixed Navbar
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    header.classList.add('fixed');
                } else {
                    header.classList.remove('fixed');
                }
            });

            // Mobile Toggle logic
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });
        });

// jump to sections

document.getElementById('about-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('home-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('menu-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('testimonials-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#product').scrollIntoView({ behavior: 'smooth' });

});

document.getElementById('gallery-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.review-section').scrollIntoView({ behavior: 'smooth' });
});

