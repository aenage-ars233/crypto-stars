import { openModalSell, openModalBuy } from './popup.js';

// Данные пользователя
let user = {};
const userProfile = document.querySelector('.user-profile');
const userCryptoBalance = document.querySelector('#user-crypto-balance');
const userFiatBalance = document.querySelector('#user-fiat-balance');
const userProfileName = document.querySelector('.user-profile__name > span');

export function renderUserData(userData, isData = true) {
  if (isData) {
    user = userData;
    const cryptoBalance = userData.balances[1];
    const moneyBalance = userData.balances[0];

    userProfileName.textContent = userData.userName;
    userCryptoBalance.textContent = cryptoBalance.amount;
    userFiatBalance.textContent = moneyBalance.amount;
  } else {
    userProfile.style.display = 'none';
  }
}

export function hideUserData() {
  userProfile.style.display = 'none';
}

// Контрагенты
const usersListTableBody = document.querySelector('.users-list__table-body');
const userTableRowTemplate = document.querySelector('#user-table-row__template').content.querySelector('.users-list__table-row');

function createContractor(contractor) {
  const userTableRow = userTableRowTemplate.cloneNode(true);

  function createBadgeItem(paymentMethod) {
    const badgeItem = document.createElement('li');
    badgeItem.classList.add('users-list__badges-item');
    badgeItem.classList.add('badge');
    badgeItem.textContent = paymentMethod.provider;
    return badgeItem;
  }

  userTableRow.querySelector('.users-list__table-name span').textContent = contractor.userName;
  userTableRow.querySelector('.users-list__table-name svg').style.display = contractor.isVerified ? 'inline' : 'none';
  userTableRow.querySelector('.users-list__table-currency').textContent = contractor.balance.currency;
  userTableRow.querySelector('.users-list__table-exchangerate').textContent = `${contractor.exchangeRate} ₽`;
  const badgesList = userTableRow.querySelector('.users-list__badges-list');
  const contractorButton = userTableRow.querySelector('.users-list__table-btn button');
  if (contractor.status === 'seller') {
    userTableRow.querySelector('.users-list__table-cashlimit').textContent = `${contractor.minAmount} ₽ - ${Math.floor(contractor.balance.amount * contractor.exchangeRate)} ₽`;
    badgesList.innerHTML = '';
    contractor.paymentMethods.forEach((paymentMethod) => {
      badgesList.append(createBadgeItem(paymentMethod));
    });
    contractorButton.addEventListener('click', () => {
      openModalSell(contractor, user);
    });
  }
  if (contractor.status === 'buyer') {
    userTableRow.querySelector('.users-list__table-cashlimit').textContent = `${contractor.minAmount} ₽ - ${contractor.balance.amount} ₽`;
    badgesList.innerHTML = '';
    contractorButton.addEventListener('click', () => {
      openModalBuy(contractor, user);
    });
  }

  return userTableRow;
}

export function renderContractors(contractors) {
  usersListTableBody.innerHTML = '';
  if (!contractors) {
    return null;
  }

  const contractorsFragment = document.createDocumentFragment();
  contractors.forEach((contractor) => {
    const contractorElement = createContractor(contractor);
    contractorsFragment.append(contractorElement);
  });
  usersListTableBody.append(contractorsFragment);
}
