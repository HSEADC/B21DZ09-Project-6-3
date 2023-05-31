/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 971:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var backButton = document.querySelector('.Q_GoBack');
  backButton.addEventListener('click', function () {
    if (document.referrer) {
      window.location.href = document.referrer;
    } else {
      // Ваш fallback-код, если document.referrer недоступен
      // Например, перенаправление на главную страницу
      window.location.href = '/';
    }
  });
});

/***/ }),

/***/ 808:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('.A_SearchInput');
  var cards = document.querySelectorAll('.M_SearchAndFiltersPageCard');
  var categories = document.querySelectorAll('.A_SearchAndFilterCard');
  var filterArrow = document.querySelector('.Q_FilterPageArrowImage1');
  var searchAndFilterCards = document.querySelector('.W_SearchAndFilterCards');
  var titleSearchAndFilterPage = document.querySelector('.A_TitleSearchAndFilterPage');
  var searchQuery = '';
  var activeCategories = [];
  var filterArrowClickCount = 0;
  categories.forEach(function (category) {
    category.addEventListener('mouseover', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '0.4';
            cat.style.transition = 'opacity 0.15s ease-in-out';
          }
        });
      }
    });
    category.addEventListener('mouseout', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '1';
            cat.style.transition = 'opacity 0.15s ease-in-out';
          }
        });
      }
    });
    category.addEventListener('click', function () {
      filterArrowClickCount++;
      var categoryValue = category.getAttribute('data-category').toLowerCase();

      if (activeCategories.includes(categoryValue)) {
        activeCategories.splice(activeCategories.indexOf(categoryValue), 1);
      } else {
        activeCategories.push(categoryValue);
      }

      categories.forEach(function (cat) {
        var catValue = cat.getAttribute('data-category').toLowerCase();

        if (activeCategories.includes(catValue)) {
          cat.style.opacity = '1';
          cat.style.transition = 'opacity 0.15s ease-in-out';
        } else {
          cat.style.opacity = '0.4';
          cat.style.transition = 'opacity 0.15s ease-in-out';
        }
      });
      cards.forEach(function (card) {
        var keywords = card.getAttribute('data-keywords').toLowerCase();
        var cardCategory = card.getAttribute('data-category').toLowerCase();

        if (keywords.includes(searchQuery) && (activeCategories.length === 0 || activeCategories.includes(cardCategory))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

/***/ }),

/***/ 360:
/***/ (() => {

var toggleButton = document.querySelector('.Q_Menu');
var overlay = document.querySelector('.C_Menu');
toggleButton.addEventListener('click', function () {
  if (overlay.style.display === 'none' || overlay.style.display === '') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
});

/***/ }),

/***/ 551:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic21zYWxpc2NoZXZhMjIiLCJhIjoiY2xmNzF4eWZsMDJzODQ0bnZnNXFiYmd0cyJ9.TXlxfRR7GHif7rBbRWqOZw'; // замените на свой токен Mapbox

  var map = new mapboxgl.Map({
    container: document.querySelector('.Q_Map'),
    style: 'mapbox://styles/smsalischeva22/clf78rxpu00do01mltwb5aj5r',
    center: [37.618423, 55.751244],
    zoom: 10
  });
  var class1 = document.querySelector('.A_TitleAuxiliaryMap');
  var class2 = document.querySelector('.A_TextDependentMap');
  var categorySelector = document.querySelector('#category-selector');
  var glassButton = document.querySelector('#glass');
  var plasticButton = document.querySelector('#plastic');
  var clothesButton = document.querySelector('#clothes');
  var paperButton = document.querySelector('#paper');
  var metalButton = document.querySelector('#metal');
  var markers = [];
  var backButton = document.querySelector('.Q_GoBack');
  backButton.addEventListener('click', function () {
    history.back();
  });

  function showMarkers(category) {
    var filteredPlaces;

    if (category === 'glass') {
      filteredPlaces = glassRecyclingPlaces.filter(function (place) {
        return place.description === 'Стекло';
      });
    } else if (category === 'plastic') {
      filteredPlaces = plasticRecyclingPlaces.filter(function (place) {
        return place.description === 'Пластик';
      });
    } else if (category === 'paper') {
      filteredPlaces = paperRecyclingPlaces.filter(function (place) {
        return place.description === 'Бумага';
      });
    } else if (category === 'metal') {
      filteredPlaces = metalRecyclingPlaces.filter(function (place) {
        return place.description === 'Метал';
      });
    } else if (category === 'clothes') {
      filteredPlaces = clothesRecyclingPlaces.filter(function (place) {
        return place.description === 'Одежда';
      });
    }

    filteredPlaces.forEach(function (place) {
      if (!markers.includes(place.name)) {
        var getColor = function getColor(category) {
          switch (category) {
            case 'glass':
              return '#1ebcb1';

            case 'metal':
              return '#f45e4e';

            case 'plastic':
              return '#b0d3ff';

            case 'paper':
              return '#a15fff';

            case 'clothes':
              return '#ece700';
          }
        };

        markers.push(place.name);
        map.addSource(place.name, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: place.coordinates
              },
              properties: {
                title: place.name,
                icon: 'marker'
              }
            }]
          }
        });
        map.addLayer({
          id: place.name,
          type: 'circle',
          source: place.name,
          paint: {
            'circle-color': getColor(category),
            'circle-radius': 12,
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1
          }
        });
        map.on('click', place.name, function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var name = e.features[0].properties.title;
          var markerName = document.createElement('h4');
          markerName.textContent = name;
          var A_TextImportantBottomMap = document.querySelector('.A_TextImportantBottomMap');
          A_TextImportantBottomMap.innerHTML = '';
          A_TextImportantBottomMap.appendChild(markerName);
        });
      }
    });
  }

  function hideMarkers(category) {
    var filteredPlaces;

    if (category === 'glass') {
      filteredPlaces = glassRecyclingPlaces.filter(function (place) {
        return place.description === 'Стекло';
      });
    } else if (category === 'plastic') {
      filteredPlaces = plasticRecyclingPlaces.filter(function (place) {
        return place.description === 'Пластик';
      });
    } else if (category === 'paper') {
      filteredPlaces = paperRecyclingPlaces.filter(function (place) {
        return place.description === 'Бумага';
      });
    } else if (category === 'metal') {
      filteredPlaces = metalRecyclingPlaces.filter(function (place) {
        return place.description === 'Метал';
      });
    } else if (category === 'clothes') {
      filteredPlaces = clothesRecyclingPlaces.filter(function (place) {
        return place.description === 'Одежда';
      });
    }

    filteredPlaces.forEach(function (place) {
      var index = markers.indexOf(place.name);

      if (index !== -1) {
        markers.splice(index, 1);

        if (map.getLayer(place.name)) {
          map.removeLayer(place.name);
        }

        if (map.getSource(place.name)) {
          map.removeSource(place.name);
        }
      }
    });
  }

  glassButton.addEventListener('click', function () {
    hideMarkers('plastic');
    hideMarkers('paper');
    hideMarkers('metal');
    hideMarkers('clothes');
    showMarkers('glass');
    glassButton.style.backgroundColor = '#1EBCB1';
    glassButton.style.border = '2px solid black';
    glassButton.style.color = 'black';
    plasticButton.style.backgroundColor = 'black';
    plasticButton.style.border = '0px';
    plasticButton.style.color = '#f4f4f4';
    clothesButton.style.backgroundColor = 'black';
    clothesButton.style.border = '0px';
    clothesButton.style.color = '#f4f4f4';
    paperButton.style.backgroundColor = 'black';
    paperButton.style.border = '0px';
    paperButton.style.color = '#f4f4f4';
    metalButton.style.backgroundColor = 'black';
    metalButton.style.border = '0px';
    metalButton.style.color = '#f4f4f4';
    var A_TextImportantBottomMap = document.querySelector('.A_TextImportantBottomMap');

    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild);
    }

    class1.textContent = 'Утилизация стекла';
    class2.textContent = "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u0442\u0435\u043A\u043B\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E, \u0447\u0442\u043E\xA0\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C \u043D\u0430\xA0\u0434\u043E\u0431\u044B\u0447\u0435 \u043D\u043E\u0432\u044B\u0445 \u0441\u044B\u0440\u044C\u0435\u0432\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\xA0\u0441\u043D\u0438\u0436\u0430\u0442\u044C \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0430\xA0\u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u0442\u0435\u043A\u043B\u0430 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0445\u043E\u0434\u043E\u0432 \u043D\u0430\xA0\u0441\u0432\u0430\u043B\u043A\u0430\u0445 \u0438\xA0\u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0437\u0430\u0442\u0440\u0430\u0442\u044B \u043D\u0430\xA0\u0441\u0431\u043E\u0440 \u0438\xA0\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u0443\u0441\u043E\u0440\u0430.";
  });
  plasticButton.addEventListener('click', function () {
    hideMarkers('glass');
    hideMarkers('paper');
    hideMarkers('metal');
    hideMarkers('clothes');
    showMarkers('plastic');
    glassButton.style.backgroundColor = 'black';
    glassButton.style.border = '0px';
    glassButton.style.color = '#f4f4f4';
    plasticButton.style.backgroundColor = '#B0D3FF';
    plasticButton.style.border = '2px solid black';
    plasticButton.style.color = 'black';
    clothesButton.style.backgroundColor = 'black';
    clothesButton.style.border = '0px';
    clothesButton.style.color = '#f4f4f4';
    paperButton.style.backgroundColor = 'black';
    paperButton.style.border = '0px';
    paperButton.style.color = '#f4f4f4';
    metalButton.style.backgroundColor = 'black';
    metalButton.style.border = '0px';
    metalButton.style.color = '#f4f4f4';
    var A_TextImportantBottomMap = document.querySelector('.A_TextImportantBottomMap');

    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild);
    }

    class1.textContent = 'Утилизация пластика';
    class2.textContent = "\u0423\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u0430\u0436\u043D\u044B\u043C \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B \u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u044B\u0439 \u0432\u0440\u0435\u0434 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u0438\xA0\u0436\u0438\u0432\u044B\u043C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0430\u043C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0438\u0434\u044B \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043C\u043E\u0433\u0443\u0442 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u043D\u0430\xA0\u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0441\u043E\u0442\u0435\u043D \u043B\u0435\u0442, \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u044F\u044F \u0432\u043E\u0434\u043D\u044B\u0435 \u0438\xA0\u043D\u0430\u0437\u0435\u043C\u043D\u044B\u0435 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0447\u0442\u043E\xA0\u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A\xA0\u0433\u0438\u0431\u0435\u043B\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0438\xA0\u0440\u0430\u0437\u0440\u0443\u0448\u0438\u0442\u044C \u0438\u0445\xA0\u043C\u0435\u0441\u0442\u043E\u043E\u0431\u0438\u0442\u0430\u043D\u0438\u044F.";
  });
  paperButton.addEventListener('click', function () {
    hideMarkers('glass');
    hideMarkers('plastic');
    hideMarkers('metal');
    hideMarkers('clothes');
    showMarkers('paper');
    glassButton.style.backgroundColor = 'black';
    glassButton.style.border = '0px';
    glassButton.style.color = '#f4f4f4';
    plasticButton.style.backgroundColor = 'black';
    plasticButton.style.border = '0px';
    plasticButton.style.color = '#f4f4f4';
    clothesButton.style.backgroundColor = 'black';
    clothesButton.style.border = '0px';
    clothesButton.style.color = '#f4f4f4';
    paperButton.style.backgroundColor = '#A15FFF';
    paperButton.style.border = '2px solid black';
    paperButton.style.color = 'black';
    metalButton.style.backgroundColor = 'black';
    metalButton.style.border = '0px';
    metalButton.style.color = '#f4f4f4';
    var A_TextImportantBottomMap = document.querySelector('.A_TextImportantBottomMap');

    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild);
    }

    class1.textContent = 'Утилизация бумаги';
    class2.textContent = "\u0411\u0443\u043C\u0430\u0433\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0438\u0437\xA0\u0434\u0440\u0435\u0432\u0435\u0441\u043D\u044B\u0445 \u0432\u043E\u043B\u043E\u043A\u043E\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\xA0\u0442\u043E\u043B\u044C\u043A\u043E \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u043C \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u043C, \u043D\u043E\xA0\u0438\xA0\u0438\u0445 \u0434\u043E\u0431\u044B\u0447\u0430 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A\xA0\u0432\u044B\u0440\u0443\u0431\u043A\u0435 \u043B\u0435\u0441\u043E\u0432, \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044E \u0431\u0438\u043E\u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u044F \u0438\xA0\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u043A\u043B\u0438\u043C\u0430\u0442\u0430. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0441\u043A\u043B\u0430\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u0431\u0443\u043C\u0430\u0433\u0438 \u043D\u0430\xA0\u0441\u0432\u0430\u043B\u043A\u0430\u0445 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A\xA0\u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u044E \u043F\u043E\u0447\u0432\u044B \u0438\xA0\u0432\u043E\u0434\u044B, \u0430\xA0\u0442\u0430\u043A\u0436\u0435\xA0\u0432\u044B\u0431\u0440\u043E\u0441\u0443 \u043F\u0430\u0440\u043D\u0438\u043A\u043E\u0432\u044B\u0445 \u0433\u0430\u0437\u043E\u0432. \u0423\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0443\u043C\u0430\u0433\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0435\u0435 \u0432\xA0\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u044B\u0440\u044C\u044F \u0434\u043B\u044F\xA0\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043D\u043E\u0432\u043E\u0439 \u0431\u0443\u043C\u0430\u0433\u0438, \u0447\u0442\u043E\xA0\u0441\u043E\u043A\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0434\u0440\u0435\u0432\u0435\u0441\u043D\u044B\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0443\u043C\u0430\u0433\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043E\u0442\u0445\u043E\u0434\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u043D\u0430\xA0\u0441\u0432\u0430\u043B\u043A\u0438";
  });
  metalButton.addEventListener('click', function () {
    hideMarkers('glass');
    hideMarkers('plastic');
    hideMarkers('paper');
    hideMarkers('clothes');
    showMarkers('metal');
    glassButton.style.backgroundColor = 'black';
    glassButton.style.border = '0px';
    glassButton.style.color = '#f4f4f4';
    plasticButton.style.backgroundColor = 'black';
    plasticButton.style.border = '0px';
    plasticButton.style.color = '#f4f4f4';
    clothesButton.style.backgroundColor = 'black';
    clothesButton.style.border = '0px';
    clothesButton.style.color = '#f4f4f4';
    paperButton.style.backgroundColor = 'black';
    paperButton.style.border = '0px';
    paperButton.style.color = '#f4f4f4';
    metalButton.style.backgroundColor = '#F45E4E';
    metalButton.style.border = '2px solid black';
    metalButton.style.color = 'black';
    var A_TextImportantBottomMap = document.querySelector('.A_TextImportantBottomMap');

    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild);
    }

    class1.textContent = 'Утилизация металла';
    class2.textContent = "\u041C\u0435\u0442\u0430\u043B\u043B\u044B \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0446\u0435\u043D\u043D\u044B\u043C\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B \u0438\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E, \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B\xA0\u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u043C\u0438 \u043D\u0430\xA0\u0441\u0432\u0430\u043B\u043A\u0443 \u0438\xA0\u0437\u0430\u0433\u0440\u044F\u0437\u043D\u044F\u0442\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443. \u0423\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438\xA0\u0440\u0435\u0441\u0443\u0440\u0441\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F\xA0\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0435\u0442\u0430\u043B\u043B\u0430. \u0412\xA0\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 \u043F\u0430\u0440\u043D\u0438\u043A\u043E\u0432\u044B\u0445 \u0433\u0430\u0437\u043E\u0432 \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0440\u0435\u0434\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u043E \u0432\u043B\u0438\u044F\u0442\u044C \u043D\u0430\xA0\u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443.";
  });
  clothesButton.addEventListener('click', function () {
    hideMarkers('glass');
    hideMarkers('plastic');
    hideMarkers('paper');
    hideMarkers('metal');
    showMarkers('clothes');
    glassButton.style.backgroundColor = 'black';
    glassButton.style.border = '0px';
    glassButton.style.color = '#f4f4f4';
    plasticButton.style.backgroundColor = 'black';
    plasticButton.style.border = '0px';
    plasticButton.style.color = '#f4f4f4';
    clothesButton.style.backgroundColor = '#ECE700';
    clothesButton.style.border = '2px solid black';
    clothesButton.style.color = 'black';
    paperButton.style.backgroundColor = 'black';
    paperButton.style.border = '0px';
    paperButton.style.color = '#f4f4f4';
    metalButton.style.backgroundColor = 'black';
    metalButton.style.border = '0px';
    metalButton.style.color = '#f4f4f4';
    var A_TextImportantBottomMap = document.querySelector('.A_TextImportantBottomMap');

    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild);
    }

    class1.textContent = 'Утилизация одежды';
    class2.textContent = "\u0423\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0434\u0435\u0436\u0434\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u0430\u0436\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u043E\u0439, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430\xA0\u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443. \u041A\u0430\u0436\u0434\u044B\u0439 \u0433\u043E\u0434 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u044B \u0442\u043E\u043D\u043D \u043E\u0434\u0435\u0436\u0434\u044B \u0432\u044B\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430\xA0\u0441\u0432\u0430\u043B\u043A\u0438, \u0433\u0434\u0435 \u043E\u043D\u0438 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u043D\u0430\xA0\u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u043C\u043D\u043E\u0433\u0438\u0445 \u043B\u0435\u0442, \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u044F\u044F \u0437\u0435\u043C\u043B\u044E, \u0432\u043E\u0434\u0443 \u0438\xA0\u0432\u043E\u0437\u0434\u0443\u0445. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043E\u0434\u0435\u0436\u0434\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\xA0\u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B \u0438\xA0\u0432\xA0\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C \u0438\u0442\u043E\u0433\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u043C\u0438\u043A\u0440\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u043C, \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C \u0432\xA0\u043E\u043A\u0435\u0430\u043D\u044B \u0438\xA0\u0443\u0433\u0440\u043E\u0436\u0430\u044E\u0449\u0438\u043C \u0436\u0438\u0437\u043D\u0438 \u043C\u043E\u0440\u0441\u043A\u0438\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445.";
  }); // работа со станциями метро в мск

  var stationInput = document.getElementById('input');
  var stationButton = document.querySelector('.A_MapPageFindButton');
  stationButton.addEventListener('click', function () {
    var stationName = stationInput.value;

    if (stationName) {
      fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(stationName) + '.json?access_token=' + mapboxgl.accessToken).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.features.length > 0) {
          var feature = data.features[0];
          var coordinates = feature.geometry.coordinates;
          map.flyTo({
            center: coordinates,
            zoom: 14
          });
        } else {
          alert('Станция метро не найдена!');
        }
      });
    }
  });
});

