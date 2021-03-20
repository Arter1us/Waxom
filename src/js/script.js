const slider = tns({
    container: '.promo__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    controlsText: [
        '<img src="../icons/left.svg" alt="left">',
        '<img src="../icons/right.svg" alt="right">'
    ]
});

document.querySelector('.slick-prev').addEventListener('click', () => {
    slider.goTo('prev')
});

document.querySelector('.slick-next').addEventListener('click', () => {
    slider.goTo('next')
});