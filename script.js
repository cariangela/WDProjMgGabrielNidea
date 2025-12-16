new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 60,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});