/***/ }),

/***/ 829:
/***/ (() => {

var clothesRecyclingPlaces = [{
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, пр. Маршала Жукова 1с.1',
  coordinates: [37.506523, 55.7751],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, Красногорск, Новорижское шоссе 1',
  coordinates: [37.279968, 55.799917],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, Нижняя сыромятническая, 10с7',
  coordinates: [37.668651, 55.752176],
  description: 'Одежда'
}, {
  name: 'Пункт сбора фонда ВТОРОЕ ДЫХАНИЕ, Charity shop, 1-й Боткинский',
  coordinates: [37.557259, 55.784931],
  description: 'Одежда'
}, {
  name: 'Пункт сбора фонда ВТОРОЕ ДЫХАНИЕ, Charity shop, Новокузнецкая улица',
  coordinates: [37.630104, 55.74033],
  description: 'Одежда'
}, {
  name: 'Пункт сбора фонда ВТОРОЕ ДЫХАНИЕ, Charity shop, ул. Садовая-Спасская',
  coordinates: [37.641629, 55.770552],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, пр.Мира 40',
  coordinates: [37.633634, 55.780122],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. Правды, 8к7',
  coordinates: [37.579601, 55.785129],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. Авиаконструктора Миля',
  coordinates: [37.850766, 55.688527],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. 7-я Парковая, 15к2',
  coordinates: [37.791513, 55.797721],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. Поварская, 8/1к1',
  coordinates: [37.598519, 55.754177],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. Балтийская, 4',
  coordinates: [37.512856, 55.807445],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. Малая Пироговская, 8',
  coordinates: [37.570537, 55.729676],
  description: 'Одежда'
}, {
  name: 'Пункт приема, Novaya Riga Outlet Village,Центральная ул., 33, д. Покровское',
  coordinates: [37.023633, 55.811801],
  description: 'Одежда'
}, {
  name: 'Пункт приема, Outlet Village Белая Дача,Новорязанское ш., 8, стр. 2',
  coordinates: [37.879072, 55.661191],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, ул. Щукинская, 2',
  coordinates: [37.481936, 55.809641],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, Большой Гнездниковский пер., 3',
  coordinates: [37.604592, 55.76172],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда ВТОРОЕ ДЫХАНИЕ, Измайловский проезд, 5',
  coordinates: [37.772855, 55.793085],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Александры Монаховой, 88 к3',
  coordinates: [37.48428, 55.543949],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Большая Филевская, 16',
  coordinates: [37.502292, 55.749674],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Дубнинская, 37к1',
  coordinates: [37.562542, 55.866505],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Лукинская, 8',
  coordinates: [37.343398, 55.650378],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, мкр Северное Чертаново, 2',
  coordinates: [37.587048, 55.634542],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Суздальская, 10к3',
  coordinates: [37.8502, 55.737142],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Коктебельская, 2к1',
  coordinates: [37.588242, 55.567331],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Рублевское шоссе, 22к1',
  coordinates: [37.427848, 55.743193],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Севанская, 13к1 стр.2',
  coordinates: [37.655266, 55.622782],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Маршала Василевского, 13к1',
  coordinates: [37.466566, 55.806616],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Профсоюзная, 109, пав. 255',
  coordinates: [37.521569, 55.633013],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Межнинского, 36, пав. 16',
  coordinates: [37.663216, 55.87045],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Алтуфьевское шоссе, 80',
  coordinates: [37.588197, 55.894364],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Балаклавский пр-кт, 5',
  coordinates: [37.610476, 55.640391],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, 2-й Кабельный проезд, 1',
  coordinates: [37.716288, 55.747763],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, пр-кт Вернадского, 39',
  coordinates: [37.506038, 55.67559],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Савиннское шоссе, 7Б',
  coordinates: [38.011475, 55.745995],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Воронежская, 36к1',
  coordinates: [37.740354, 55.610372],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Лучников пер., 4 стр.2, офис 16',
  coordinates: [37.631802, 55.758397],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Боровское шоссе, 27',
  coordinates: [37.36575, 55.644765],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, 2-я Вольская, 22к1',
  coordinates: [37.922865, 55.685944],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Шаболовка, 34стр2',
  coordinates: [37.607017, 55.717888],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Декабристов, 27',
  coordinates: [37.609488, 55.863151],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Пролетарский пр-кт, 20к2',
  coordinates: [37.657898, 55.633312],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Череповецкая, 24',
  coordinates: [37.584829, 55.897276],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Профсоюзная, 3',
  coordinates: [37.572396, 55.685731],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Пятницкое шоссе, 14',
  coordinates: [37.386175, 55.841635],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Ярославская, 21',
  coordinates: [37.650064, 55.824106],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Мартеновская, 16/36',
  coordinates: [37.802607, 55.753007],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Красная Пресня, 28стр2',
  coordinates: [37.56874, 55.762581],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Самаркандский б-р, квартал 137А, к4',
  coordinates: [37.821005, 55.701019],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Комсомольский пр-кт, 30',
  coordinates: [37.578487, 55.725225],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Большая Марфинская, 4к3',
  coordinates: [37.59533, 55.827414],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Михневская, 8',
  coordinates: [37.671094, 55.579694],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Удальцова, 89к3',
  coordinates: [37.483984, 55.686183],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. 800 летия Москвы, 22к1',
  coordinates: [37.555894, 55.879485],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Ангарская, 26к1',
  coordinates: [37.520788, 55.876859],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Вильнюсская, 8к2',
  coordinates: [37.518839, 55.603776],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Вильнюсская, 8к2',
  coordinates: [37.518839, 55.603776],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Зеленый пр-кт, 24',
  coordinates: [37.789923, 55.750489],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Буденного пр-кт, 18Б',
  coordinates: [37.729008, 55.767392],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Бауманская, 43/1стр.1',
  coordinates: [37.679646, 55.770107],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Рожденственская, 16',
  coordinates: [37.919909, 55.703261],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Академика Анохина, 60',
  coordinates: [37.468802, 55.649048],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Профсоюзная, 32к1',
  coordinates: [37.56026, 55.676707],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Новокосинская, 8к1',
  coordinates: [37.855437, 55.733087],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Ярцевская, 4',
  coordinates: [37.408525, 55.735307],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Брянская, 2',
  coordinates: [37.563853, 55.744389],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Кировоградская, 22г',
  coordinates: [37.604358, 55.614744],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Мячковский б-р, 3',
  coordinates: [37.752975, 55.658129],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Олимпийская деревня, 4к2',
  coordinates: [37.469108, 55.675473],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, Алтуфьевское шоссе, 40Д',
  coordinates: [37.591153, 55.87096],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Летчика Бабушкина, 39',
  coordinates: [37.676259, 55.875157],
  description: 'Одежда'
}, {
  name: 'Пункт приема PickPoint, ул. Маршала Катукова, 3',
  coordinates: [37.397674, 55.813774],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, ул. 1-я Тверская-Ямская, 26',
  coordinates: [37.589015, 55.774462],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, ул. Мясницкая, 24/7стр.1',
  coordinates: [37.635566, 55.762429],
  description: 'Одежда'
}, {
  name: 'Пункт приема, Чистопрудный б., 16',
  coordinates: [37.644836, 55.759507],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, VEGAS Каширское ТРЦ',
  coordinates: [37.723202, 55.585051],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, VEGAS Крокус Сити',
  coordinates: [37.388148, 55.820766],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Ленинградский пр., 39с79',
  coordinates: [37.537847, 55.796931],
  description: 'Одежда'
}, {
  name: 'Пункт приема, Vnukovo Outlet Village',
  coordinates: [37.334361, 55.610241],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, ул. Угличская, 13с1',
  coordinates: [37.567464, 55.901834],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, ул. Фитаревская, 14к1',
  coordinates: [37.481594, 55.567687],
  description: 'Одежда'
}, {
  name: 'Пункт приема, ул. Ходынский бульвар, 4',
  coordinates: [37.531289, 55.790231],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Чонгарский б-р, 7',
  coordinates: [37.612389, 55.651384],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Гиляровского, 39',
  coordinates: [37.632116, 55.783544],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Мичуринский пр., 7к1',
  coordinates: [37.512245, 55.701719],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Нижний Сусальный пер., 5с10',
  coordinates: [37.664384, 55.760661],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Земляной Вал, 33',
  coordinates: [37.659173, 55.757339],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Пресненская набережная, 2',
  coordinates: [37.539742, 55.749162],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, ул. Декабристов, 17',
  coordinates: [37.604987, 55.864879],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Потаповская роща, 24к1',
  coordinates: [37.508185, 55.55114],
  description: 'Одежда'
}, {
  name: 'Контейнер фонда Второе Дыхание, Пулковская улица, 3к1',
  coordinates: [37.508185, 55.55114],
  description: 'Одежда'
}];

/***/ }),

