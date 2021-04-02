const showMobileMenu = () => {
  const header = document.querySelector('.header');
  const overlay = header.querySelector('.header__overlay');
  const menu = header.querySelector('.header__wrapper');
  const headerAccount = header.querySelectorAll('.header__account');

  header.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.header__button')) {
      overlay.classList.add('header__overlay_active');
      menu.classList.add('header__wrapper_active');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.header__overlay') || target.matches('.header__mobile-close') || target.tagName === 'A' ||
    target.closest('.header__account')) {
      overlay.classList.remove('header__overlay_active');
      menu.classList.remove('header__wrapper_active');
      document.body.classList.remove('scroll-hidden');
    }
  });
};

export default showMobileMenu;
