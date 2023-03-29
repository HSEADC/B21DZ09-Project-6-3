document.addEventListener('DOMContentLoaded', function () {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic21zYWxpc2NoZXZhMjIiLCJhIjoiY2xmNzF4eWZsMDJzODQ0bnZnNXFiYmd0cyJ9.TXlxfRR7GHif7rBbRWqOZw' // замените на свой токен Mapbox

  const map = new mapboxgl.Map({
    container: document.querySelector('.Q_Map'),
    style: 'mapbox://styles/smsalischeva22/clf78rxpu00do01mltwb5aj5r',
    center: [37.618423, 55.751244],
    zoom: 10
  })
  const class1 = document.querySelector('.A_TitleAuxiliaryMap')
  const class2 = document.querySelector('.A_TextDependentMap')
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

          const A_TextImportantBottomMap = document.querySelector(
            '.A_TextImportantBottomMap'
          )
          A_TextImportantBottomMap.innerHTML = ''
          A_TextImportantBottomMap.appendChild(markerName)
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

  glassButton.addEventListener('click', function () {
    hideMarkers('plastic')
    hideMarkers('paper')
    hideMarkers('metal')
    hideMarkers('clothes')
    showMarkers('glass')

    const A_TextImportantBottomMap = document.querySelector(
      '.A_TextImportantBottomMap'
    )
    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild)
    }

    class1.textContent = 'Утилизация стекла'
    class2.textContent =
      'Правильная утилизация стекла позволит его переработать и\u00A0использовать повторно, что\u00A0ипозволяет экономить на\u00A0идобыче новых сырьевых материалов и\u00A0иснижать негативное воздействие на\u00A0иокружающую среду. Кроме того, утилизация стекла может сократить количество отходов на\u00A0исвалках и\u00A0иуменьшить затраты на\u00A0исбор и\u00A0иобработку мусора.'
  })

  plasticButton.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('paper')
    hideMarkers('metal')
    hideMarkers('clothes')
    showMarkers('plastic')

    const A_TextImportantBottomMap = document.querySelector(
      '.A_TextImportantBottomMap'
    )
    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild)
    }

    class1.textContent = 'Утилизация пластика'
    class2.textContent =
      'Утилизация пластика является важным экологическим вопросом, поскольку пластиковые отходы могут нанести серьезный вред окружающей среде и\u00A0иживым организмам. Некоторые виды пластика могут разлагаться на\u00A0ипротяжении сотен лет, загрязняя водные и\u00A0иназемные экосистемы, что\u00A0иможет привести к\u00A0игибели животных и\u00A0иразрушить их\u00A0иместообитания.'
  })

  paperButton.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('plastic')
    hideMarkers('metal')
    hideMarkers('clothes')
    showMarkers('paper')

    const A_TextImportantBottomMap = document.querySelector(
      '.A_TextImportantBottomMap'
    )
    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild)
    }

    class1.textContent = 'Утилизация бумаги'
    class2.textContent =
      'Бумага производится из\u00A0идревесных волокон, которые не\u00A0итолько являются ограниченным ресурсом, но\u00A0ии\u00A0иих добыча приводит к\u00A0ивырубке лесов, уменьшению биоразнообразия и\u00A0иизменению климата. Кроме того, складирование неиспользуемой бумаги на\u00A0исвалках приводит к\u00A0изагрязнению почвы и\u00A0иводы, а\u00A0итакже\u00A0ивыбросу парниковых газов. Утилизация бумаги позволяет повторно использовать ее в\u00A0икачестве сырья для\u00A0ипроизводства новой бумаги, что\u00A0исокращает потребление древесных ресурсов. Кроме того, утилизация бумаги помогает сократить объем отходов, которые попадают на\u00A0исвалки'
  })

  metalButton.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('plastic')
    hideMarkers('paper')
    hideMarkers('clothes')
    showMarkers('metal')

    const A_TextImportantBottomMap = document.querySelector(
      '.A_TextImportantBottomMap'
    )
    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild)
    }

    class1.textContent = 'Утилизация металла'
    class2.textContent =
      'Металлы являются ценными ресурсами, которые могут быть переработаны и\u00A0ииспользованы повторно, вместо того чтобы\u00A0ибыть выброшенными на\u00A0исвалку и\u00A0изагрязнять окружающую среду. Утилизация металла также позволяет сэкономить энергию и\u00A0иресурсы, необходимые для\u00A0ипроизводства нового металла. В\u00A0ипроцессе переработки металла происходит снижение выбросов парниковых газов и\u00A0идругих вредных веществ, которые могут негативно влиять на\u00A0иокружающую среду.'
  })

  clothesButton.addEventListener('click', function () {
    hideMarkers('glass')
    hideMarkers('plastic')
    hideMarkers('paper')
    hideMarkers('metal')
    showMarkers('clothes')

    const A_TextImportantBottomMap = document.querySelector(
      '.A_TextImportantBottomMap'
    )
    while (A_TextImportantBottomMap.firstChild) {
      A_TextImportantBottomMap.removeChild(A_TextImportantBottomMap.firstChild)
    }

    class1.textContent = 'Утилизация одежды'
    class2.textContent =
      'Утилизация одежды является важной практикой, поскольку она позволяет снизить воздействие текстильной промышленности на\u00A0иокружающую среду. Каждый год миллионы тонн одежды выбрасываются на\u00A0исвалки, где они разлагаются на\u00A0ипротяжении многих лет, загрязняя землю, воду и\u00A0ивоздух. Кроме того, большинство одежды содержит синтетические материалы, которые не\u00A0имогут быть переработаны и\u00A0ив\u00A0иконечном итоге становятся микропластиком, попадающим в\u00A0иокеаны и\u00A0иугрожающим жизни морских животных.'
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