/***/ 878:
/***/ (() => {

var glassRecyclingPlaces = [{
  name: 'Москва, Мосфильмовская улица, 80А',
  coordinates: [37.499812, 55.707162],
  description: 'Стекло'
}, {
  name: 'Москва, Мичуринский проспект, 9к2',
  coordinates: [37.509002, 55.701506],
  description: 'Стекло'
}, {
  name: 'Москва, Мичуринский проспект, 19к1',
  coordinates: [37.505283, 55.69798],
  description: 'Стекло'
}, {
  name: 'Москва, Мичуринский проспект, 25к2',
  coordinates: [37.504564, 55.696316],
  description: 'Стекло'
}, {
  name: 'Москва, Ленинский проспект, 30',
  coordinates: [37.58385, 55.710641],
  description: 'Стекло'
}, {
  name: 'Москва, улица Вавилова, 2',
  coordinates: [37.591943, 55.709637],
  description: 'Стекло'
}, {
  name: 'Москва, Расторгуевский переулок, 16с1',
  coordinates: [37.565156, 55.765959],
  description: 'Стекло'
}, {
  name: 'Москва, улица Хамовнический Вал',
  coordinates: [37.563045, 55.720727],
  description: 'Стекло'
}, {
  name: 'Москва, улица Дурова, 3/13',
  coordinates: [37.62064201324459, 55.78080415402429],
  description: 'Стекло'
}, {
  name: 'Москва, парк Красногвардейские пруды',
  coordinates: [37.545087, 55.760996],
  description: 'Стекло'
}, {
  name: 'Гомель, Фестивальный парк',
  coordinates: [30.943117, 52.408814],
  description: 'Стекло'
}, {
  name: 'Москва, Кутузовский проспект, 16',
  coordinates: [37.553576, 55.747282],
  description: 'Стекло'
}, {
  name: 'Гомель, Фестивальный парк',
  coordinates: [30.943117, 52.408814],
  description: 'Стекло'
}, {
  name: 'Бережковская наб., 22 (у Роскосмоса)',
  coordinates: [37.455753, 55.723431],
  description: 'Стекло'
}, {
  name: 'Cквер за «Mc Donals’s» по ул. Б. Дорогомиловская',
  coordinates: [37.550357, 55.747111],
  description: 'Стекло'
}, {
  name: 'Пруд у Красных Зорь, д. 47',
  coordinates: [37.7635, 55.8707],
  description: 'Стекло'
}, {
  name: 'Парк Сквер рядом с ул. Кастанаевская, д.51к3',
  coordinates: [37.6757, 55.7316],
  description: 'Стекло'
}, {
  name: 'Парк Ж/д станция Очаково',
  coordinates: [37.4079, 55.6535],
  description: 'Стекло'
}, {
  name: 'Парк Большой Очаковский пруд',
  coordinates: [37.4116, 55.6473],
  description: 'Стекло'
}, {
  name: 'ТПУ метро Озерная, напротив выхода №2',
  coordinates: [37.4337, 55.6251],
  description: 'Стекло'
}, {
  name: 'ТПУ метро Озерная, напротив выхода №3',
  coordinates: [37.4335, 55.6245],
  description: 'Стекло'
}, {
  name: 'ТПУ метро Озерная, напротив выхода №4',
  coordinates: [37.434, 55.6241],
  description: 'Стекло'
}, {
  name: 'Парк Парк Удальцовские пруды',
  coordinates: [37.4951, 55.7215],
  description: 'Стекло'
}, {
  name: 'Парк Пруды на проспекте Вернадского (пр. Вернадского, д.59)',
  coordinates: [37.4979, 55.6769],
  description: 'Стекло'
}, {
  name: 'Парк Новопеределкино, парк около ул. Лукинская, д.14к1 и д.18к1, две площадки',
  coordinates: [37.3588, 55.6241],
  description: 'Стекло'
}, {
  name: 'Парк Новопеределкино, у дома по ул. Новопеределкинская, д. 14',
  coordinates: [37.3573, 55.6241],
  description: 'Стекло'
}, {
  name: 'Екатерининский сквер',
  coordinates: [30.326614, 59.93992],
  description: 'Стекло'
}, {
  name: 'Красная Пресня (основная)',
  coordinates: [37.558834, 55.774967],
  description: 'Стекло'
}, {
  name: 'Красногвардейские пруды',
  coordinates: [37.792711, 55.82121],
  description: 'Стекло'
}, {
  name: 'Сквер Девичье поле',
  coordinates: [37.577764, 55.761425],
  description: 'Стекло'
}, {
  name: 'Сквер у Калитниковского пруда',
  coordinates: [37.651715, 55.725357],
  description: 'Стекло'
}, {
  name: 'Парк «Фестивальный»',
  coordinates: [37.494865, 55.855023],
  description: 'Стекло'
}, {
  name: 'Сквер у Крымской эстакады',
  coordinates: [37.606139, 55.733073],
  description: 'Стекло'
}, {
  name: 'Репинский сквер, Болотная площадь',
  coordinates: [37.616334, 55.742525],
  description: 'Стекло'
}, {
  name: 'Рублевский сквер',
  coordinates: [37.406287, 55.754673],
  description: 'Стекло'
}, {
  name: 'Расторгуевский переулок, 16с1',
  coordinates: [37.558834, 55.774967],
  description: 'Стекло'
}, {
  name: 'Парк Бережковская наб., 22 (у Роскосмоса)',
  coordinates: [37.5169, 55.7403],
  description: 'Стекло'
}, {
  name: 'Парк Cквер за "Мак Доналс" по ул. Б. Дорогомиловская',
  coordinates: [37.5609, 55.7476],
  description: 'Стекло'
}, {
  name: 'Парк Пешеходная зона по ул. М. Дорогомиловская',
  coordinates: [37.5629, 55.7489],
  description: 'Стекло'
}, {
  name: 'Парк Кутузовский пр., 16',
  coordinates: [37.4778, 55.7391],
  description: 'Стекло'
}, {
  name: 'ТПУ Сквер у дома по ул. Удальцова, 85А',
  coordinates: [37.4661, 55.7143],
  description: 'Стекло'
}, {
  name: 'Парк Парк у префектуры, включая зеленые территории, по ул. И. Франко',
  coordinates: [37.5262, 55.7472],
  description: 'Стекло'
}, {
  name: 'Парк ул. Василия Ботылева, д.45 (церковь)',
  coordinates: [37.5034, 55.6924],
  description: 'Стекло'
}, {
  name: 'Парк Пешеходная зона, обнаруженная к Можайскому пруду (Беловежский пруд)',
  coordinates: [37.4636, 55.7475],
  description: 'Стекло'
}, {
  name: 'Парк Пруд у Красных Зорь, д. 47',
  coordinates: [37.4202, 55.7389],
  description: 'Стекло'
}, {
  name: 'Парк Сквер рядом с ул. Кастанаевская, д.51к3',
  coordinates: [37.6087, 55.7296],
  description: 'Стекло'
}, {
  name: 'Парк Ж/д станция Очаково',
  coordinates: [37.4093, 55.6843],
  description: 'Стекло'
}, {
  name: 'Парк Большой Очаковский пруд',
  coordinates: [37.3999, 55.6699],
  description: 'Стекло'
}, {
  name: 'ТПУ метро Озерная, напротив выхода №2',
  coordinates: [37.4357, 55.6226],
  description: 'Стекло'
}, {
  name: 'ТПУ метро Озерная, напротив выхода №3',
  coordinates: [37.436703, 55.684152],
  description: 'Стекло'
}, {
  name: 'ТПУ метро Озерная, напротив выхода №4',
  coordinates: [37.435995, 55.683813],
  description: 'Стекло'
}, {
  name: 'Парк Удальцовские пруды',
  coordinates: [37.454737, 55.697717],
  description: 'Стекло'
}, {
  name: 'Пруды на проспекте Вернадского (пр. Вернадского, д.59)',
  coordinates: [37.499914, 55.673651],
  description: 'Стекло'
}, {
  name: 'Новопеределкино, парк около ул. Лукинская, д.14к1 и д.18к1, две площадки',
  coordinates: [37.370463, 55.638111],
  description: 'Стекло'
}, {
  name: 'Новопеределкино, у дома по ул. Новопеределкинская, д. 14',
  coordinates: [37.366634, 55.642767],
  description: 'Стекло'
}, {
  name: 'Парк Центральный: спуск к Большому Солнцевскому пруду, у остановки',
  coordinates: [37.420811, 55.792029],
  description: 'Стекло'
}, {
  name: 'Озеро «Мещерское»',
  coordinates: [37.444526, 55.610852],
  description: 'Стекло'
}, {
  name: 'у Большого Солнцевского пруда по ул. Попутная',
  coordinates: [37.414408, 55.804394],
  description: 'Стекло'
}, {
  name: 'Парк Олимпийской Деревни (у входа в парк)',
  coordinates: [37.538392, 55.737594],
  description: 'Стекло'
}, {
  name: 'Парк «Никулино», сквер у Генштаба',
  coordinates: [37.426218, 55.667244],
  description: 'Стекло'
}, {
  name: 'Пересечение ул. Минская и ул. Олеко Дундича',
  coordinates: [37.544262, 55.735245],
  description: 'Стекло'
}, {
  name: 'Парковая зона вдоль линии метро от ст. м. Пионерская до ст. м. Филевский парк.',
  coordinates: [37.483, 55.736],
  description: 'Стекло'
}, {
  name: 'Сквер на ул. Кременчугской',
  coordinates: [37.56, 55.733],
  description: 'Стекло'
}, {
  name: 'Университетская площадь, Воробьевы горы',
  coordinates: [37.532, 55.702],
  description: 'Стекло'
}, {
  name: 'Рассказовская ул,, ориентир д.20, лесопарк',
  coordinates: [37.324, 55.638],
  description: 'Стекло'
}, {
  name: 'Парк Озерная аллея дом 10',
  coordinates: [37.681623, 55.701016],
  description: 'Стекло'
}, {
  name: 'Площадь Юности',
  coordinates: [37.543011, 55.858086],
  description: 'Стекло'
}, {
  name: 'Зеленоград, район Матушкино, 1 мкр., зона отдыха пруд Быково болото',
  coordinates: [37.166491, 55.994745],
  description: 'Стекло'
}, {
  name: 'Зеленоград, район Старое Крюково, пешеходная зона в 8-м микрорайоне',
  coordinates: [37.145782, 55.978745],
  description: 'Стекло'
}, {
  name: 'Парк Дубовой рощи «Маяк»',
  coordinates: [37.607251, 55.663184],
  description: 'Стекло'
}, {
  name: 'Парк Салют',
  coordinates: [37.580255, 55.677932],
  description: 'Стекло'
}, {
  name: 'Парк «Захарково»',
  coordinates: [37.846512, 55.611791],
  description: 'Стекло'
}, {
  name: 'Сквер Кленовый',
  coordinates: [37.569251, 55.880113],
  description: 'Стекло'
}, {
  name: 'Плодовый сад по Неманскому проезду',
  coordinates: [37.534383, 55.749393],
  description: 'Стекло'
}, {
  name: 'Парк «Северное Тушино»',
  coordinates: [37.437292, 55.870979],
  description: 'Стекло'
}, {
  name: 'Сквер Соколинная гора',
  coordinates: [37.484348, 55.780445],
  description: 'Стекло'
}, {
  name: 'Сквер Соколинная гора',
  coordinates: [37.479367, 55.779354],
  description: 'Стекло'
}, {
  name: 'Бульвар генерала Карбышева 21/37',
  coordinates: [37.499919, 55.7763],
  description: 'Стекло'
}, {
  name: 'Бульвар генерала Карбышева д.2',
  coordinates: [37.501455, 55.774031],
  description: 'Стекло'
}, {
  name: 'Парк Ул. Митинская, 36',
  coordinates: [37.363, 55.857],
  description: 'Стекло'
}, {
  name: 'Парк Ул. Митинская, 48',
  coordinates: [37.365, 55.858],
  description: 'Стекло'
}, {
  name: 'Парк Пятницкое ш., 34с1',
  coordinates: [37.357, 55.849],
  description: 'Стекло'
}, {
  name: 'Парк Сквер по ул. Кулакова д.8',
  coordinates: [37.423, 55.793],
  description: 'Стекло'
}, {
  name: 'Парк Сквер по ул. Кулакова (Исаковского д.6 к 2)',
  coordinates: [37.425, 55.796],
  description: 'Стекло'
}, {
  name: 'Парк Сквер Таллинский (Таллинская 8)',
  coordinates: [37.431, 55.828],
  description: 'Стекло'
}, {
  name: 'Парк парк долины реки Химка (Большая набережная 1)',
  coordinates: [37.451, 55.896],
  description: 'Стекло'
}, {
  name: 'ТПУ Волоколамская (метро)',
  coordinates: [37.382, 55.835],
  description: 'Стекло'
}, {
  name: 'ТПУ Строгино (метро)',
  coordinates: [37.402, 55.803],
  description: 'Стекло'
}, {
  name: 'ТПУ Сходненская (метро)',
  coordinates: [37.439, 55.855],
  description: 'Стекло'
}, {
  name: 'ТПУ Тушинская (метро, платформа) (Стратонавтов, д.5Г)',
  coordinates: [37.436, 55.827],
  description: 'Стекло'
}, {
  name: 'ТПУ Пятницкое ш. (метро)',
  coordinates: [37.353, 55.854],
  description: 'Стекло'
}, {
  name: 'Пойма реки Яузы в районе Свиблово Лазоревый, 12',
  coordinates: [37.635186, 55.868093],
  description: 'Стекло'
}, {
  name: 'Пойма реки Яузы в районе Свиблово, Лазоревый, 20',
  coordinates: [37.633096, 55.870194],
  description: 'Стекло'
}, {
  name: 'ВДНХ (метро)',
  coordinates: [37.640722, 55.821146],
  description: 'Стекло'
}, {
  name: 'ТПУ Останкино',
  coordinates: [37.614058, 55.811681],
  description: 'Стекло'
}, {
  name: 'Академика Королева 10 (заезд с ул. Валентины Леонтьевой)',
  coordinates: [37.621511, 55.826263],
  description: 'Стекло'
}, {
  name: 'Пр-т Мира 109 (киноконцертный зал Космос)',
  coordinates: [37.632145, 55.799347],
  description: 'Стекло'
}, {
  name: 'Парк спорта «Яуза» (Докукина 11с2)',
  coordinates: [37.730605, 55.788389],
  description: 'Стекло'
}, {
  name: 'Парк спорта «Яуза» (пр-т Мира 161)',
  coordinates: [37.635539, 55.817048],
  description: 'Стекло'
}, {
  name: 'ТПУ Ростокино (Бажова 26)',
  coordinates: [37.666531, 55.840936],
  description: 'Стекло'
}, {
  name: 'Парк «Сад Будущего» (1-я ул.Леонова, 1с1, рядом с церковью)',
  coordinates: [37.501202, 55.859843],
  description: 'Стекло'
}, {
  name: 'Хачатуряна, 1Б',
  coordinates: [37.558208, 55.859786],
  description: 'Стекло'
}, {
  name: 'Северный бульвар, д. 6',
  coordinates: [37.574826, 55.898162],
  description: 'Стекло'
}, {
  name: 'Пойма реки Яузы, Сельскохозяйственная, 64 стр.10',
  coordinates: [37.725712, 55.739237],
  description: 'Стекло'
}, {
  name: 'Пойма реки Яуза в районе Свиблово Лазоревый, 12',
  coordinates: [37.6593, 55.8637],
  description: 'Стекло'
}, {
  name: 'Сквер Тенистый пр-д 2к1',
  coordinates: [37.6529, 55.8702],
  description: 'Стекло'
}, {
  name: 'Сквер Тенистый пр-д у стадиона "Свиблово"',
  coordinates: [37.6623, 55.8649],
  description: 'Стекло'
}, {
  name: 'Свиблово',
  coordinates: [37.6525, 55.8565],
  description: 'Стекло'
}, {
  name: 'Сквер 2-й Стрелецкий пр-д',
  coordinates: [37.7206, 55.7879],
  description: 'Стекло'
}, {
  name: 'Стрелецкая ул. 9А',
  coordinates: [37.7181, 55.7887],
  description: 'Стекло'
}, {
  name: 'Алтуфьево (метро)',
  coordinates: [37.5878, 55.8981],
  description: 'Стекло'
}, {
  name: 'Владыкино (метро, МЦК)',
  coordinates: [37.5892, 55.8491],
  description: 'Стекло'
}, {
  name: 'Бабушкинская',
  coordinates: [37.6658, 55.8676],
  description: 'Стекло'
}, {
  name: 'Свиблово',
  coordinates: [37.6525, 55.8565],
  description: 'Стекло'
}, {
  name: 'Гончаровский парк (Яблочкова 1)',
  coordinates: [37.5794, 55.8577],
  description: 'Стекло'
}, {
  name: 'Долина реки Яуза Осташковская 23',
  coordinates: [37.7258, 55.7917],
  description: 'Стекло'
}, {
  name: 'Пр-д Шокальского 31к1',
  coordinates: [37.7298, 55.7859],
  description: 'Стекло'
}, {
  name: 'Озелененная территория по Палехской ул. от ул. Дудинка до Малыгинского проезда',
  coordinates: [37.5785, 55.8805],
  description: 'Стекло'
}, {
  name: 'Парк Бескудниковский бульвар 6к3',
  coordinates: [37.51238, 55.84515],
  description: 'Стекло'
}, {
  name: 'Парк Бескудниковский бульвар 33с2',
  coordinates: [37.50933, 55.84375],
  description: 'Стекло'
}, {
  name: 'Парк им. Святослава Федорова (ТПУ Селигерская)',
  coordinates: [37.56531, 55.86073],
  description: 'Стекло'
}, {
  name: 'Парк Воровского (4-й Новоподмосковный пер.)',
  coordinates: [37.51752, 55.84857],
  description: 'Стекло'
}, {
  name: 'Пешеходная зона по ул. Адмирала Макарова (ТПУ Водный стадион)',
  coordinates: [37.49117, 55.85527],
  description: 'Стекло'
}, {
  name: 'Войковская (метро, платформа)',
  coordinates: [37.49668, 55.81967],
  description: 'Стекло'
}, {
  name: 'Парк Северные дубки',
  coordinates: [37.54972, 55.87297],
  description: 'Стекло'
}, {
  name: 'Платформа Дегунино (ул. Дубнинская, 12бс 1)',
  coordinates: [37.55269, 55.88217],
  description: 'Стекло'
}, {
  name: 'Усадьба «Михалково» (Кронштадтский, 30Б)',
  coordinates: [37.44991, 55.84843],
  description: 'Стекло'
}, {
  name: 'Усадьба «Михалково» (Нарвская, 18)',
  coordinates: [37.48525, 55.86835],
  description: 'Стекло'
}, {
  name: 'Устройство пешеходной зоны, велодорожки, зона отдыха - наб. р. Лихоборки',
  coordinates: [37.56336, 55.88271],
  description: 'Стекло'
}, {
  name: 'Набережная Лихобороки',
  coordinates: [37.5511, 55.8443],
  description: 'Стекло'
}, {
  name: 'Парк на Кронштадтском бульваре',
  coordinates: [37.4876, 55.8641],
  description: 'Стекло'
}, {
  name: 'Сквер по Базовской ул.',
  coordinates: [37.5487, 55.8631],
  description: 'Стекло'
}, {
  name: 'Сквер по Базовской ул.',
  coordinates: [37.5489, 55.8631],
  description: 'Стекло'
}, {
  name: 'Сквер по Базовской ул.',
  coordinates: [37.5495, 55.8627],
  description: 'Стекло'
}, {
  name: 'Дегунинский пруд',
  coordinates: [37.5533, 55.8783],
  description: 'Стекло'
}, {
  name: 'Зона отдыха «Левобережный»',
  coordinates: [37.5509, 55.8456],
  description: 'Стекло'
}, {
  name: 'Сквер у кинотеатра «Нева»',
  coordinates: [37.5404, 55.8544],
  description: 'Стекло'
}, {
  name: 'Парк на Ангарской улице',
  coordinates: [37.5524, 55.8491],
  description: 'Стекло'
}, {
  name: 'Парк на Ангарской улице',
  coordinates: [37.5491, 55.8527],
  description: 'Стекло'
}, {
  name: 'Парк Вагоноремонт',
  coordinates: [37.5566, 55.8442],
  description: 'Стекло'
}, {
  name: 'Парк Вагоноремонт',
  coordinates: [37.5553, 55.8443],
  description: 'Стекло'
}, {
  name: 'Хлебниковский лесопарк',
  coordinates: [37.5075, 55.8913],
  description: 'Стекло'
}, {
  name: 'Карельский бульвар, 22, "Аллея Славы"',
  coordinates: [37.5546, 55.8598],
  description: 'Стекло'
}, {
  name: 'Мемориальный парк героев Погибель Мировой войны (Песчаная 12)',
  coordinates: [37.5332, 55.7958],
  description: 'Стекло'
}, {
  name: 'Мемориальный парк героев погибшей Мировой войны (Новопесчаная 12)',
  coordinates: [37.5316, 55.7955],
  description: 'Стекло'
}, {
  name: 'Усадьба «Грачевка» (Зеленоградская, 18А) ТПУ Ховрино',
  coordinates: [37.5149, 55.8715],
  description: 'Стекло'
}, {
  name: 'ВЭБ Арена',
  coordinates: [37.5623, 55.7363],
  description: 'Стекло'
}, {
  name: 'ул. Острякова, д.9',
  coordinates: [37.5663, 55.8076],
  description: 'Стекло'
}, {
  name: 'метро Аэропорт',
  coordinates: [37.5332, 55.8001],
  description: 'Стекло'
}, {
  name: 'Хорошевское ш., д.35А, стр.1',
  coordinates: [37.5318, 55.7989],
  description: 'Стекло'
}, {
  name: 'Парк «Березовая роща»',
  coordinates: [37.7444, 55.6236],
  description: 'Стекло'
}, {
  name: 'Парк «Гольяново»',
  coordinates: [37.821508, 55.824996],
  description: 'Стекло'
}, {
  name: 'Семеновский парк',
  coordinates: [37.720175, 55.789072],
  description: 'Стекло'
}, {
  name: 'Зона Серебряно-Виноградных прудов',
  coordinates: [37.850189, 55.794152],
  description: 'Стекло'
}, {
  name: 'Лесопарк Ивановский',
  coordinates: [37.846478, 55.838463],
  description: 'Стекло'
}, {
  name: 'Челябинская 15',
  coordinates: [37.829583, 55.752729],
  description: 'Стекло'
}, {
  name: 'Центр дополнительного образования детей "Черкизовский парк"',
  coordinates: [37.748578, 55.804678],
  description: 'Стекло'
}, {
  name: 'Благоустройство территории, охраняемой к пруду по ул. Суздальская',
  coordinates: [37.8678, 55.74389],
  description: 'Стекло'
}, {
  name: 'Сквер Афганцев (Зеленый проспект, д. 26)',
  coordinates: [37.819067, 55.820482],
  description: 'Стекло'
}, {
  name: 'Парк «Южный»',
  coordinates: [37.810141, 55.597293],
  description: 'Стекло'
}, {
  name: 'Сиреневый бульвар 1 к.5',
  coordinates: [37.729013, 55.610861],
  description: 'Стекло'
}, {
  name: 'ТПУ Перово ЖД Кусковская ул., 2 с 1',
  coordinates: [37.7716, 55.751602],
  description: 'Стекло'
}, {
  name: 'Маршала Рокоссовского, 31',
  coordinates: [37.750197, 55.817077],
  description: 'Стекло'
}, {
  наименование: 'Пешеходная зона Измайловского проспекта от 5-ой до 15-ой Парковой ул.; м. Первомайская, выход 4, Измайловский пр-д, 75 к1',
  coordinates: [37.803203, 55.796536],
  description: 'Стекло'
}, {
  наименование: 'ТПУ Перово (2-я Владимирская д.41к1, д.45)',
  coordinates: [37.790188, 55.751212],
  description: 'Стекло'
}, {
  name: 'Лухмановский парк (Лухмановская ул., 29)',
  coordinates: [37.761954, 55.818788],
  description: 'Стекло'
}, {
  name: 'ТПУ Семеновская выход 1',
  coordinates: [37.718456, 55.783067],
  description: 'Стекло'
}, {
  name: 'Новогиреево (метро) (Зеленый проспект д. 60/35)',
  coordinates: [37.815325, 55.751705],
  description: 'Стекло'
}, {
  name: 'Новогиреево (платформа) (ул. Фрязевская д.1 стр.1)',
  coordinates: [37.817676, 55.744388],
  description: 'Стекло'
}, {
  name: 'Черкизовская (метро, МЦК) выход №1',
  coordinates: [37.744811, 55.803754],
  description: 'Стекло'
}, {
  name: 'Щелковская (метро) (Щелковское ш., вл.75)',
  coordinates: [37.798753, 55.809863],
  description: 'Стекло'
}, {
  name: 'ТПУ Партизанская',
  coordinates: [37.751074, 55.784088],
  description: 'Стекло'
}, {
  name: 'Снайперская ул., 9А',
  coordinates: [37.741658, 55.713245],
  description: 'Стекло'
}, {
  name: 'Вешняковская ул., 17А',
  coordinates: [37.820498, 55.731695],
  description: 'Стекло'
}, {
  name: 'Парк им. Артема Боровика',
  coordinates: [37.678802, 55.750862],
  description: 'Стекло'
}, {
  name: 'Парк 850-летия Москвы, Марьинский парк д.4',
  coordinates: [37.598019, 55.776732],
  description: 'Стекло'
}, {
  name: 'Парк «Дюссельдорфский»; Перервинский бульвар, 13 с1',
  coordinates: [37.606628, 55.791505],
  description: 'Стекло'
}, {
  name: 'Сквер по ул Полетаева д.11 ул. Федора Полетаева д.13',
  coordinates: [37.79902, 55.727935],
  description: 'Стекло'
}, {
  name: 'ул. Заречье д.5А, ул. Заречье д,7 стр.1',
  coordinates: [37.738405, 55.803985],
  description: 'Стекло'
}, {
  name: 'Сквер по адресу: Нижегородская 106',
  coordinates: [37.668822, 55.730949],
  description: 'Стекло'
}, {
  name: 'Ул Перерва д 12, д 8 с 1',
  coordinates: [37.606998, 55.793346],
  description: 'Стекло'
}, {
  name: 'Сквер у ДК "Люблино" Люблинская ул., 48, Люблинская ул., 44\\8',
  coordinates: [37.674217, 55.676486],
  description: 'Стекло'
}, {
  name: 'ул. Кузьминская (возле Храма, и на пересечении с ул. Юных Ленинцев)',
  coordinates: [37.76799, 55.718203],
  description: 'Стекло'
}, {
  name: 'ул. Тополевая аллея, д. 2 2',
  coordinates: [37.712433, 55.826485],
  description: 'Стекло'
}, {
  name: 'Рынок Садовод (ул. Верхние поля)',
  coordinates: [37.834456, 55.728256],
  description: 'Стекло'
}, {
  name: '1-й Курьяновский проезд 16 Шоссейная ул. 72 за домом у стадиона',
  coordinates: [37.729696, 55.749705],
  description: 'Стекло'
}, {
  name: 'Усадьба Лефортово; Красноказарменная, 1с5',
  coordinates: [37.69893, 55.761352],
  description: 'Стекло'
}, {
  name: 'Парк 850-летия Москвы (3 и 4 очереди); Поречная 31 А, Марьинский парк д. 1 1 ',
  coordinates: [37.687568, 55.730506],
  description: 'Стекло'
}, {
  name: 'Жулебинский бульвар, д.5; Хвалынский бул., 6/10',
  coordinates: [37.855536, 55.73985],
  description: 'Стекло'
}, {
  name: 'Белореченская д.1',
  coordinates: [37.853968, 55.737631],
  description: 'Стекло'
}, {
  name: 'Зона технических видов спорта (Печатники Новый парк)',
  coordinates: [37.721306, 55.68703],
  description: 'Стекло'
}, {
  name: 'Парк 850-летия Москвы Батайский проезд 33, Батайский проезд 37',
  coordinates: [37.68603, 55.728534],
  description: 'Стекло'
}, {
  name: 'Парк «Купеческие угодья» 2-я Вольская улица, 11с6 2-я Вольская улица',
  coordinates: [37.867698, 55.789329],
  description: 'Стекло'
}, {
  name: 'Есенинский бульвар 1/26, Есенинский бульвар 6 к.2',
  coordinates: [37.56367, 55.732078],
  description: 'Стекло'
}, {
  name: 'Парк Люблинское Кладбище',
  coordinates: [37.748008, 55.67028],
  description: 'Стекло'
}, {
  name: 'ТПУ Метро Братиславская (метро, вблизи домов по ул. Перерва д.54, 56/2)',
  coordinates: [55.669245, 37.749271],
  description: 'Стекло'
}, {
  name: 'Парк Шкулёва со стороны м Волжская',
  coordinates: [37.697875, 55.758052],
  description: 'Стекло'
}, {
  name: 'ул. Маршала Чуйкова вл.1-3',
  coordinates: [37.829655, 55.810263],
  description: 'Стекло'
}, {
  name: 'ул. Привольная вл. 40-42; Самаркандский бульвар 137а, корп.1',
  coordinates: [37.746869, 55.792458],
  description: 'Стекло'
}, {
  name: 'МФЦ Мои Документы Капотня',
  coordinates: [37.858579, 55.621109],
  description: 'Стекло'
}, {
  name: 'Вблизи ул 1-й Капотнинский пр. вл. 14',
  coordinates: [37.860196, 55.621863],
  description: 'Стекло'
}, {
  name: 'Сквер по Есенинскому бульвару 11 к 1, ул. Юных Ленинцев д.78-82',
  coordinates: [37.810694, 55.631332],
  description: 'Стекло'
}, {
  name: 'Верхние поля д.2, Верхние поля д.16а',
  coordinates: [37.609173, 55.756189],
  description: 'Стекло'
}, {
  name: 'ул. 1-я Вольская д.11 Сквер за памятником Погибшим солдатам; 1-я Вольская улица, 13к2',
  coordinates: [37.805862, 55.734987],
  description: 'Стекло'
}, {
  name: 'ул. Гурьянова парк "Печатники", Гурьянова 55',
  coordinates: [37.717747, 55.680247],
  description: 'Стекло'
}, {
  name: 'Парк "Печатники"',
  coordinates: [37.720849, 55.683122],
  description: 'Стекло'
}, {
  name: 'Сквер Плющево',
  coordinates: [37.819771, 55.676408],
  description: 'Стекло'
}, {
  name: 'Парк на Крутицком валу',
  coordinates: [37.670325, 55.734187],
  description: 'Стекло'
}, {
  name: 'Парк на ул. Юных Ленинцев, coordinates: [37.849960, 55.609622]',
  description: 'Стекло'
}, {
  name: 'ТПУ Волгоградский проспект',
  coordinates: [37.687624, 55.727295],
  description: 'Стекло'
}, {
  name: 'Люблино (метро) выход 2',
  coordinates: [37.673561, 55.676462],
  description: 'Стекло'
}, {
  name: 'ТПУ Волжская',
  coordinates: [37.684389, 55.692569],
  description: 'Стекло'
}, {
  name: 'ТПУ Марьино',
  coordinates: [37.74916, 55.648221],
  description: 'Стекло'
}, {
  name: 'ТПУ Пролетарская',
  coordinates: [37.648574, 55.731249],
  description: 'Стекло'
}, {
  name: 'ТПУ Перерва',
  coordinates: [37.77887, 55.802005],
  description: 'Стекло'
}, {
  name: 'Дубровка (метро)',
  coordinates: [37.674826, 55.729332],
  description: 'Стекло'
}, {
  name: 'Кожуховская (метро)',
  coordinates: [37.679846, 55.705311],
  description: 'Стекло'
}, {
  name: 'Сквер и площадь у кинотеатра "Высота"',
  coordinates: [37.901753, 55.727899],
  description: 'Стекло'
}, {
  name: 'Текстильщики( метро)',
  coordinates: [37.717903, 55.707597],
  description: 'Стекло'
}, {
  name: 'Текстильщики ТПУ',
  coordinates: [37.720217, 55.708524],
  description: 'Стекло'
}, {
  name: 'Парк мкр. Переделкино Ближнее, ул. Анны Ахматовой, д. 2 22',
  coordinates: [37.431418, 55.636769],
  description: 'Стекло'
}, {
  name: 'ЖД Рассудово Парк',
  coordinates: [37.458877, 55.574223],
  description: 'Стекло'
}, {
  name: 'Д. Марушкино, парк «ручеёк», ГБУ ДО ТЗФ ТИНАО Парк',
  coordinates: [37.184783, 55.744138],
  description: 'Стекло'
}, {
  имя: 'п. Рогово, ул. Спасская (Парк им.В.Корпачёвой) Парк',
  coordinates: [37.388649, 55.608478],
  description: 'Стекло'
}, {
  name: 'поселок Фабрики 1 Мая д.9а Парк',
  coordinates: [37.684714, 55.630581],
  description: 'Стекло'
}, {
  name: 'Коммунарка, ул.Липовый Парк 9 Парк',
  coordinates: [37.356786, 55.577193],
  description: 'Стекло'
}, {
  name: 'Cпортивный парк «Красная Пахра» в поселении Краснопахорское',
  coordinates: [37.060497, 55.542489],
  description: 'Стекло'
}, {
  name: 'Троицк, ул. Солнечная, 1, 9, 6 Парк',
  coordinates: [37.311011, 55.472223],
  description: 'Стекло'
}, {
  name: 'Троицк Октябрьский проспект, 21Б Парк',
  coordinates: [37.301074, 55.487532],
  description: 'Стекло'
}, {
  name: 'Парк м.о. Воскресенское, территория вблизи домов 10, 12, 4а, 6',
  coordinates: [37.323, 55.5883],
  description: 'Стекло'
}, {
  name: 'Парк г. Щербинка, пос. Новомосковский, парк "Барыши"',
  coordinates: [37.5856, 55.5224],
  description: 'Стекло'
}, {
  name: 'Парк Поселения Кленовское, пос.Клёново, ул.Центральная, 1',
  coordinates: [38.1371, 55.5363],
  description: 'Стекло'
}, {
  name: 'ТПУ Филатов Луг (метро)',
  coordinates: [37.4397, 55.6198],
  description: 'Стекло'
}, {
  name: 'ТПУ Прокшино (метро)',
  coordinates: [37.4163, 55.6308],
  description: 'Стекло'
}, {
  name: 'ТПУ Ольховая (метро)',
  coordinates: [37.495, 55.6176],
  description: 'Стекло'
}, {
  name: 'ТПУ Коммунарка (метро)',
  coordinates: [37.3583, 55.6103],
  description: 'Стекло'
}, {
  name: 'Парк г.Троицк, Заречная улица, 36к2, напротив д.6 по ул.Новая',
  coordinates: [37.2988, 55.4862],
  description: 'Стекло'
}, {
  name: 'Парк по Борисовским прудам',
  coordinates: [37.66873, 55.61071],
  description: 'Стекло'
}, {
  name: 'Зона отдыха Борисовские пруды',
  coordinates: [37.67537, 55.61271],
  description: 'Стекло'
}, {
  name: 'Зона отдыха Борисовские пруды',
  coordinates: [37.67417, 55.61225],
  description: 'Стекло'
}, {
  name: 'Пойма реки Городни',
  coordinates: [37.67675, 55.63216],
  description: 'Стекло'
}, {
  name: 'Пойма реки Городни',
  coordinates: [37.67916, 55.63405],
  description: 'Стекло'
}, {
  name: 'Детский парк по Загородному шоссе',
  coordinates: [37.56781, 55.62706],
  description: 'Стекло'
}, {
  name: 'Сквер между Борисовским проездом и Ореховым проездом',
  coordinates: [37.66669, 55.61481],
  description: 'Стекло'
}, {
  name: 'Сквер по ул. Медынская',
  coordinates: [37.60681, 55.62112],
  description: 'Стекло'
}, {
  name: 'Дорожная ул,',
  coordinates: [37.69403, 55.63598],
  description: 'Стекло'
}, {
  name: 'Благоустройство озелененной территории между Каширским шоссе и Шипиловским проездом',
  coordinates: [37.62239, 55.61536],
  description: 'Стекло'
}, {
  name: 'Парк Садовники',
  coordinates: [37.64993, 55.67064],
  description: 'Стекло'
}, {
  name: 'Школьный сквер',
  coordinates: [37.59415, 55.64553],
  description: 'Стекло'
}, {
  name: 'Школьный сквер',
  coordinates: [37.60298, 55.63791],
  description: 'Стекло'
}, {
  name: 'Парк Коломенская набережная, Коломенская ул., д.27',
  coordinates: [37.663769, 55.674373],
  description: 'Стекло'
}, {
  name: 'Парк Аршиновский парк, ул. Бакинская, д.22',
  coordinates: [37.603048, 55.617251],
  description: 'Стекло'
}, {
  name: 'Парк Аршиновский парк , ул. Бакинская, д.24',
  coordinates: [37.601722, 55.616996],
  description: 'Стекло'
}, {
  name: 'Парк Братеевский каскадный парк , ул. Борисовские пруды, д. 12,к.1',
  coordinates: [37.732958, 55.633408],
  description: 'Стекло'
}, {
  name: 'Парк Братеевский каскадный парк , ул. Борисовские пруды, д.44',
  coordinates: [37.732762, 55.632205],
  description: 'Стекло'
}, {
  name: 'Парк Народный парк "Чертановское подворье" , ул. Чертановская , д.17, кинотеатр Ашхабад',
  coordinates: [37.605797, 55.636665],
  description: 'Стекло'
}, {
  name: 'Парк Реализация проекта: «Реабилитация 5 прудов с благоустройством прикрытия к ним территории Бирюлевского дендропарка, ПИП «Царицыно», (ул. Липецкая, Дендропарк)',
  coordinates: [37.653508, 55.618842],
  description: 'Стекло'
}, {
  name: 'Парк Реализация проекта: «Реабилитация 5 прудов с благоустройством ограждения к ним территории Бирюлевского дендропарка, ПИП «Царицыно»',
  coordinates: [37.659195, 55.613676],
  description: 'Стекло'
}, {
  name: 'Парк Братеевская пойма (1 часть)',
  coordinates: [37.748317, 55.638156],
  description: 'Стекло'
}, {
  name: 'Парк Братеевская пойма (2 часть)',
  coordinates: [37.747383, 55.637864],
  description: 'Стекло'
}, {
  name: 'Парк Битцевский лес',
  coordinates: [37.525836, 55.59217],
  description: 'Стекло'
}, {
  name: 'Сквер по Кавказскому бульвару',
  coordinates: [37.540272, 55.602023],
  description: 'Стекло'
}, {
  name: 'Сквер по Кавказскому бульвару',
  coordinates: [37.537398, 55.605824],
  description: 'Стекло'
}, {
  name: 'Верхний и Нижний Бирюлевские пруды',
  coordinates: [37.588105, 55.606849],
  description: 'Стекло'
}, {
  name: 'Варшавские пруды',
  coordinates: [37.622745, 55.624893],
  description: 'Стекло'
}, {
  name: 'Варшавские пруды',
  coordinates: [37.621341, 55.625891],
  description: 'Стекло'
}, {
  name: 'Ореховый бульвар',
  coordinates: [37.711385, 55.618946],
  description: 'Стекло'
}, {
  name: 'Яблоневый сад',
  coordinates: [37.595074, 55.604236],
  description: 'Стекло'
}, {
  name: 'Аннинский лесопарк',
  coordinates: [37.657402, 55.620142],
  description: 'Стекло'
}, {
  name: 'Аннинский лесопарк',
  coordinates: [37.65807, 55.619431],
  description: 'Стекло'
}, {
  name: 'Детский парк по Загородному шоссе',
  coordinates: [37.442877, 55.671471],
  description: 'Стекло'
}, {
  name: 'Народный парк Кожухово',
  coordinates: [37.862794, 55.743373],
  description: 'Стекло'
}, {
  name: 'Народный парк «Кожухово»',
  coordinates: [37.863324, 55.821354],
  description: 'Стекло'
}, {
  name: 'Нагатинский затон',
  coordinates: [37.628662, 55.674265],
  description: 'Стекло'
}, {
  name: 'Пешеходная зона по Коломенской набережной',
  coordinates: [37.662307, 55.673356],
  description: 'Стекло'
}, {
  name: 'Верхний и Нижний Бирюлевские пруды',
  coordinates: [37.614536, 55.609131],
  description: 'Стекло'
}, {
  name: 'Яблоневый сад',
  coordinates: [37.631233, 55.599211],
  description: 'Стекло'
}, {
  name: 'Борисовский парк',
  coordinates: [37.779119, 55.654759],
  description: 'Стекло'
}, {
  name: 'Сквер "Родная Гавань"',
  coordinates: [37.526558, 55.741969],
  description: 'Стекло'
}, {
  name: 'Парк 50-летия Победы',
  coordinates: [37.604032, 55.642887],
  description: 'Стекло'
}, {
  name: 'Парк 50-летия Победы',
  coordinates: [37.605371, 55.640687],
  description: 'Стекло'
}, {
  name: 'Сквер Чингиза Айтматова',
  coordinates: [37.758425, 55.619136],
  description: 'Стекло'
}, {
  name: 'Варшавская (метро, платформа Коломенское)',
  coordinates: [37.653545, 55.612131],
  description: 'Стекло'
}, {
  name: 'Красный строитель (станция ж/д)',
  coordinates: [37.665684, 55.655573],
  description: 'Стекло'
}, {
  name: 'Домодедовская (метро вход, 1, выход 8)',
  coordinates: [37.717533, 55.610748],
  description: 'Стекло'
}, {
  name: 'Царицыно (метро, платформа)',
  coordinates: [37.669064, 55.621237],
  description: 'Стекло'
}, {
  name: 'Южная (метро)',
  coordinates: [37.609481, 55.622823],
  description: 'Стекло'
}, {
  name: 'Каширская (метро)',
  coordinates: [37.648314, 55.655617],
  description: 'Стекло'
}, {
  name: 'Бирюлево товарная (платформа)',
  coordinates: [37.657041, 55.580013],
  description: 'Стекло'
}, {
  name: 'ул. Касимовская (у остановки общественного транспорта)',
  coordinates: [37.677791, 55.638367],
  description: 'Стекло'
}, {
  name: 'Орехово (метро)',
  coordinates: [37.694982, 55.612428],
  description: 'Стекло'
}, {
  name: 'Кантемировская (метро)',
  coordinates: [37.655498, 55.636688],
  description: 'Стекло'
}, {
  name: 'Причал Кленовый бульвар (Нагатинская набережная, д. 40)',
  coordinates: [37.609035, 55.692772],
  description: 'Стекло'
}, {
  name: 'Пражская (метро, выход №5)',
  coordinates: [37.606543, 55.613857],
  description: 'Стекло'
}, {
  name: 'Чертаново (ж/д платформа)',
  coordinates: [37.602367, 55.639649],
  description: 'Стекло'
}, {
  name: 'Воронцовский парк, Воронцовские пруды, д.9',
  coordinates: [37.696329, 55.676174],
  description: 'Стекло'
}, {
  name: 'Воронцовский парк, ул.Новаторов, 24',
  coordinates: [37.516607, 55.836309],
  description: 'Стекло'
}, {
  name: 'Зона отдыха «Тропарево»',
  coordinates: [37.401206, 55.670508],
  description: 'Стекло'
}, {
  name: 'Зона отдыха «Тропарево»',
  coordinates: [37.407728, 55.672375],
  description: 'Стекло'
}, {
  name: 'Бутовский лесопарк,ул Академика Глушко,д.18',
  coordinates: [37.529054, 55.548356],
  description: 'Стекло'
}, {
  name: 'Зона отдыха «Новые Черемушки 10С»',
  coordinates: [37.542497, 55.672892],
  description: 'Стекло'
}, {
  name: 'Парк «Академический» , Проспект 60 лет Октября, д.10',
  coordinates: [37.578423, 55.899874],
  description: 'Стекло'
}, {
  name: 'Сквер у цирка на Вернадского',
  coordinates: [37.516235, 55.676182],
  description: 'Стекло'
}, {
  name: 'Парк по ул. Академика Арцимовича, д.11',
  coordinates: [37.55066, 55.648712],
  description: 'Стекло'
}, {
  name: 'Парк по ул. Академика Арцимовича, д.8',
  coordinates: [37.551564, 55.649449],
  description: 'Стекло'
}, {
  name: 'Коньково, ул. Профсоюзная , д. 2 97',
  coordinates: [37.531763, 55.643416],
  description: 'Стекло'
}, {
  name: 'Парк Коньково, ул. Профсоюзная, д.91',
  coordinates: [37.521047, 55.630423],
  description: 'Стекло'
}, {
  name: 'Парк в пойме рек Котловка, Севастопольский проспект, д.51, к.2',
  coordinates: [37.612762, 55.648772],
  description: 'Стекло'
}, {
  name: 'Парк в пойме рек Котловка, Нахимовский проспект, д.25А',
  coordinates: [37.607306, 55.649044],
  description: 'Стекло'
}, {
  name: 'ул. Генерала Тюленева, д.41А',
  coordinates: [37.49527, 55.664195],
  description: 'Стекло'
}, {
  name: 'ул. Варги, д.26Б',
  coordinates: [37.514812, 55.64037],
  description: 'Стекло'
}, {
  name: 'Сквер Гарибальди, ул. Гарибальди, д.3',
  coordinates: [37.548244, 55.703311],
  description: 'Стекло'
}, {
  name: 'Сквер Гарибальди, ул. Гарибальди, д.24к2',
  coordinates: [37.549441, 55.704471],
  description: 'Стекло'
}, {
  name: 'Сквер на улице Крупской, д.19',
  coordinates: [37.660854, 55.733135],
  description: 'Стекло'
}, {
  name: 'Сквер на улице Крупской, д.7',
  coordinates: [37.661799, 55.733846],
  description: 'Стекло'
}, {
  name: 'Сквер на улице Крупской, д.2',
  coordinates: [37.662979, 55.734578],
  description: 'Стекло'
}, {
  name: 'Сквер по ул. Инессы Арманд',
  coordinates: [37.57413, 55.76427],
  description: 'Стекло'
}, {
  name: 'Народный парк по ул. Рокотова, ул. Рокотова, д.8к2',
  coordinates: [37.493337, 55.645882],
  description: 'Стекло'
}, {
  name: 'ул. Обручева, д.6к3',
  coordinates: [37.548974, 55.679385],
  description: 'Стекло'
}, {
  name: 'ул. Саморы Машела, д.6',
  coordinates: [37.746161, 55.646618],
  description: 'Стекло'
}, {
  name: 'Парк Зюзино, ул. Б. Юшуньская, д.16',
  coordinates: [37.42568, 55.64006],
  description: 'Стекло'
}, {
  name: 'Парк 70-летия Победы, ул. Болотниковская, д.15',
  coordinates: [37.53305, 55.73068],
  description: 'Стекло'
}, {
  name: 'Сквер по ул. Каховка, д.19к1',
  coordinates: [37.60558, 55.64097],
  description: 'Стекло'
}, {
  name: 'Парк Сосенки, Нахимовский проспект, д.10',
  coordinates: [37.61517, 55.60803],
  description: 'Стекло'
}, {
  name: 'Парк Сосенки, Проектируемый проезд 460, д.33',
  coordinates: [37.60929, 55.60563],
  description: 'Стекло'
}, {
  name: 'Пойма реки Битца, Бульвар Дмитрия Донского',
  coordinates: [37.56274, 55.58147],
  description: 'Стекло'
}, {
  name: 'Парк в пойме реки Битца, Знаменские садки,д.1А',
  coordinates: [37.56857, 55.57683],
  description: 'Стекло'
}, {
  name: 'Парк в пойме реки Битца, Знаменские садки,д.11',
  coordinates: [37.57268, 55.57778],
  description: 'Стекло'
}, {
  name: 'Парк Южное Бутово',
  coordinates: [37.534, 55.555],
  description: 'Стекло'
}, {
  name: 'Чечерский проезд',
  coordinates: [37.525, 55.619],
  description: 'Стекло'
}, {
  name: 'Парковая зона',
  coordinates: [37.635, 55.608],
  description: 'Стекло'
}, {
  name: 'Сквер по ул.Руднева',
  coordinates: [37.537, 55.601],
  description: 'Стекло'
}, {
  name: 'Сквер по ул. Скобелевской',
  coordinates: [37.541, 55.638],
  description: 'Стекло'
}, {
  name: 'Бульвар линии легкого метро Бутовской линии',
  coordinates: [37.529, 55.563],
  description: 'Стекло'
}, {
  name: 'Комплексное благоустройство рекреационных зон района Южное Бутово',
  coordinates: [37.555, 55.552],
  description: 'Стекло'
}, {
  name: 'Битцевский парк (метро)',
  coordinates: [37.543, 55.583],
  description: 'Стекло'
}, {
  name: 'Бульвар Адмирала Ушакова (метро)',
  coordinates: [37.477, 55.56],
  description: 'Стекло'
}, {
  name: 'Бульвар Дмитрия Донского (метро)',
  coordinates: [37.578, 55.567],
  description: 'Стекло'
}, {
  name: 'Коньково (метро)',
  coordinates: [37.519, 55.633],
  description: 'Стекло'
}, {
  name: 'Улица Горчаково (метро)',
  coordinates: [37.527, 55.62],
  description: 'Стекло'
}, {
  name: 'Университет (метро)',
  coordinates: [37.53, 55.692],
  description: 'Стекло'
}, {
  name: 'Парк Центральный: спуск к Большому Солнцевскому пруду, у остановки',
  coordinates: [37.4446, 55.7598],
  description: 'Стекло'
}];

/***/ }),

