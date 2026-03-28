import { getUserData, getContractors } from './data.js';
import { setAllContractors, showNoServer } from './filters.js';
import { renderUserData, hideUserData } from './ui.js';

getUserData((userData) => {
  renderUserData(userData);
}, () => {
  hideUserData();
});

getContractors((contractors) => {
  setAllContractors(contractors);
}, () => {
  hideUserData();
  showNoServer();
});
