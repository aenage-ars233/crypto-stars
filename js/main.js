import { getUserData, getContractors } from './data.js';
import { renderUserData, renderContractors } from './ui.js';

getUserData((userData) => {
  renderUserData(userData);
},);

getContractors((contractors) => {
  renderContractors(contractors);
},);