/***/ 195:
/***/ (() => {

var metalRecyclingPlaces = [{
  name: 'Пункт приема метала,Будайский проезд, 11А',
  coordinates: [37.668775, 55.837618],
  description: 'Метал'
}, {
  name: 'Пункт приема метала,2-й Нагатинский проезд, 6В',
  coordinates: [37.634479, 55.673327],
  description: 'Метал'
}, {
  name: 'Пункт приема метала,улица Руставели, 2Ас1',
  coordinates: [37.581612, 55.810753],
  description: 'Метал'
}, {
  name: 'Пункт приема метала,улица Неверовского, 6',
  coordinates: [37.512804, 55.740934],
  description: 'Метал'
}, {
  name: 'Пункт приема метала,улица Подольских Курсантов, 22Ас26',
  coordinates: [37.635628, 55.598975],
  description: 'Метал'
}, {
  name: 'Пункт приема метала,улица Матросская Тишина, 1Ас72',
  coordinates: [37.688414, 55.783256],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Шоссейная улица, 90с1',
  coordinates: [37.707548, 55.664252],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Краснодонская улица, 9/2',
  coordinates: [37.759479, 55.691014],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Никопольская улица, 6с12',
  coordinates: [37.621058, 55.582477],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, 1-й Рощинский проезд',
  coordinates: [37.606695, 55.709039],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, 1-я улица Энтузиастов, 6с9',
  coordinates: [37.724039, 55.75016],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Перовский проезд, 54с7',
  coordinates: [37.707961, 55.742918],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Огородный проезд, 4с1',
  coordinates: [37.607107, 55.811963],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, 2-я Лыковская улица, 77',
  coordinates: [37.397936, 55.791154],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Никопольская улица, 6с7',
  coordinates: [37.620681, 55.582029],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Промышленный проезд, 7с3',
  coordinates: [37.509346, 55.739867],
  description: 'Метал'
}, {
  name: 'Пункт приема метала, Авиамоторная улица, 67/8с8',
  coordinates: [37.722949, 55.73755],
  description: 'Метал'
}];

/***/ }),

