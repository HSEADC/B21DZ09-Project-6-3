window?.addEventListener('load', function () {
  if (typeof mapboxgl === 'undefined') return

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic21zYWxpc2NoZXZhMjIiLCJhIjoiY2xmNzF4eWZsMDJzODQ0bnZnNXFiYmd0cyJ9.TXlxfRR7GHif7rBbRWqOZw'

  const map = new mapboxgl.Map({
    container: document.getElementById('map'),
    style: 'mapbox://styles/smsalischeva22/clf78rxpu00do01mltwb5aj5r',
    center: [37.618423, 55.751244],
    zoom: 10
  })

  const class1 = document.querySelector('.A_TextTopMap')
  const class2 = document.querySelector('.A_TextBottomMap')
  const categorySelector = document.querySelector('#category-selector')
  const glassButton = document.querySelector('#glass')
  const plasticButton = document.querySelector('#plastic')
  const clothesButton = document.querySelector('#clothes')
  const paperButton = document.querySelector('#paper')
  const metalButton = document.querySelector('#metal')

  let markers = []

  const backButton = document.querySelector('.Q_GoBack')
  backButton?.addEventListener('click', function () {
    history.back()
  })

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

    filteredPlaces = filteredPlaces.filter(
      (f) => f.name && f.coordinates?.length
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
            'circle-color': getColor(category),
            'circle-radius': 12,
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1
          }
        })

        map.on('click', place.name, function (e) {
          const coordinates = e.features[0].geometry.coordinates.slice()
          console.log('click', coordinates)
          const name = e.features[0].properties.title

          // const markerName = document.createElement('h4')
          // markerName.textContent = name

          new mapboxgl.Popup().setLngLat(coordinates).setHTML(name).addTo(map)
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

  glassButton?.addEventListener('click', function () {
    hideMarkers('plastic')
    hideMarkers('paper')
    hideMarkers('metal')
    hideMarkers('clothes')
    showMarkers('glass')

    glassButton.style.backgroundColor = '#1EBCB1'
    glassButton.style.border = '2px solid black'
    glassButton.style.color = 'black'

    plasticButton.style.backgroundColor = 'black'
    plasticButton.style.border = '0px'
    plasticButton.style.color = '#f4f4f4'

    clothesButton.style.backgroundColor = 'black'
    clothesButton.style.border = '0px'
    clothesButton.style.color = '#f4f4f4'

    paperButton.style.backgroundColor = 'black'
    paperButton.style.border = '0px'
    paperButton.style.color = '#f4f4f4'

    metalButton.style.backgroundColor = 'black'
    metalButton.style.border = '0px'
    metalButton.style.color = '#f4f4f4'

    class1.textContent = 'Утилизация стекла'
    class2.textContent =
      'Правильная утилизация стекла позволит его переработать и\u00A0использовать повторно, что\u00A0позволяет экономить на\u00A0добыче новых сырьевых материалов и\u00A0снижать негативное воздействие на\u00A0окружающую среду.'
  })

  plasticButton?.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('paper')
    hideMarkers('metal')
    hideMarkers('clothes')
    showMarkers('plastic')

    glassButton.style.backgroundColor = 'black'
    glassButton.style.border = '0px'
    glassButton.style.color = '#f4f4f4'

    plasticButton.style.backgroundColor = '#B0D3FF'
    plasticButton.style.border = '2px solid black'
    plasticButton.style.color = 'black'

    clothesButton.style.backgroundColor = 'black'
    clothesButton.style.border = '0px'
    clothesButton.style.color = '#f4f4f4'

    paperButton.style.backgroundColor = 'black'
    paperButton.style.border = '0px'
    paperButton.style.color = '#f4f4f4'

    metalButton.style.backgroundColor = 'black'
    metalButton.style.border = '0px'
    metalButton.style.color = '#f4f4f4'

    class1.textContent = 'Утилизация пластика'
    class2.textContent =
      'Утилизация пластика является важным экологическим вопросом, поскольку пластиковые отходы могут нанести серьезный вред окружающей среде и\u00A0живым организмам.'
  })

  paperButton?.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('plastic')
    hideMarkers('metal')
    hideMarkers('clothes')
    showMarkers('paper')

    glassButton.style.backgroundColor = 'black'
    glassButton.style.border = '0px'
    glassButton.style.color = '#f4f4f4'

    plasticButton.style.backgroundColor = 'black'
    plasticButton.style.border = '0px'
    plasticButton.style.color = '#f4f4f4'

    clothesButton.style.backgroundColor = 'black'
    clothesButton.style.border = '0px'
    clothesButton.style.color = '#f4f4f4'

    paperButton.style.backgroundColor = '#A15FFF'
    paperButton.style.border = '2px solid black'
    paperButton.style.color = 'black'

    metalButton.style.backgroundColor = 'black'
    metalButton.style.border = '0px'
    metalButton.style.color = '#f4f4f4'

    class1.textContent = 'Утилизация бумаги'
    class2.textContent =
      'Бумага производится из\u00A0древесных волокон, которые не\u00A0только являются ограниченным ресурсом, но\u00A0и\u00A0их добыча приводит к\u00A0вырубке лесов, уменьшению биоразнообразия и\u00A0изменению климата.'
  })

  metalButton?.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('plastic')
    hideMarkers('paper')
    hideMarkers('clothes')
    showMarkers('metal')

    glassButton.style.backgroundColor = 'black'
    glassButton.style.border = '0px'
    glassButton.style.color = '#f4f4f4'

    plasticButton.style.backgroundColor = 'black'
    plasticButton.style.border = '0px'
    plasticButton.style.color = '#f4f4f4'

    clothesButton.style.backgroundColor = 'black'
    clothesButton.style.border = '0px'
    clothesButton.style.color = '#f4f4f4'

    paperButton.style.backgroundColor = 'black'
    paperButton.style.border = '0px'
    paperButton.style.color = '#f4f4f4'

    metalButton.style.backgroundColor = '#F45E4E'
    metalButton.style.border = '2px solid black'
    metalButton.style.color = 'black'

    class1.textContent = 'Утилизация металла'
    class2.textContent =
      'Металлы являются ценными ресурсами, которые могут быть переработаны и\u00A0использованы повторно, вместо того чтобы\u00A0быть выброшенными на\u00A0свалку и\u00A0загрязнять окружающую среду. Утилизация металла также позволяет сэкономить энергию и\u00A0ресурсы, необходимые для\u00A0производства нового металла.'
  })

  clothesButton?.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('plastic')
    hideMarkers('paper')
    hideMarkers('metal')
    showMarkers('clothes')

    glassButton.style.backgroundColor = 'black'
    glassButton.style.border = '0px'
    glassButton.style.color = '#f4f4f4'

    plasticButton.style.backgroundColor = 'black'
    plasticButton.style.border = '0px'
    plasticButton.style.color = '#f4f4f4'

    clothesButton.style.backgroundColor = '#ECE700'
    clothesButton.style.border = '2px solid black'
    clothesButton.style.color = 'black'

    paperButton.style.backgroundColor = 'black'
    paperButton.style.border = '0px'
    paperButton.style.color = '#f4f4f4'

    metalButton.style.backgroundColor = 'black'
    metalButton.style.border = '0px'
    metalButton.style.color = '#f4f4f4'

    class1.textContent = 'Утилизация одежды'
    class2.textContent =
      'Утилизация одежды является важной практикой, поскольку она позволяет снизить воздействие текстильной промышленности на\u00A0окружающую среду. Каждый год миллионы тонн одежды выбрасываются на\u00A0свалки, где они разлагаются на\u00A0протяжении многих лет, загрязняя землю, воду и\u00A0воздух.'
  })

  // работа со станциями метро в мск
  const stationInput = document.getElementById('input')
  const stationButton = document.querySelector('.A_MapPageFindButton')

  stationButton?.addEventListener('click', function () {
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
