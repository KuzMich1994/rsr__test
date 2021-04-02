const clickToDate = () => {
  const calendar = document.querySelector('.activity__calendar');
  const calendarDay = document.querySelectorAll('.activity__calendar-day');

  const changeBg = index => {
    for (let i = 0; i < calendarDay.length; i++) {
      if (index === i) {
        calendarDay[i].classList.add('activity__calendar-day_active');
      } else {
        calendarDay[i].classList.remove('activity__calendar-day_active');
      }
    }
  };

  calendar.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.activity__calendar-day') && !target.classList.contains('activity__calendar-day_disabled')) {
      calendarDay.forEach((day, index) => {
        if (target === day) {
          changeBg(index);
        }
      });
    }
  });
};

export default clickToDate;
