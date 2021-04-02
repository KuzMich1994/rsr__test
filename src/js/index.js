import '../index.html';
import '../css/style.css';
import '../sass/style.sass';
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css';
import toggleTabs from './modules/toggleTabs';
import dropdownSelect from './modules/dropdownSelect';
import showMobileMenu from './modules/showMobileMenu';
import clickToDate from './modules/clickToDate';
import createCalendar from './modules/createCalendar';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const swiper = new Swiper('.main__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.main__pagination',
    bulletClass: "main__bullet",
    bulletActiveClass: "main__bullet_active",
    clickable: true
  },
});


toggleTabs();
dropdownSelect();
showMobileMenu();
createCalendar();
clickToDate();
AOS.init();
