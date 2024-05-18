bulmaCarousel.attach('#pet-carousel', {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 1000
});

// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#pet-carousel');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
}
