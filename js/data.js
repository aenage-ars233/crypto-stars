export function getUserData(onSuccess, onFail) {
  fetch('https://cryptostar.grading.htmlacademy.pro/user')
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error('Не удалось загрузить данные пользователя');
    })
    .then((user) => {
      onSuccess(user);
    })
    .catch((err) => {
      onFail(err.message);
    });
}

export function getContractors(onSuccess, onFail) {
  fetch('https://cryptostar.grading.htmlacademy.pro/contractors')
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error('Не удалось загрузить контрагентов');
    })
    .then((contractors) => {
      onSuccess(contractors);
    })
    .catch((err) => {
      onFail(err.message);
    });
}

export function sendContractorData() {}
