import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
const date = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < date) {
      window.alert('Please choose a date in the future');
    } else {
      refs.button.removeAttribute('disabled');
    }
  },
};

flatpickr(refs.input, options);

refs.button.setAttribute('disabled', 'disabled');
refs.button.addEventListener('click', onClickBtn);
refs.input.addEventListener('input', onInputChanges);

function onClickBtn(event) {
  event.target.setAttribute('disabled', 'disabled');
  refs.input.setAttribute('disabled', 'disabled');
}

function onInputChanges(event) {
  const difference = Date.now() - Date.parse(event.target.value);

  function setReverseTime() {
    const { days, hours, minutes, seconds } = convertMs(difference);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }
  setReverseTime();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
