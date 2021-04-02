const dropdownSelect = () => {
  const header = document.querySelector('.header');
  const langs = header.querySelector('.header__langs');
  const langsList = header.querySelector('.header__langs-list');
  const langsValue = langs.querySelector('.header__langs-value');

  header.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.header__langs')) {
      langs.classList.toggle('header__langs_active');
      langsList.classList.toggle('header__langs-list_active');
      if (target.matches('.header__langs-item')) {
        langsValue.textContent = target.textContent;
      }
    }
  });
};

export default dropdownSelect;
