// Optional: click dropdown for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
    drop.addEventListener('click', () => {
        drop.classList.toggle('open');
        const menu = drop.querySelector('.dropdown-menu');
        if(drop.classList.contains('open')){
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});
