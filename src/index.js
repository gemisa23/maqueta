import './assets/css/style.scss';
//import { smoothScroll } from './assets/js/helpers';
//import legalesModal from './assets/js/legales-modal';
//import animationsCSS from './assets/js/animations-css';


const toggleFeatureDropdown = (event) => {
    event.target.parentElement.classList.toggle('expanded');
    document.querySelector('#site-wrapper #IntelFeatures .IntelFeatures-FeaturesList li')
}

const init = () => {

    if (!document.querySelector('#site-wrapper')) {
        return setTimeout(init, 50);
    }

    [...document.querySelectorAll('.FeatureArrow')].forEach(dropdown => {
        dropdown.addEventListener('click', toggleFeatureDropdown);
    });

}

init();