/***/ 839:
/***/ (() => {

var paperRecyclingPlaces = [{
  name: 'Альфаком, Северянинский пр-д, 3',
  coordinates: [37.675019, 55.843502],
  description: 'Бумага'
}, {
  name: 'Пресня, Верейская ул., 10',
  coordinates: [37.44426, 55.711848],
  description: 'Бумага'
}, {
  name: 'Мосвторма, г. Химки, Рабочая ул., дом 2, стр. 95',
  coordinates: [37.443182, 55.90418],
  description: 'Бумага'
}, {
  name: '«Эко-групп» — ул. Клары Цеткин, 31',
  coordinates: [37.51342, 55.825952],
  description: 'Бумага'
}];

/***/ }),

/***/ 667:
/***/ (() => {

var plasticRecyclingPlaces = [{
  name: 'Пункт приема пластмассы, 1-я улица Измайловского Зверинца, 19Ас7',
  coordinates: [37.746136, 55.778181],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Кавказский бульвар, 52А',
  coordinates: [37.64466, 55.63044],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Солнечногорский проезд, 4Ас1',
  coordinates: [37.527091, 55.859297],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Ташкентская улица, 28с1',
  coordinates: [37.806116, 55.699362],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Солнечногорский проезд, 4Ас1',
  coordinates: [37.527905, 55.859195],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Московская обл., г.Люберцы, Проектируемый пр-д 4296 с4 ',
  coordinates: [37.943472, 55.674489],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Кусковская улица, 18',
  coordinates: [37.782683, 55.73852],
  description: 'Пластик'
}, {
  name: 'Пункт приема пластмассы, Потаповский переулок, 5с2',
  coordinates: [37.640206, 55.761828],
  description: 'Пластик'
}];

/***/ }),

