const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
            dots: false,
            arrows: true
        }
    }
});
navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})