document.addEventListener('DOMContentLoaded', function () {
  // задаем токен
  var accessToken =
    'pk.eyJ1Ijoic21zYWxpc2NoZXZhMjIiLCJhIjoiY2xmNzF4eWZsMDJzODQ0bnZnNXFiYmd0cyJ9.TXlxfRR7GHif7rBbRWqOZw'

  // создаем новый объект карты
  var map = new mapboxgl.Map({
    container: document.querySelector('.Q_Map'),
    style: 'mapbox://styles/smsalischeva22/clf78rxpu00do01mltwb5aj5r',
    center: [37.618423, 55.751244],
    zoom: 10,
    accessToken: accessToken
  })

  const categorySelector = document.querySelector('#category-selector')
  const glassButton = document.querySelector('#glass')
  let markers = []

  function showMarkers(category) {
    const filteredPlaces = glassRecyclingPlaces.filter(
      (place) => place.description === category
    )

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
            'circle-color': 'blue',
            'circle-radius': 10
          }
        })
      }
    })
  }

  function hideMarkers(category) {
    const filteredPlaces = glassRecyclingPlaces.filter(
      (place) => place.description === category
    )

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

  categorySelector.addEventListener('change', function () {
    const category = categorySelector.value

    if (category === 'glasss') {
      hideMarkers('Колокольчики')
      showMarkers('Стеклобой')
    } else if (category === 'bells') {
      hideMarkers('Стеклобой')
      showMarkers('Колокольчики')
    }
  })

  let clickCount = 0
  glassButton.addEventListener('click', function () {
    clickCount++
    if (clickCount % 2 === 0) {
      hideMarkers('Колокольчики')
      hideMarkers('Стеклобой')
    } else {
      showMarkers('Колокольчики')
      showMarkers('Стеклобой')
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
