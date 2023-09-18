document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    const paths = document.querySelectorAll('path');
    const navlinks = document.querySelectorAll('.nav');

    const scrollThreshold = 125;

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > scrollThreshold) {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-60px';
        }

        if (scrollY > scrollThreshold) {
            footer.style.bottom = '0';
        } else {
            footer.style.bottom = '-60px';
        }
    }

    window.addEventListener('scroll', handleScroll);

    paths.forEach(function (path) {

        path.addEventListener('click', function () {
            window.open('https://codepen.io/PickJBennett/details/BdbrMW', '_blank');
        });
    });

    navlinks.forEach(function (navlink) {
        navlink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = navlink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const yAdjustment = -75;
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yAdjustment;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });



});