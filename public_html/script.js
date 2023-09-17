document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    const paths = document.querySelectorAll('path');
    const navlinks = document.querySelectorAll('.nav');
    var oneTab = false;

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

    paths.forEach(function(path){
        path.addEventListener('click', function(){
            window.open('https://codepen.io/PickJBennett/details/BdbrMW', '_blank');
        });
    });

    navlinks.forEach(function(){
        navlinks.addEventListener('click', function(){
            const yOffset = -500; 
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top : y, behavior:'smooth'});
        });
    });

    

});