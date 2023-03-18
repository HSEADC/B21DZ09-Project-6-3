mapboxgl.accessToken =
  'pk.eyJ1Ijoic21zYWxpc2NoZXZhMjIiLCJhIjoiY2xmNzF4eWZsMDJzODQ0bnZnNXFiYmd0cyJ9.TXlxfRR7GHif7rBbRWqOZw' // замените на свой токен Mapbox

const map = new mapboxgl.Map({
  container: document.querySelector('.Q_Map'),
  style: 'mapbox://styles/smsalischeva22/clf78rxpu00do01mltwb5aj5r',
  center: [37.618423, 55.751244],
  zoom: 10
})

// Находим кнопку по id
const button = document.querySelector('#glass')
let markers = []
let clickCount = 0

button.addEventListener('click', function () {
  clickCount++ // увеличиваем количество нажатий на кнопку

  const glassRecyclingPlaces = [
    {
      name: 'Москва, Мосфильмовская улица, 80А',
      coordinates: [37.499812, 55.707162],
      description: 'Стеклобой'
    },
    {
      name: 'Москва, Мичуринский проспект, 9к2',
      coordinates: [37.509002, 55.701506],
      description: 'Стеклобой'
    },
    {
      name: 'Москва, Мичуринский проспект, 19к1',
      coordinates: [37.505283, 55.69798],
      description: 'Стеклобой'
    },
    {
      name: 'Москва, Мичуринский проспект, 25к2',
      coordinates: [37.504564, 55.696316],
      description: 'Стеклобой'
    },
    {
      name: 'Москва, Ленинский проспект, 30',
      coordinates: [37.58385, 55.710641],
      description: 'Стеклобой'
    },
    {
      name: 'Москва, улица Вавилова, 2',
      coordinates: [37.591943, 55.709637],
      description: 'Стеклобой'
    },
    {
      name: 'Москва, Расторгуевский переулок, 16с1',
      coordinates: [37.565156, 55.765959],
      description: 'Колокольчики'
    },
    {
      name: 'Москва, улица Хамовнический Вал',
      coordinates: [37.563045, 55.720727],
      description: 'Колокольчики'
    },
    {
      name: 'Москва, улица Дурова, 3/13',
      coordinates: [37.62064201324459, 55.78080415402429],
      description: 'Колокольчики'
    },
    {
      name: 'Москва, парк Красногвардейские пруды',
      coordinates: [37.545087, 55.760996],
      description: 'Колокольчики'
    },
    {
      name: 'Гомель, Фестивальный парк',
      coordinates: [30.943117, 52.408814],
      description: 'Колокольчики'
    },
    {
      name: 'Москва, Кутузовский проспект, 16',
      coordinates: [37.553576, 55.747282],
      description: 'Колокольчики'
    },
    {
      name: 'Гомель, Фестивальный парк',
      coordinates: [30.943117, 52.408814],
      description: 'Колокольчики'
    },
    {
      name: 'Бережковская наб., 22 (у Роскосмоса)',
      coordinates: [37.455753, 55.723431],
      description: 'Колокольчики'
    },
    {
      name: 'Cквер за «Mc Donals’s» по ул. Б. Дорогомиловская',
      coordinates: [37.550357, 55.747111],
      description: 'Колокольчики'
    },
    {
      name: 'Пруд у Красных Зорь, д. 47',
      coordinates: [37.7635, 55.8707],
      description: 'Колокольчики'
    },
    {
      name: 'Парк Сквер рядом с ул. Кастанаевская, д.51к3',
      coordinates: [37.6757, 55.7316],
      description: 'Колокольчики'
    },
    {
      name: 'Парк Ж/д станция Очаково',
      coordinates: [37.4079, 55.6535],
      description: 'Колокольчики'
    },
    {
      name: 'Парк Большой Очаковский пруд',
      coordinates: [37.4116, 55.6473],
      description: 'Колокольчики'
    },
    {
      name: 'ТПУ метро Озерная, напротив выхода №2',
      coordinates: [37.4337, 55.6251],
      description: 'Колокольчики'
    },
    {
      name: 'ТПУ метро Озерная, напротив выхода №3',
      coordinates: [37.4335, 55.6245],
      description: 'Колокольчики'
    },
    {
      name: 'ТПУ метро Озерная, напротив выхода №4',
      coordinates: [37.434, 55.6241],
      description: 'Колокольчики'
    },
    {
      name: 'Парк Парк Удальцовские пруды',
      coordinates: [37.4951, 55.7215],
      description: 'Колокольчики'
    },
    {
      name: 'Парк Пруды на проспекте Вернадского (пр. Вернадского, д.59)',
      coordinates: [37.4979, 55.6769],
      description: 'Колокольчики'
    },
    {
      name:
        'Парк Новопеределкино, парк около ул. Лукинская, д.14к1 и д.18к1, две площадки',
      coordinates: [37.3588, 55.6241],
      description: 'Колокольчики'
    },
    {
      name: 'Парк Новопеределкино, у дома по ул. Новопеределкинская, д. 14',
      coordinates: [37.3573, 55.6241],
      description: 'Колокольчики'
    },
    {
      name:
        'Парк Центральный: спуск к Большому Солнцевскому пруду, у остановки',
      coordinates: [37.4446, 55.7598],
      description: 'Колокольчики'
    },

    { name: 'Переработка стекла №3', coordinates: [37.613773, 55.754795] }
  ]

  // Добавляем символы на карту, если количество нажатий нечетное
  if (clickCount % 2 === 1) {
    glassRecyclingPlaces.forEach(function (place) {
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

      // Добавляем символ на карту
      map.addLayer({
        id: place.name,
        type: 'circle',
        source: place.name,
        paint: {
          'circle-color': 'blue',
          'circle-radius': 10
        }
      })
    })
  } else {
    // удаляем символы с карты, если количество нажатий четное
    glassRecyclingPlaces.forEach(function (place) {
      map.removeLayer(place.name)
      map.removeSource(place.name)
    })
  }
})

// finding metro station

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
