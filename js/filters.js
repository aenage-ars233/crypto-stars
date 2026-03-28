import { renderContractors } from './ui.js';
import { showMap, hideMap } from './map.js';

let allContractors = [];

const state = {
  type: 'sell',
  verified: false,
  view: 'list',
};

export function filterContractors() {
  let filteredContractors = allContractors.slice();
  renderContractors();
  hideMap();

  if (state.type === 'sell') {
    filteredContractors = filteredContractors.filter((contractor) => contractor.status === 'seller');
  }
  if (state.type === 'buy') {
    filteredContractors = filteredContractors.filter((contractor) => contractor.status === 'buyer');
  }

  if (state.verified) {
    filteredContractors = filteredContractors.filter((contractor) => contractor.isVerified);
  }

  if (state.view === 'list') {
    renderContractors(filteredContractors);
  }
  if (state.view === 'map') {
    filteredContractors = filteredContractors.filter((contractor) => {
      let isCash = false;
      for (let i = 0; i < contractor.paymentMethods.length; i++) {
        if (contractor.paymentMethods[i].provider === 'Cash in person') {
          isCash = true;
          break;
        }
      }
      return isCash;
    });
    console.log(filteredContractors);
    showMap(filteredContractors);
  }
}

// Табы продавцов и покупателей
const tabControlSellers = document.querySelector('.tabs__control--sellers');
const tabControlBuyers = document.querySelector('.tabs__control--buyers');
tabControlSellers.addEventListener('click', () => {
  tabControlBuyers.classList.remove('is-active');
  tabControlSellers.classList.add('is-active');
  state.type = 'sell';
  filterContractors();
});
tabControlBuyers.addEventListener('click', () => {
  tabControlBuyers.classList.add('is-active');
  tabControlSellers.classList.remove('is-active');
  state.type = 'buy';
  filterContractors();
});

// Проверенные пользователи
const checkedUsersCheckbox = document.querySelector('#checked-users');
checkedUsersCheckbox.addEventListener('change', () => {
  state.verified = checkedUsersCheckbox.checked;
  filterContractors();
});

// Табы режима просмотра
const tabControlList = document.querySelector('.tabs__control--list');
const tabControlMap = document.querySelector('.tabs__control--map');
tabControlList.addEventListener('click', () => {
  tabControlMap.classList.remove('is-active');
  tabControlList.classList.add('is-active');
  state.view = 'list';
  filterContractors();
});
tabControlMap.addEventListener('click', () => {
  tabControlMap.classList.add('is-active');
  tabControlList.classList.remove('is-active');
  state.view = 'map';
  filterContractors();
});

export function setAllContractors(contractors) {
  allContractors = contractors;
  filterContractors();
}

// Сервер недоступен
const filtersElement = document.querySelector('.filters');
const usersList = document.querySelector('.users-list');
const noServerElement = document.querySelector('.no-server');
export function showNoServer() {
  filtersElement.remove();
  usersList.remove();
  noServerElement.style.display = 'block';
}
