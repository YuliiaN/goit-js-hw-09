const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
refs.start.addEventListener('click', onClickChangeColor);
refs.stop.addEventListener('click', onClickStopChanges);
let intervalId = null;

function onClickChangeColor(event) {
  refs.stop.removeAttribute('disabled');
  event.target.setAttribute('disabled', 'disabled');
  intervalId = setInterval(
    () => (refs.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function onClickStopChanges(event) {
  refs.start.removeAttribute('disabled');
  event.target.setAttribute('disabled', 'disabled');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
