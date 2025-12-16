
document.querySelectorAll('[data-princess]').forEach(link => {
    link.addEventListener('click', () => {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-overlay';
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    });
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        if(link.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Highlight current princess in nav while scrolling
const sections = document.querySelectorAll('.princess-section');
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        if(scrollPos >= top && scrollPos <= bottom) {
            document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active-nav'));
            const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            if(activeLink) activeLink.classList.add('active-nav');
        }
    });
});
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.animationDuration = 3 + Math.random() * 3 + 's';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 6000);
}

setInterval(createSparkle, 500);
