const mapContainer = document.querySelector('.map-container');

const map = L.map('map').setView({
  lat: 59.92749,
  lng: 30.31127,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [36, 46],
  iconAnchor: [18, 46],
});

const verifiedMarkerIcon = L.icon({
  iconUrl: '../img/pin-verified.svg',
  iconSize: [36, 46],
  iconAnchor: [18, 46],
});

function createMapBaloon(contractor) {
  const baloonTemplate = document.querySelector('#map-baloon__template').content.querySelector('.user-card');
  const popupElement = baloonTemplate.cloneNode(true);

  popupElement.querySelector('.user-card__user-name svg').style.display = contractor.isVerified ? 'inline' : 'none';
  popupElement.querySelector('.user-card__user-name span').textContent = contractor.userName;
  popupElement.querySelector('.user-card__cash-data--currency').textContent = contractor.balance.currency;
  popupElement.querySelector('.user-card__cash-data--exchangerate').textContent = contractor.exchangeRate;

  return popupElement;
}

export function hideMap() {
  markerGroup.clearLayers();
  mapContainer.style.display = 'none';
}

export function showMap(contractors) {
  mapContainer.style.display = 'block';
  contractors.forEach((contractor) => {
    const markerIcon = contractor.isVerified ? verifiedMarkerIcon : mainMarkerIcon;
    const marker = L.marker(
      {
        lat: contractor.coords.lat,
        lng: contractor.coords.lng,
      },
      {
        icon: markerIcon,
      }
    );
    marker.addTo(markerGroup).bindPopup(createMapBaloon(contractor));
  });
}
