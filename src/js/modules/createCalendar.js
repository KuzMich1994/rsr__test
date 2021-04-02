import clickToDate from './clickToDate';
const createCalendar = () => {
  const date = new Date();
  const renderCalendar = () => {
    date.setDate(1);
    const today = new Date().getDate();
    console.log(today);
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];
    const monthDays = document.querySelector('.activity__calendar-days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay() - 1;
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex + 1;

    let days = '';

    document.querySelector('.month').textContent = months[date.getMonth()];
    document.querySelector('.year').textContent = ` ${date.getFullYear()}`;

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="activity__calendar-prev-date">${prevLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="activity__calendar-day activity__calendar-day_today">${i}</div>`;
      } else {
        days += `<div class="activity__calendar-day">${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="activity__calendar-next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }

    const nextDaysText = document.querySelectorAll('.activity__calendar-next-date');
    const prevDaysText = document.querySelectorAll('.activity__calendar-prev-date');
    const calendarDays = document.querySelectorAll('.activity__calendar-day');

    // calendarDays.forEach((day, index) => {
    //   if (today === index) {
    //     day.classList.add('activity__calendar-day_today');
    //   } else {
    //     day.classList.remove('activity__calendar-day_today');
    //   }
    // });

    [...nextDaysText, ...prevDaysText].forEach(day => {
      day.textContent = '';
    });
  };
  

  document.querySelector('.activity__handler-button_prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    clickToDate();
  });
  document.querySelector('.activity__handler-button_next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    clickToDate();
  });

  renderCalendar();
};

export default createCalendar;