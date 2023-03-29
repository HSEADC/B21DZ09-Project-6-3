document.addEventListener('DOMContentLoaded', function () {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic21zYWxpc2NoZXZhMjIiLCJhIjoiY2xmNzF4eWZsMDJzODQ0bnZnNXFiYmd0cyJ9.TXlxfRR7GHif7rBbRWqOZw' // замените на свой токен Mapbox

  const map = new mapboxgl.Map({
    container: document.querySelector('.Q_Map'),
    style: 'mapbox://styles/smsalischeva22/clf78rxpu00do01mltwb5aj5r',
    center: [37.618423, 55.751244],
    zoom: 10
  })

  const categorySelector = document.querySelector('#category-selector')
  const glassButton = document.querySelector('#glass')
  const plasticButton = document.querySelector('#plastic')
  const clothesButton = document.querySelector('#clothes')
  const paperButton = document.querySelector('#paper')
  const metalButton = document.querySelector('#metal')

  let markers = []

  function showMarkers(category) {
    let filteredPlaces
    if (category === 'glass') {
      filteredPlaces = glassRecyclingPlaces.filter(
        (place) => place.description === 'Стекло'
      )
    } else if (category === 'plastic') {
      filteredPlaces = plasticRecyclingPlaces.filter(
        (place) => place.description === 'Пластик'
      )
    } else if (category === 'paper') {
      filteredPlaces = paperRecyclingPlaces.filter(
        (place) => place.description === 'Бумага'
      )
    } else if (category === 'metal') {
      filteredPlaces = metalRecyclingPlaces.filter(
        (place) => place.description === 'Метал'
      )
    } else if (category === 'clothes') {
      filteredPlaces = clothesRecyclingPlaces.filter(
        (place) => place.description === 'Одежда'
      )
    }

    filteredPlaces.forEach((place) => {
      if (!markers.includes(place.name)) {
        markers.push(place.name)
        map.addSource(place.name, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: place.coordinates
                },
                properties: {
                  title: place.name,
                  icon: 'marker'
                }
              }
            ]
          }
        })

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
        })

        map.on('click', place.name, function (e) {
          const coordinates = e.features[0].geometry.coordinates.slice()
          const name = e.features[0].properties.title

          const markerName = document.createElement('h4')
          markerName.textContent = name

          const M_MapPagePointInformation = document.querySelector(
            '.M_MapPagePointInformation'
          )
          M_MapPagePointInformation.innerHTML = ''
          M_MapPagePointInformation.appendChild(markerName)
        })

        function getColor(category) {
          switch (category) {
            case 'glass':
              return '#1ebcb1'
            case 'metal':
              return '#f45e4e'
            case 'plastic':
              return '#b0d3ff'
            case 'paper':
              return '#a15fff'
            case 'clothes':
              return '#ece700'
          }
        }
      }
    })
  }

  function hideMarkers(category) {
    let filteredPlaces
    if (category === 'glass') {
      filteredPlaces = glassRecyclingPlaces.filter(
        (place) => place.description === 'Стекло'
      )
    } else if (category === 'plastic') {
      filteredPlaces = plasticRecyclingPlaces.filter(
        (place) => place.description === 'Пластик'
      )
    } else if (category === 'paper') {
      filteredPlaces = paperRecyclingPlaces.filter(
        (place) => place.description === 'Бумага'
      )
    } else if (category === 'metal') {
      filteredPlaces = metalRecyclingPlaces.filter(
        (place) => place.description === 'Метал'
      )
    } else if (category === 'clothes') {
      filteredPlaces = clothesRecyclingPlaces.filter(
        (place) => place.description === 'Одежда'
      )
    }

    filteredPlaces.forEach((place) => {
      const index = markers.indexOf(place.name)
      if (index !== -1) {
        markers.splice(index, 1)
        if (map.getLayer(place.name)) {
          map.removeLayer(place.name)
        }
        if (map.getSource(place.name)) {
          map.removeSource(place.name)
        }
      }
    })
  }

  let clickCount1 = 0
  let clickCount2 = 0
  let clickCount3 = 0
  let clickCount4 = 0
  let clickCount5 = 0

  glassButton.addEventListener('click', function () {
    clickCount1++
    if (clickCount1 % 2 === 0) {
      hideMarkers('glass')
    } else {
      showMarkers('glass')
    }
  })

  plasticButton.addEventListener('click', function () {
    clickCount2++
    if (clickCount2 % 2 === 0) {
      hideMarkers('plastic')
    } else {
      showMarkers('plastic')
    }
  })

  paperButton.addEventListener('click', function () {
    clickCount3++
    if (clickCount3 % 2 === 0) {
      hideMarkers('paper')
    } else {
      showMarkers('paper')
    }
  })

  metalButton.addEventListener('click', function () {
    clickCount4++
    if (clickCount4 % 2 === 0) {
      hideMarkers('metal')
    } else {
      showMarkers('metal')
    }
  })

  clothesButton.addEventListener('click', function () {
    clickCount5++
    if (clickCount5 % 2 === 0) {
      hideMarkers('clothes')
    } else {
      showMarkers('clothes')
    }
  })

  // работа со станциями метро в мск
  const stationInput = document.getElementById('input')
  const stationButton = document.querySelector('.A_MapPageFindButton')

  stationButton.addEventListener('click', function () {
    const stationName = stationInput.value
    if (stationName) {
      fetch(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
          encodeURIComponent(stationName) +
          '.json?access_token=' +
          mapboxgl.accessToken
      )
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          if (data.features.length > 0) {
            const feature = data.features[0]
            const coordinates = feature.geometry.coordinates
            map.flyTo({
              center: coordinates,
              zoom: 14
            })
          } else {
            alert('Станция метро не найдена!')
          }
        })
    }
  })
})
