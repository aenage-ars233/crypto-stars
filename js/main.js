import { getUserData, getContractors } from './data.js';
import { setAllContractors } from './filters.js';
import { renderUserData } from './ui.js';

getUserData((userData) => {
  renderUserData(userData);
},);

getContractors((contractors) => {
  setAllContractors(contractors);
},);
