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

export function openModalSell() {
  modalSell.style.display = 'block';
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

export function openModalBuy() {
  modalBuy.style.display = 'block';
  document.body.classList.add('scroll-lock');
  modalBuyOverlay.addEventListener('click', closeModalBuy);
  closeModalBuyButton.addEventListener('click', closeModalBuy);
  document.addEventListener('click', handleOnEsc);
}
