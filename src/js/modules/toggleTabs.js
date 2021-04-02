const toggleTabs = () => {
  const factsWrapper = document.querySelector('.facts__wrapper');
  const tabs = document.querySelectorAll('.facts__list-item');
  const tabContent = document.querySelectorAll('.facts__tab');

  const toggleTabContent = index => {
    for (let i = 0; i < tabContent.length; i++) {
      if (i === index) {
        tabs[i].classList.add('facts__list-item_active');
        tabContent[i].classList.remove('d-none');
      } else {
        tabs[i].classList.remove('facts__list-item_active');
        tabContent[i].classList.add('d-none');
      }
    }
  };

  factsWrapper.addEventListener('click', e => {
    let target = e.target;

    target = target.closest('.facts__list-item');

    if (target) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          console.log(tab);
          toggleTabContent(index);
        }
      });
    }
  });
};

export default toggleTabs;