/***/ 358:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
  var playButton = document.getElementById('play');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap1Clothes1: 'polkiclothes',
    MindMap1Clothes2: 'veshalkiclothes',
    MindMap1Clothes3: 'veshalkiclothes',
    MindMap1Clothes4: 'veshalkiclothes',
    MindMap1Clothes5: 'korobkiclothes',
    MindMap1Clothes6: 'kruchkiclothes',
    MindMap1Clothes7: 'kruchkiclothes',
    MindMap1Clothes8: 'veshalkiclothes'
  };
  var correctAnswers = 0;
  var currentImage = 0;

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return;
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    game.className = 'Q_MindMapPagePlayImage';
    game.classList.add("MindMap1Clothes".concat(currentImage + 1));
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  }

  function startGame() {
    correctAnswers = 0;
    currentImage = 0;
    showNextImage();
    result.textContent = '';
    game.dataset.playing = true;
  }

  function restartGame() {
    startGame();
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return;
    }

    var selectedColor = e.target.id;

    if (colorAnswers["MindMap1Clothes".concat(currentImage)] === selectedColor) {
      correctAnswers++;
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect');

      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false;
        result.textContent = "\u0423 \u0432\u0430\u0441 ".concat(correctAnswers, " \u0438\u0437 ").concat(Object.keys(colorAnswers).length, " \u0431\u0430\u043B\u043B\u043E\u0432!");
        return;
      }

      showNextImage();
    }, 500);
  }

  playButton.addEventListener('click', startGame);
  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick);
  });
});

/***/ }),

/***/ 635:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
  var playButton = document.getElementById('play');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap2Clothes1: 'polka',
    MindMap2Clothes2: 'shkaf',
    MindMap2Clothes3: 'polka',
    MindMap2Clothes4: 'korobka'
  };
  var correctAnswers = 0;
  var currentImage = 0;

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return;
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    game.className = 'Q_MindMapPagePlayImage';
    game.classList.add("MindMap2Clothes".concat(currentImage + 1));
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  }

  function startGame() {
    correctAnswers = 0;
    currentImage = 0;
    showNextImage();
    result.textContent = '';
    game.dataset.playing = true;
  }

  function restartGame() {
    startGame();
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return;
    }

    var selectedColor = e.target.id;

    if (colorAnswers["MindMap2Clothes".concat(currentImage)] === selectedColor) {
      correctAnswers++;
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect');

      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false;
        result.textContent = "\u0423 \u0432\u0430\u0441 ".concat(correctAnswers, " \u0438\u0437 ").concat(Object.keys(colorAnswers).length, " \u0431\u0430\u043B\u043B\u043E\u0432!");
        return;
      }

      showNextImage();
    }, 500);
  }

  playButton.addEventListener('click', startGame);
  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick);
  });
});

/***/ }),

/***/ 740:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
  var playButton = document.getElementById('play');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap1Food1: 'breakfast',
    MindMap1Food2: 'all',
    MindMap1Food3: 'dinner',
    MindMap1Food4: 'breakfast',
    MindMap1Food5: 'dinner',
    MindMap1Food6: 'breakfast',
    MindMap1Food7: 'breakfast',
    MindMap1Food8: 'lunch',
    MindMap1Food9: 'breakfast',
    MindMap1Food10: 'dinner',
    MindMap1Food11: 'lunch'
  };
  var correctAnswers = 0;
  var currentImage = 0;

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return;
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    game.className = 'Q_MindMapPagePlayImage';
    game.classList.add("MindMap1Food".concat(currentImage + 1));
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  }

  function startGame() {
    correctAnswers = 0;
    currentImage = 0;
    showNextImage();
    result.textContent = '';
    game.dataset.playing = true;
  }

  function restartGame() {
    startGame();
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return;
    }

    var selectedColor = e.target.id;

    if (colorAnswers["MindMap1Food".concat(currentImage)] === selectedColor) {
      correctAnswers++;
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect');

      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false;
        result.textContent = "\u0423 \u0432\u0430\u0441 ".concat(correctAnswers, " \u0438\u0437 ").concat(Object.keys(colorAnswers).length, " \u0431\u0430\u043B\u043B\u043E\u0432!");
        return;
      }

      showNextImage();
    }, 500);
  }

  playButton.addEventListener('click', startGame);
  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick);
  });
});

/***/ }),

/***/ 108:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
  var playButton = document.getElementById('play');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap2Food1: 'yes',
    MindMap2Food2: 'no',
    MindMap2Food3: 'no',
    MindMap2Food4: 'yes',
    MindMap2Food5: 'yes',
    MindMap2Food6: 'no'
  };
  var correctAnswers = 0;
  var currentImage = 0;

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return;
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    game.className = 'Q_MindMapPagePlayImage';
    game.classList.add("MindMap2Food".concat(currentImage + 1));
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  }

  function startGame() {
    correctAnswers = 0;
    currentImage = 0;
    showNextImage();
    result.textContent = '';
    game.dataset.playing = true;
  }

  function restartGame() {
    startGame();
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return;
    }

    var selectedColor = e.target.id;

    if (colorAnswers["MindMap2Food".concat(currentImage)] === selectedColor) {
      correctAnswers++;
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect');

      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false;
        result.textContent = "\u0423 \u0432\u0430\u0441 ".concat(correctAnswers, " \u0438\u0437 ").concat(Object.keys(colorAnswers).length, " \u0431\u0430\u043B\u043B\u043E\u0432!");
        return;
      }

      showNextImage();
    }, 500);
  }

  playButton.addEventListener('click', startGame);
  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick);
  });
});

/***/ }),

/***/ 728:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
  var playButton = document.getElementById('play');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap1Waste1: 'red',
    MindMap1Waste2: 'yellow',
    MindMap1Waste3: 'black',
    MindMap1Waste4: 'blue',
    MindMap1Waste5: 'red',
    MindMap1Waste6: 'blue',
    MindMap1Waste7: 'green',
    MindMap1Waste8: 'red',
    MindMap1Waste9: 'yellow',
    MindMap1Waste10: 'green'
  };
  var correctAnswers = 0;
  var currentImage = 0;

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return;
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    game.className = 'Q_MindMapPagePlayImage';
    game.classList.add("MindMap1Waste".concat(currentImage + 1));
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  }

  function startGame() {
    correctAnswers = 0;
    currentImage = 0;
    showNextImage();
    result.textContent = '';
    game.dataset.playing = true;
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return;
    }

    var selectedColor = e.target.id;

    if (colorAnswers["MindMap1Waste".concat(currentImage)] === selectedColor) {
      correctAnswers++;
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect');

      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false;
        result.textContent = "\u0423 \u0432\u0430\u0441 ".concat(correctAnswers, " \u0438\u0437 ").concat(Object.keys(colorAnswers).length, " \u0431\u0430\u043B\u043B\u043E\u0432!");
        return;
      }

      showNextImage();
    }, 500);
  }

  playButton.addEventListener('click', startGame);
  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick);
  });
});

/***/ }),

