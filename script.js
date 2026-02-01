// 1. Scroll Reveal Animation (Elements neeche se upar aayenge)
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
// Trigger once on load
reveal();

// 2. Theme Toggle (Dark/Light Mode)
const themeBtn = document.getElementById('theme-btn');

if(themeBtn) {
    const themeIcon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'bx bx-sun';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.className = 'bx bx-moon';
        }
    });
}
