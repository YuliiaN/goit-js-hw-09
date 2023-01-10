const { Notify } = require('notiflix');

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('.js-delay'),
  step: document.querySelector('.js-step'),
  amount: document.querySelector('.js-amount'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  for (let i = 0; i < refs.amount.value; i++) {
    let step = refs.step.value * i;

    createPromise(i + 1, +refs.delay.value + step)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
