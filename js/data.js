export function getUserData(onSuccess) {
  const userData = {
    userName: 'Арсений',
    balances: [
      {
        currency: 'RUB',
        amount: 929128,
      },
      {
        currency: 'KEKS',
        amount: 94.28,
      },
    ],
    wallet: {
      currency: 'KEKS',
      address: 'o6j428495spjy20pwwer0elobwz8lvwksk2ffwxd',
    },
    paymentMethods: [
      {
        currency: 'RUB',
        provider: 'Sberbank',
        accountNumber: '0000 0000 0000 5691',
      },
      {
        currency: 'RUB',
        provider: 'QIWI',
        accountNumber: '0000 0000 0000 4880',
      },
    ],
  };
  onSuccess(userData);
}

export function getContractors(onSuccess, onError) {
  const contractors = [
    {
      id: '0CsQ60w3M-RTyumLjjlfN',
      balance: {
        currency: 'KEKS',
        amount: 4.94,
      },
      exchangeRate: 2517204.54,
      isVerified: false,
      status: 'seller',
      userName: 'Зинаида',
      paymentMethods: [
        {
          currency: 'RUB',
          provider: 'Sberbank',
          accountNumber: '0000 0000 0000 4991',
        },
        {
          currency: 'RUB',
          provider: 'Cash in person',
        },
      ],
      coords: {
        lat: 59.65203,
        lng: 30.24462,
      },
      minAmount: 7906,
    },
    {
      id: '1ctUkL5VGbv5x126ypZ0n',
      balance: {
        currency: 'RUB',
        amount: 120064,
      },
      exchangeRate: 109485.34,
      isVerified: false,
      status: 'buyer',
      userName: 'Пётр',
      wallet: {
        currency: 'KEKS',
        address: 'je9dnx2c04l2tgmm1fsxphw2pikdcuksni663wn8',
      },
      minAmount: 18290,
    },
    {
      id: '0CsQ60w3M-RTyumLjjlop',
      balance: {
        currency: 'KEKS',
        amount: 4.94,
      },
      exchangeRate: 2517204.54,
      isVerified: true,
      status: 'seller',
      userName: 'Арсений',
      paymentMethods: [
        {
          currency: 'RUB',
          provider: 'Sberbank',
          accountNumber: '0000 0000 0000 4993',
        },
        {
          currency: 'RUB',
          provider: 'Cash in person',
        },
      ],
      coords: {
        lat: 59.65703,
        lng: 30.23462,
      },
      minAmount: 7906,
    },
    {
      id: '1ctUhL5VGbv5x121ypZ0n',
      balance: {
        currency: 'RUB',
        amount: 120064,
      },
      exchangeRate: 109485.34,
      isVerified: true,
      status: 'buyer',
      userName: 'Суперпользователь',
      wallet: {
        currency: 'KEKS',
        address: 'je0dnx2c04l2tgmm1fsxphw2pikdcuksni663wn8',
      },
      minAmount: 18290,
    },
  ];
  onSuccess(contractors);
}

export function sendContractorData() {}
