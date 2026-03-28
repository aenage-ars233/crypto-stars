const VALID_PAYMENT_PASSWORD = 180712;

let contractorData = {};
let userData = {};

/* Форма продажи */
const sellForm = document.querySelector('.modal-sell');
const pristine = new Pristine(sellForm, {
  classTo: 'custom-input',
  errorTextParent: 'custom-input__error',
});

// Оплата и зачисление
const paymentInput = sellForm.querySelector('.modal__input--payment');
const paymentExchangeAll = sellForm.querySelector('.btn-exchange-payment');
const creditingInput = sellForm.querySelector('.modal__input--crediting');
const creditingExchangeAll = sellForm.querySelector('.btn-exchange-crediting');

paymentInput.addEventListener('input', (evt) => {
  creditingInput.value = (evt.target.value * contractorData.exchangeRate).toFixed(2);
});

creditingInput.addEventListener('input', (evt) => {
  paymentInput.value = (evt.target.value / contractorData.exchangeRate).toFixed(2);
  pristine.validate(paymentInput);
});

function exchangeAll() {
  creditingInput.value = (contractorData.exchangeRate * contractorData.balance.amount).toFixed(2);
  paymentInput.value = (creditingInput.value / contractorData.exchangeRate).toFixed(2);
}

creditingExchangeAll.addEventListener('click', exchangeAll);
paymentExchangeAll.addEventListener('click', exchangeAll);

// Номер криптокошелька пользователя
const numberUserWalletInput = sellForm.querySelector('.custom-input__number-wallet');

// Платежный пароль
const passwordField = sellForm.querySelector('.custom-input__password');
function checkPassword(value) {
  // eslint-disable-next-line eqeqeq
  return value == VALID_PAYMENT_PASSWORD;
}

pristine.addValidator(passwordField, checkPassword, 'Неверный пароль');

sellForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    console.log('Форма валидна');
  } else {
    console.log('Форма невалидна');
  }
});

/* Данные */

export function setData(contractor, user) {
  console.log(user);
  contractorData = contractor;
  console.log(user);
  userData = user;
  console.log(userData);
  numberUserWalletInput.value = userData.paymentMethods[1].accountNumber;
}
