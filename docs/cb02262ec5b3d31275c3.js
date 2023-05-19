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