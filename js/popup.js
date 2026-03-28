import { setData } from './popup-form.js';

function handleOnEsc(evt) {
  if (evt.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      modal.style.display = 'none';
      document.body.classList.remove('scroll-lock');
    });
  }
}

// Модальное окно продажи
const modalSell = document.querySelector('.modal--sell');
const modalSellOverlay = modalSell.querySelector('.modal__overlay');
const closeModalSellButton = modalSell.querySelector('.modal__close-btn');

function closeModalSell() {
  modalSell.style.display = 'none';
  document.body.classList.remove('scroll-lock');
  modalSellOverlay.removeEventListener('click', closeModalSell);
  closeModalSellButton.removeEventListener('click', closeModalSell);
  document.removeEventListener('keydown', handleOnEsc);
}

export function openModalSell(contractor, user) {
  modalSell.querySelector('.transaction-info__item--name .transaction-info__data svg').style.display = contractor.isVerified ? 'inline' : 'none';
  modalSell.querySelector('.transaction-info__item--name .transaction-info__data span').textContent = contractor.userName;
  modalSell.querySelector('.transaction-info__item--exchangerate .transaction-info__data').textContent = `${contractor.exchangeRate} ₽`;
  modalSell.querySelector('.transaction-info__item--cashlimit .transaction-info__data').textContent = `${contractor.minAmount} ₽ - ${Math.floor(contractor.balance.amount * contractor.exchangeRate)} ₽`;
  modalSell.querySelector('.modal__validation-message--error').style.display = 'none';
  modalSell.querySelector('.modal__validation-message--success').style.display = 'none';
  modalSell.style.display = 'block';
  setData(contractor, user);
  document.body.classList.add('scroll-lock');
  modalSellOverlay.addEventListener('click', closeModalSell);
  closeModalSellButton.addEventListener('click', closeModalSell);
  document.addEventListener('keydown', handleOnEsc);
}

// Модальное окно покупки
const modalBuy = document.querySelector('.modal--buy');
const modalBuyOverlay = modalBuy.querySelector('.modal__overlay');
const closeModalBuyButton = modalBuy.querySelector('.modal__close-btn');

function closeModalBuy() {
  modalBuy.style.display = 'none';
  document.body.classList.remove('scroll-lock');
  modalBuyOverlay.removeEventListener('click', closeModalBuy);
  closeModalBuyButton.removeEventListener('click', closeModalBuy);
  document.removeEventListener('click', handleOnEsc);
}

export function openModalBuy(contractor, user) {
  modalBuy.querySelector('.transaction-info__item--name .transaction-info__data svg').style.display = contractor.isVerified ? 'inline' : 'none';
  modalBuy.querySelector('.transaction-info__item--name .transaction-info__data span').textContent = contractor.userName;
  modalBuy.querySelector('.transaction-info__item--exchangerate .transaction-info__data').textContent = `${contractor.exchangeRate} ₽`;
  modalBuy.querySelector('.transaction-info__item--cashlimit .transaction-info__data').textContent = `${contractor.minAmount} ₽ - ${contractor.balance.amount} ₽`;
  modalBuy.querySelector('.modal__validation-message--error').style.display = 'none';
  modalBuy.querySelector('.modal__validation-message--success').style.display = 'none';
  modalBuy.style.display = 'block';
  setData(contractor, user);
  document.body.classList.add('scroll-lock');
  modalBuyOverlay.addEventListener('click', closeModalBuy);
  closeModalBuyButton.addEventListener('click', closeModalBuy);
  document.addEventListener('click', handleOnEsc);
}