/***/ 761:
/***/ (() => {

$(document).ready(function () {
  $(".img1").addClass("yes");
  $(".box1").click(function () {
    if ($(".img1").hasClass("yes")) {
      $(".img1").removeClass("yes");
      $(".img1").addClass("yes2");
      $(".img1").css("margin-left", "38vw");
      $(".img1").css("rotate", "90deg");
    } else if ($(".img1").hasClass("yes2")) {
      $(".img1").removeClass("yes2");
      $(".img1").addClass("yes3");
      $(".img1").css("margin-top", "8.5vw");
      $(".img2").removeClass("no");
      $(".img2").addClass("yes");
    } else if ($(".img2").hasClass("yes")) {
      $(".img2").removeClass("yes");
      $(".img2").addClass("yes2");
      $(".img2").css("margin-left", "3.5vw");
    } else if ($(".img2").hasClass("yes2")) {
      $(".img2").removeClass("yes2");
      $(".img2").addClass("yes3");
      $(".img2").css("margin-top", "-22.2vw");
      $(".img3").removeClass("no");
      $(".img3").addClass("yes");
    } else if ($(".img3").hasClass("yes")) {
      $(".img3").removeClass("yes");
      $(".img3").addClass("yes2");
      $(".img3").css("rotate", "360deg");
      $(".img3").css("margin-left", "20vw");
      $(".img3").css("margin-top", "-48vw");
    } else if ($(".img3").hasClass("yes2")) {
      $(".img3").removeClass("yes2");
      $(".img3").addClass("yes3");
      $(".img3").css("margin-top", "-23.8vw");
      $(".img4").removeClass("no");
      $(".img4").addClass("yes");
    } else if ($(".img4").hasClass("yes")) {
      $(".img4").removeClass("yes");
      $(".img4").addClass("yes2");
      $(".img4").css("margin-left", "-0.9vw");
    } else if ($(".img4").hasClass("yes2")) {
      $(".img4").removeClass("yes2");
      $(".img4").addClass("yes3");
      $(".img4").css("rotate", "360deg");
      $(".img4").css("margin-top", "-26.3vw");
      $(".img4").css("margin-left", "3.3vw");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    } else if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("yes2");
      $(".img5").css("margin-left", "3.5vw");
    } else if ($(".img5").hasClass("yes2")) {
      $(".img5").removeClass("yes2");
      $(".img5").addClass("yes3");
      $(".img5").css("margin-top", "-27vw");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else if ($(".img6").hasClass("yes")) {
      $(".img6").removeClass("yes");
      $(".img6").addClass("yes2");
      $(".img6").css("rotate", "360deg");
    } else if ($(".img6").hasClass("yes2")) {
      $(".img6").removeClass("yes2");
      $(".img6").addClass("yes3");
      $(".img6").css("margin-top", "-22vw");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else {
      $(".img1").removeClass("yes3");
      $(".img2").removeClass("yes3");
      $(".img3").removeClass("yes3");
      $(".img4").removeClass("yes3");
      $(".img5").removeClass("yes3");
      $(".img6").removeClass("yes3");
      $(".img7").removeClass("yes");
      $(".img1").addClass("yes");
      $(".img2").addClass("no");
      $(".img3").addClass("no");
      $(".img4").addClass("no");
      $(".img5").addClass("no");
      $(".img6").addClass("no");
      $(".img7").addClass("no");
      $(".img1").css("margin-left", "20vw");
      $(".img2").css("margin-left", "30vw");
      $(".img3").css("margin-left", "25vw");
      $(".img4").css("margin-left", "20vw");
      $(".img5").css("margin-left", "20vw");
      $(".img6").css("margin-left", "35vw");
      $(".img7").css("margin-left", "69vw");
      $(".img1").css("margin-top", "-10vw");
      $(".img2").css("margin-top", "-60vw");
      $(".img3").css("margin-top", "-55vw");
      $(".img4").css("margin-top", "-45vw");
      $(".img5").css("margin-top", "-35vw");
      $(".img6").css("margin-top", "-30vw");
      $(".img7").css("margin-top", "-29vw");
      $(".img1").css("rotate", "360deg");
      $(".img3").css("rotate", "90deg");
      $(".img4").css("rotate", "90deg");
      $(".img6").css("rotate", "90deg");
    }
  });
});

/***/ }),

/***/ 821:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('.A_SearchInput');
  var cards = document.querySelectorAll('.M_SearchAndFiltersPageCard');
  var categories = document.querySelectorAll('.A_SearchAndFilterCard');
  var filterArrow = document.querySelector('.Q_FilterPageArrowImage1');
  var searchAndFilterCards = document.querySelector('.W_SearchAndFilterCards');
  var titleSearchAndFilterPage = document.querySelector('.A_TitleSearchAndFilterPage');
  var searchQuery = '';
  var activeCategories = [];
  var filterArrowClickCount = 0;
  categories.forEach(function (category) {
    category.addEventListener('mouseover', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '0.4';
            cat.style.transition = 'opacity 0.15s ease-in-out';
          }
        });
      }
    });
    category.addEventListener('mouseout', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '1';
            cat.style.transition = 'opacity 0.15s ease-in-out';
          }
        });
      }
    });
    category.addEventListener('click', function () {
      filterArrowClickCount++;
      var categoryValue = category.getAttribute('data-category').toLowerCase();

      if (activeCategories.includes(categoryValue)) {
        activeCategories.splice(activeCategories.indexOf(categoryValue), 1);
      } else {
        activeCategories.push(categoryValue);
      }

      categories.forEach(function (cat) {
        var catValue = cat.getAttribute('data-category').toLowerCase();

        if (activeCategories.includes(catValue)) {
          cat.style.opacity = '1';
          cat.style.transition = 'opacity 0.15s ease-in-out';
        } else {
          cat.style.opacity = '0.4';
          cat.style.transition = 'opacity 0.15s ease-in-out';
        }
      });
      cards.forEach(function (card) {
        var keywords = card.getAttribute('data-keywords').toLowerCase();
        var cardCategory = card.getAttribute('data-category').toLowerCase();

        if (keywords.includes(searchQuery) && (activeCategories.length === 0 || activeCategories.includes(cardCategory))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

/***/ }),

/***/ 327:
/***/ (() => {

$(document).ready(function () {
  $(".img5").addClass("yes");
  $(".img12").click(function () {
    if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("no");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else if ($(".img6").hasClass("yes")) {
      $(".img6").removeClass("yes");
      $(".img6").addClass("no");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else if ($(".img7").hasClass("yes")) {
      $(".img7").removeClass("yes");
      $(".img7").addClass("no");
      $(".img8").removeClass("no");
      $(".img8").addClass("yes");
    } else if ($(".img8").hasClass("yes")) {
      $(".img8").removeClass("yes");
      $(".img8").addClass("no");
      $(".img9").removeClass("no");
      $(".img9").addClass("yes");
    } else if ($(".img9").hasClass("yes")) {
      $(".img9").removeClass("yes");
      $(".img9").addClass("no");
      $(".img10").removeClass("no");
      $(".img10").addClass("yes");
    } else {
      $(".img10").removeClass("yes");
      $(".img10").addClass("no");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    }
  });
  $(".img11").click(function () {
    if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("no");
      $(".img10").removeClass("no");
      $(".img10").addClass("yes");
    } else if ($(".img10").hasClass("yes")) {
      $(".img10").removeClass("yes");
      $(".img10").addClass("no");
      $(".img9").removeClass("no");
      $(".img9").addClass("yes");
    } else if ($(".img9").hasClass("yes")) {
      $(".img9").removeClass("yes");
      $(".img9").addClass("no");
      $(".img8").removeClass("no");
      $(".img8").addClass("yes");
    } else if ($(".img8").hasClass("yes")) {
      $(".img8").removeClass("yes");
      $(".img8").addClass("no");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else if ($(".img7").hasClass("yes")) {
      $(".img7").removeClass("yes");
      $(".img7").addClass("no");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else {
      $(".img6").removeClass("yes");
      $(".img6").addClass("no");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    }
  });
  $(".img14").click(function () {
    $(".content").css("display", "none");
    $(".content1").css("display", "flex");
  });
});

/***/ }),

/***/ 529:
/***/ (() => {

var brandDefault = "\n\u041C\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u043C \u0441\u0435\u0431\u044F \u043A\u0430\u043A \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C\n            \u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0441 \u043D\u0443\u043B\u044F. <br />\n            \u041D\u0430\u0448 \u0431\u0440\u0435\u043D\u0434 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0441\u044F \u0431\u044B\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C. \u0418\u043C\u0435\u043D\u043D\u043E\n            \u043F\u043E\u044D\u0442\u043E\u043C\u0443 <br />\n            \u0432 \u043E\u0441\u043D\u043E\u0432\u0443 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F \u043B\u0435\u0433\u043B\u0430 \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432.\n";
var brandToggle = "\n<span class=\"gray\">\u041C\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u043C \u0441\u0435\u0431\u044F \u043A\u0430\u043A</span> \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E<span class=\"gray\">, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C</span>\n\u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0441 \u043D\u0443\u043B\u044F. <br />\n\u041D\u0430\u0448 \u0431\u0440\u0435\u043D\u0434 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0441\u044F \u0431\u044B\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C<span class=\"gray\">. \u0418\u043C\u0435\u043D\u043D\u043E\n\u043F\u043E\u044D\u0442\u043E\u043C\u0443 <br />\n\u0432 \u043E\u0441\u043D\u043E\u0432\u0443 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F \u043B\u0435\u0433\u043B\u0430 \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432.</span> \n";
var weDefault = "\n<span class=\"gray\">\u041E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0435, \u0443\u0434\u043E\u0431\u043D\u044B\u0435, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435, \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435, \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0435,</span>\n            \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0435<span class=\"gray\">, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435, \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435, \u0438\u0434\u0435\u0439\u043D\u044B\u0435,\n            \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435,</span> \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043B\u044E\u0431\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435<span class=\"gray\">, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0435, \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0435,\n            \u043B\u0435\u0433\u043A\u0438\u0435, \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435.</span>\n";
var weToggle = "\u041E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0435, \u0443\u0434\u043E\u0431\u043D\u044B\u0435, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435, \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435, \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0435,\n\u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0435, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435, \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435, \u0438\u0434\u0435\u0439\u043D\u044B\u0435,\n\u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043B\u044E\u0431\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0435, \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0435,\n\u043B\u0435\u0433\u043A\u0438\u0435, \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435.\n";
var goalDefault = "\u041D\u0430\u043C \u0432\u0430\u0436\u043D\u044B \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F, <br />\n            \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430\u0448\u0438\u0445 <br />\n            \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u043A\u043B\u0430\u0434 \u043A\u0430\u0436\u0434\u043E\u0433\u043E, <br />\n            \u0434\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0439 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439.\n";
var goalToggle = "\n<span class=\"gray\">\u041D\u0430\u043C \u0432\u0430\u0436\u043D\u044B</span> \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F, <br />\n\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 <span class=\"gray\">\u043D\u0430\u0448\u0438\u0445</span> <br />\n\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439<span class=\"gray\">, \u0430 \u0442\u0430\u043A\u0436\u0435</span> \u0432\u043A\u043B\u0430\u0434 \u043A\u0430\u0436\u0434\u043E\u0433\u043E<span class=\"gray\">, <br />\n\u0434\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0439 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439.</span>\n";
var missionDefault = "\u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F \u2014 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u0442 \u043C\u0443\u0441\u043E\u0440\u0430 <br />\n            \u0432\u0435\u0441\u044C \u043C\u0438\u0440!\n";
var missionToggle = "<span class=\"gray\">\u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F \u2014 </span>\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u0442 \u043C\u0443\u0441\u043E\u0440\u0430 <br />\n            \u0432\u0435\u0441\u044C \u043C\u0438\u0440!\n";
var headerDefault = "\n\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0442\u0435\u043A\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0430\u043C\u043E\u0435\n\u0432\u0430\u0436\u043D\u043E\u0435.\n";
var headerToggle = "\n<span class=\"gray\">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0442\u0435\u043A\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C</span> \u0441\u0430\u043C\u043E\u0435\n\u0432\u0430\u0436\u043D\u043E\u0435.\n";
var pravilaOneDefault = "\n\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0438\u043C\u0435\u0435\u0442 \u043E\u0434\u0438\u043D \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u2014 \u0447\u0435\u0440\u043D\u044B\u0439 <br />\n\u0431\u0435\u0437 \u0444\u043E\u043D\u0430. \u0412\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B <br />\n\u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 <br />\n\u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435.\n";
var pravilaOneToggle = "\n<span class=\"gray\">\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0438\u043C\u0435\u0435\u0442</span> \u043E\u0434\u0438\u043D \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 <span class=\"gray\">\u2014</span> \u0447\u0435\u0440\u043D\u044B\u0439 <br />\n\u0431\u0435\u0437 \u0444\u043E\u043D\u0430. \u0412\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 <span class=\"gray\">\u0434\u043E\u043B\u0436\u043D\u044B <br />\n\u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F</span> \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 <br />\n\u0432\u0430\u0440\u0438\u0430\u043D\u0442 <span class=\"gray\">\u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F</span> \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435.\n";
var colorsDefault = "\n\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u043D\u044B\u0439 \u0438 \u0441\u0432\u0435\u0442\u043B\u043E-\u0441\u0435\u0440\u044B\u0439. \u042D\u0442\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435\n          \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 <br />\n          \u0446\u0432\u0435\u0442\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439 \u0438 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437\n          \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0445,<br />\n          \u044F\u0440\u043A\u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432. \u0422\u0430\u043A\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0438\u0437\u0430\u0439\u043D \u0431\u043E\u043B\u0435\u0435\n          \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C.\n";
var colorsToggle = "\n  \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 <span class=\"gray\">\u0446\u0432\u0435\u0442\u0430\u043C\u0438</span> \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u043D\u044B\u0439 \u0438 \u0441\u0432\u0435\u0442\u043B\u043E-\u0441\u0435\u0440\u044B\u0439. \u042D\u0442\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435\n\u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 <br />\n<span class=\"gray\">\u0446\u0432\u0435\u0442\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439 \u0438 \u0441\u0442\u0438\u043A\u0435\u0440\u043E\u0432.</span> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437\n\u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0445,<br />\n\u044F\u0440\u043A\u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432<span class=\"gray\">. \u0422\u0430\u043A\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0438\u0437\u0430\u0439\u043D \u0431\u043E\u043B\u0435\u0435\n\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C.</span>\n";
var pravilaTwoDefault = "\n\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B, \u043A\u0430\u043A \u0434\u043B\u044F \u0444\u043E\u043D\u0430 <br />\n          \u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0438. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 <br />\n          \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 3D \u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043D\u0430 <br />\n          \u043D\u0430 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u0445.\n";
var pravilaTwoToggle = "\n\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 <span class=\"gray\">\u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B, \u043A\u0430\u043A</span> \u0434\u043B\u044F \u0444\u043E\u043D\u0430 <br />\n          \u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438<span class=\"gray\">, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F</span> \u0433\u0440\u0430\u0444\u0438\u043A\u0438. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 <br />\n          <span class=\"gray\">\u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B</span> \u0442\u043E\u043B\u044C\u043A\u043E \u0432 3D \u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043D\u0430 <br />\n          \u043D\u0430 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u0445.\n";
var typographyDefault = "\n\u041C\u0435\u0442\u0430\u0444\u043E\u0440\u0430 \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u2014 \u0438\u0437 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\n          <br />\u043E\u0442\u043E\u0431\u0440\u0430\u0442\u044C \u0438 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0430\u043C\u0443\u044E \u043D\u0443\u0436\u043D\u0443\u044E \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u0443\u044E.\n";
var typographyToggle = "\n<span class=\"gray\">\u041C\u0435\u0442\u0430\u0444\u043E\u0440\u0430 \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u2014</span> \u0438\u0437 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\n          <br />\u043E\u0442\u043E\u0431\u0440\u0430\u0442\u044C \u0438 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0430\u043C\u0443\u044E \u043D\u0443\u0436\u043D\u0443\u044E \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u0443\u044E.\n";
var compositionDefault = "\n<span class=\"gray\">\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435</span> \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \xAB\u0441\u043B\u0438\u043F\u0448\u0438\u043C\u0438\u0441\u044F\xBB,\n          <br />\u043E\u0434\u043D\u0430\u043A\u043E<span class=\"gray\">, \u0441\u0442\u043E\u0438\u0442 \u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043E \xAB\u0432\u043E\u0437\u0434\u0443\u0445\u0435\xBB \u0438 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0438 \u0438</span> \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C\n          \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C <br />\n          \u043F\u0443\u0441\u0442\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.\n";
var compositionToggle = "\n\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \xAB\u0441\u043B\u0438\u043F\u0448\u0438\u043C\u0438\u0441\u044F\xBB,\n          <br />\u043E\u0434\u043D\u0430\u043A\u043E, \u0441\u0442\u043E\u0438\u0442 \u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043E \xAB\u0432\u043E\u0437\u0434\u0443\u0445\u0435\xBB \u0438 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0438 \u0438 \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C\n          \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C <br />\n          \u043F\u0443\u0441\u0442\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.\n";
var pravilaThreeDefault = "\n\u0415\u0441\u043B\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0430 \u0447\u0435\u0440\u043D\u043E\u043C \u0444\u043E\u043D\u0435 \u0438 \u0441\u0442\u043E\u0438\u0442 \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443, \u0442\u043E\n          \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A <br />\n          \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u043E\u0447\u043A\u0435. \u0415\u0441\u043B\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0444\u043E\u043D\u0430 \u0438 \u0441\u0442\u043E\u0438\u0442\n          \u0441\u0432\u0435\u0440\u0445\u0443\n          <br />\n          \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435, \u0442\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u043F\u043E\u0434 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C.\n";
var pravilaThreeToggle = "\n<span class=\"gray\">\u0415\u0441\u043B\u0438</span> \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0430 \u0447\u0435\u0440\u043D\u043E\u043C \u0444\u043E\u043D\u0435<span class=\"gray\"> \u0438 \u0441\u0442\u043E\u0438\u0442 \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443, \u0442\u043E</span>\n          \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A <br />\n          \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u043E\u0447\u043A\u0435. <span class=\"gray\">\u0415\u0441\u043B\u0438</span> \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0444\u043E\u043D\u0430 <span class=\"gray\">\u0438 \u0441\u0442\u043E\u0438\u0442\n          \u0441\u0432\u0435\u0440\u0445\u0443\n          <br />\n          \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435, \u0442\u043E</span> \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A <span class=\"gray\">\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C</span> \u043F\u043E\u0434 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C.\n";
var graphicsDefault = "\n\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u043C\u043E\u0436\u043D\u043E <br />\n            \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0437\u043D\u0430\u043A\u0438 \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0438, <br />\n            \u0430 \u0442\u0430\u043A\u0436\u0435 3D \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 <br />\n            \u0432 \u044F\u0440\u043A\u0438\u0445, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u0430\u0445.\n";
var graphicsToggle = "\n<span class=\"gray\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438</span> \u043C\u043E\u0436\u043D\u043E <br />\n            \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0437\u043D\u0430\u043A\u0438 \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0438, <br />\n            <span class=\"gray\">\u0430 \u0442\u0430\u043A\u0436\u0435</span> 3D \u043E\u0431\u044A\u0435\u043A\u0442\u044B<span class=\"gray\"> \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 <br />\n            \u0432 \u044F\u0440\u043A\u0438\u0445, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u0430\u0445.</span>\n";
var brandBtn = document.getElementById('brand-btn');
var weBtn = document.getElementById('we-btn');
var goalBtn = document.getElementById('goal-btn');
var missionBtn = document.getElementById('mission-btn');
var headerBtn = document.getElementById('header-btn');
var pravilaOneBtn = document.getElementById('pravila-one-btn');
var pravilaTwoBtn = document.getElementById('pravila-two-btn');
var pravilaThreeBtn = document.getElementById('pravila-three-btn');
var colorsBtn = document.getElementById('colors-btn');
var typographyBtn = document.getElementById('typography-btn');
var compositionBtn = document.getElementById('composition-btn');
var graphicsBtn = document.getElementById('graphics-btn');
var brandText = document.getElementById('brand-text');
var weText = document.getElementById('we-text');
var goalText = document.getElementById('goal-text');
var missionText = document.getElementById('mission-text');
var headerText = document.getElementById('header-text');
var pravilaOneText = document.getElementById('pravila-one-text');
var pravilaTwoText = document.getElementById('pravila-two-text');
var pravilaThreeText = document.getElementById('pravila-three-text');
var colorsText = document.getElementById('colors-text');
var typographyText = document.getElementById('typography-text');
var compositionText = document.getElementById('composition-text');
var graphicsText = document.getElementById('graphics-text');
brandBtn === null || brandBtn === void 0 ? void 0 : brandBtn.addEventListener('click', function () {
  var _brandBtn$dataset;

  if (!brandText) return;

  if ((brandBtn === null || brandBtn === void 0 ? void 0 : (_brandBtn$dataset = brandBtn.dataset) === null || _brandBtn$dataset === void 0 ? void 0 : _brandBtn$dataset.text) === 'default') {
    brandText.innerHTML = brandToggle;
    brandBtn.dataset.text = 'toggle';
    return;
  }

  brandText.innerHTML = brandDefault;
  brandBtn.dataset.text = 'default';
});
weBtn === null || weBtn === void 0 ? void 0 : weBtn.addEventListener('click', function () {
  var _weBtn$dataset;

  if (!weText) return;

  if ((weBtn === null || weBtn === void 0 ? void 0 : (_weBtn$dataset = weBtn.dataset) === null || _weBtn$dataset === void 0 ? void 0 : _weBtn$dataset.text) === 'default') {
    weText.innerHTML = weToggle;
    weBtn.dataset.text = 'toggle';
    return;
  }

  weText.innerHTML = weDefault;
  weBtn.dataset.text = 'default';
});
goalBtn === null || goalBtn === void 0 ? void 0 : goalBtn.addEventListener('click', function () {
  var _goalBtn$dataset;

  if (!goalText) return;

  if ((goalBtn === null || goalBtn === void 0 ? void 0 : (_goalBtn$dataset = goalBtn.dataset) === null || _goalBtn$dataset === void 0 ? void 0 : _goalBtn$dataset.text) === 'default') {
    goalText.innerHTML = goalToggle;
    goalBtn.dataset.text = 'toggle';
    return;
  }

  goalText.innerHTML = goalDefault;
  goalBtn.dataset.text = 'default';
});
missionBtn === null || missionBtn === void 0 ? void 0 : missionBtn.addEventListener('click', function () {
  var _missionBtn$dataset;

  if (!missionText) return;

  if ((missionBtn === null || missionBtn === void 0 ? void 0 : (_missionBtn$dataset = missionBtn.dataset) === null || _missionBtn$dataset === void 0 ? void 0 : _missionBtn$dataset.text) === 'default') {
    missionText.innerHTML = missionToggle;
    missionBtn.dataset.text = 'toggle';
    return;
  }

  missionText.innerHTML = missionDefault;
  missionBtn.dataset.text = 'default';
});
headerBtn === null || headerBtn === void 0 ? void 0 : headerBtn.addEventListener('click', function () {
  var _headerBtn$dataset;

  if (!headerText) return;

  if ((headerBtn === null || headerBtn === void 0 ? void 0 : (_headerBtn$dataset = headerBtn.dataset) === null || _headerBtn$dataset === void 0 ? void 0 : _headerBtn$dataset.text) === 'default') {
    headerText.innerHTML = headerToggle;
    headerBtn.dataset.text = 'toggle';
    return;
  }

  headerText.innerHTML = headerDefault;
  headerBtn.dataset.text = 'default';
});
pravilaOneBtn === null || pravilaOneBtn === void 0 ? void 0 : pravilaOneBtn.addEventListener('click', function () {
  var _pravilaOneBtn$datase;

  if (!pravilaOneText) return;

  if ((pravilaOneBtn === null || pravilaOneBtn === void 0 ? void 0 : (_pravilaOneBtn$datase = pravilaOneBtn.dataset) === null || _pravilaOneBtn$datase === void 0 ? void 0 : _pravilaOneBtn$datase.text) === 'default') {
    pravilaOneText.innerHTML = pravilaOneToggle;
    pravilaOneBtn.dataset.text = 'toggle';
    return;
  }

  pravilaOneText.innerHTML = pravilaOneDefault;
  pravilaOneBtn.dataset.text = 'default';
});
pravilaTwoBtn === null || pravilaTwoBtn === void 0 ? void 0 : pravilaTwoBtn.addEventListener('click', function () {
  var _pravilaTwoBtn$datase;

  if (!pravilaTwoText) return;

  if ((pravilaTwoBtn === null || pravilaTwoBtn === void 0 ? void 0 : (_pravilaTwoBtn$datase = pravilaTwoBtn.dataset) === null || _pravilaTwoBtn$datase === void 0 ? void 0 : _pravilaTwoBtn$datase.text) === 'default') {
    pravilaTwoText.innerHTML = pravilaTwoToggle;
    pravilaTwoBtn.dataset.text = 'toggle';
    return;
  }

  pravilaTwoText.innerHTML = pravilaTwoDefault;
  pravilaTwoBtn.dataset.text = 'default';
});
pravilaThreeBtn === null || pravilaThreeBtn === void 0 ? void 0 : pravilaThreeBtn.addEventListener('click', function () {
  var _pravilaThreeBtn$data;

  if (!pravilaThreeText) return;

  if ((pravilaThreeBtn === null || pravilaThreeBtn === void 0 ? void 0 : (_pravilaThreeBtn$data = pravilaThreeBtn.dataset) === null || _pravilaThreeBtn$data === void 0 ? void 0 : _pravilaThreeBtn$data.text) === 'default') {
    pravilaThreeText.innerHTML = pravilaThreeToggle;
    pravilaThreeBtn.dataset.text = 'toggle';
    return;
  }

  pravilaThreeText.innerHTML = pravilaThreeDefault;
  pravilaThreeBtn.dataset.text = 'default';
});
colorsBtn === null || colorsBtn === void 0 ? void 0 : colorsBtn.addEventListener('click', function () {
  var _colorsBtn$dataset;

  if (!colorsText) return;

  if ((colorsBtn === null || colorsBtn === void 0 ? void 0 : (_colorsBtn$dataset = colorsBtn.dataset) === null || _colorsBtn$dataset === void 0 ? void 0 : _colorsBtn$dataset.text) === 'default') {
    colorsText.innerHTML = colorsToggle;
    colorsBtn.dataset.text = 'toggle';
    return;
  }

  colorsText.innerHTML = colorsDefault;
  colorsBtn.dataset.text = 'default';
});
typographyBtn === null || typographyBtn === void 0 ? void 0 : typographyBtn.addEventListener('click', function () {
  var _typographyBtn$datase;

  if (!typographyText) return;

  if ((typographyBtn === null || typographyBtn === void 0 ? void 0 : (_typographyBtn$datase = typographyBtn.dataset) === null || _typographyBtn$datase === void 0 ? void 0 : _typographyBtn$datase.text) === 'default') {
    typographyText.innerHTML = typographyToggle;
    typographyBtn.dataset.text = 'toggle';
    return;
  }

  typographyText.innerHTML = typographyDefault;
  typographyBtn.dataset.text = 'default';
});
compositionBtn === null || compositionBtn === void 0 ? void 0 : compositionBtn.addEventListener('click', function () {
  var _compositionBtn$datas;

  if (!compositionText) return;

  if ((compositionBtn === null || compositionBtn === void 0 ? void 0 : (_compositionBtn$datas = compositionBtn.dataset) === null || _compositionBtn$datas === void 0 ? void 0 : _compositionBtn$datas.text) === 'default') {
    compositionText.innerHTML = compositionToggle;
    compositionBtn.dataset.text = 'toggle';
    return;
  }

  compositionText.innerHTML = compositionDefault;
  compositionBtn.dataset.text = 'default';
});
graphicsBtn === null || graphicsBtn === void 0 ? void 0 : graphicsBtn.addEventListener('click', function () {
  var _graphicsBtn$dataset;

  if (!graphicsText) return;

  if ((graphicsBtn === null || graphicsBtn === void 0 ? void 0 : (_graphicsBtn$dataset = graphicsBtn.dataset) === null || _graphicsBtn$dataset === void 0 ? void 0 : _graphicsBtn$dataset.text) === 'default') {
    graphicsText.innerHTML = graphicsToggle;
    graphicsBtn.dataset.text = 'toggle';
    return;
  }

  graphicsText.innerHTML = graphicsDefault;
  graphicsBtn.dataset.text = 'default';
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/javascript/back.js
var back = __webpack_require__(971);
;// CONCATENATED MODULE: ./src/images/telegram.svg
const telegram_namespaceObject = __webpack_require__.p + "images/32fe9deeb3e954bf0af6.svg";
;// CONCATENATED MODULE: ./src/images/vk.svg
const vk_namespaceObject = __webpack_require__.p + "images/4402ecaacabb371ffe96.svg";
;// CONCATENATED MODULE: ./src/images/instagram.svg
const instagram_namespaceObject = __webpack_require__.p + "images/bbc815194939c29a83b7.svg";
;// CONCATENATED MODULE: ./src/images/promo/recycle.svg
const recycle_namespaceObject = __webpack_require__.p + "images/779f4be0580600180a58.svg";
;// CONCATENATED MODULE: ./src/images/search.svg
const search_namespaceObject = __webpack_require__.p + "images/46ce9bfefcdc28e38292.svg";
;// CONCATENATED MODULE: ./src/images/arrow.svg
const arrow_namespaceObject = __webpack_require__.p + "images/5fa36d28f54964b50110.svg";
;// CONCATENATED MODULE: ./src/javascript/hamburger.js






var hamburger = document.querySelector('#hamburger');
var hamburgerPhone = document.querySelector('#hamburger-phone');
var pageHamburger = document.querySelector('#page-hamburger');

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden');
  document.querySelector('#hamburger-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger__line').forEach(function (line) {
    line.classList.toggle('hidden');
  });
}

function toggleHamburgerPhone() {
  document.querySelector('.menu-phone__container').classList.toggle('hidden');
  document.querySelector('#hamburger-phone-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger-phone__line').forEach(function (line) {
    line.classList.toggle('hidden');
  });
}

function togglePageHamburger() {
  document.querySelector('.page-navbar__container').classList.toggle('hidden');
  document.querySelector('#hamburger-close').classList.toggle('hidden');
  document.querySelectorAll('.hamburger__line').forEach(function (line) {
    line.classList.toggle('hidden');
  });
}

hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', toggleHamburger);
hamburgerPhone === null || hamburgerPhone === void 0 ? void 0 : hamburgerPhone.addEventListener('click', toggleHamburgerPhone);
pageHamburger === null || pageHamburger === void 0 ? void 0 : pageHamburger.addEventListener('click', togglePageHamburger);

if (document.querySelector('.telegram-logo')) {
  document.querySelector('.telegram-logo').src = telegram_namespaceObject;
}

if (document.querySelector('.insta-logo')) {
  document.querySelector('.insta-logo').src = instagram_namespaceObject;
}

if (document.querySelector('.vk-logo')) {
  document.querySelector('.vk-logo').src = vk_namespaceObject;
}

if (document.querySelector('.recycle-logo')) {
  document.querySelector('.recycle-logo').src = recycle_namespaceObject;
} // search icon


var search = document.querySelector('.search-icon');
if (search) search.src = search_namespaceObject; // back icon

var hamburger_back = document.querySelector('.back-icon');
if (hamburger_back) hamburger_back.src = arrow_namespaceObject;
// EXTERNAL MODULE: ./src/javascript/promo.js
var promo = __webpack_require__(761);
// EXTERNAL MODULE: ./src/javascript/slider.js
var slider = __webpack_require__(327);
// EXTERNAL MODULE: ./src/javascript/styleguide.js
var styleguide = __webpack_require__(529);
// EXTERNAL MODULE: ./src/javascript/mindmap/trash/mindmappagetrash1.js
var mindmappagetrash1 = __webpack_require__(728);
// EXTERNAL MODULE: ./src/javascript/mindmap/food/mindmappagefood1.js
var mindmappagefood1 = __webpack_require__(740);
// EXTERNAL MODULE: ./src/javascript/mindmap/food/mindmappagefood2.js
var mindmappagefood2 = __webpack_require__(108);
// EXTERNAL MODULE: ./src/javascript/mindmap/clothes/mindmappageclothes1.js
var mindmappageclothes1 = __webpack_require__(358);
// EXTERNAL MODULE: ./src/javascript/mindmap/clothes/mindmappageclothes2.js
var mindmappageclothes2 = __webpack_require__(635);
// EXTERNAL MODULE: ./src/javascript/searchandfilter.js
var searchandfilter = __webpack_require__(821);
// EXTERNAL MODULE: ./src/javascript/maprecyclingplases/glass.js
var glass = __webpack_require__(878);
// EXTERNAL MODULE: ./src/javascript/maprecyclingplases/plastic.js
var plastic = __webpack_require__(667);
// EXTERNAL MODULE: ./src/javascript/maprecyclingplases/paper.js
var paper = __webpack_require__(839);
// EXTERNAL MODULE: ./src/javascript/maprecyclingplases/clothes.js
var clothes = __webpack_require__(829);
// EXTERNAL MODULE: ./src/javascript/maprecyclingplases/metal.js
var metal = __webpack_require__(195);
// EXTERNAL MODULE: ./src/javascript/mappage.js
var mappage = __webpack_require__(551);
// EXTERNAL MODULE: ./src/javascript/indexsearch.js
var indexsearch = __webpack_require__(360);
// EXTERNAL MODULE: ./src/javascript/buttons.js
var buttons = __webpack_require__(808);
;// CONCATENATED MODULE: ./src/index.js




















})();

/******/ })()
;