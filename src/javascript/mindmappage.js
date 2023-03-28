$(document).ready(function () {
  const images = [
    {
      src:
        'https://sun9-31.userapi.com/impg/4kHfPO6h6VRBozLiiQgHcWVY1TPE6EMPEm0gRQ/j8SiM3J2O1Q.jpg?size=1081x889&quality=95&sign=e65175c81a592237969e1f338c275fe0&type=album',
      answer: 'red',
      src:
        'https://sun9-5.userapi.com/impg/XUyHa-DdvKTRGUD_jdge03OannJTXlJjyjSsrg/nwZYFCXEQt0.jpg?size=1081x889&quality=95&sign=ec9d26e2243dd04f1e4883c6468844cd&type=album',
      answer: 'yellow',
      src:
        'https://sun9-8.userapi.com/impg/11M6fDJxjCo4faiKEweuh6jJmgwubigScEhh8w/285f4aqsTFQ.jpg?size=1081x888&quality=95&sign=58892c9c5c484ad3d77463430061e4e1&type=album',
      answer: 'black',
      src:
        'https://sun9-6.userapi.com/impg/KjBNChkbDTF5d7ZexDDjLbewKSFqlQ5PLAtNYw/eQUmJA9M5rQ.jpg?size=1081x889&quality=95&sign=795be06c9785b44d5965fa16f0ce1059&type=album',
      answer: 'blue',
      src:
        'https://sun9-61.userapi.com/impg/N9IV6XB4gupxvhAvkm-MOawBp7eAmMRu8WyIEg/GLXfw6Tws0M.jpg?size=1081x889&quality=95&sign=f96a3edfbb6b6ad663c364e995fd1404&type=album',
      answer: 'red',
      src:
        'https://sun9-31.userapi.com/impg/ZY-FQz5OP9ymP85h9fyfsu0PRZFDm3IkGpGODg/zCaEp8qVGMU.jpg?size=1081x889&quality=95&sign=9616ab7824d51bf68c96fa7a4cfaa37e&type=album',
      answer: 'blue',
      src:
        'https://sun9-37.userapi.com/impg/3G9WdZXljlupylcGacdKE8HjZFLBLDcD6xZ1RQ/Zw5KlgByhDw.jpg?size=1081x888&quality=95&sign=2980f0c338de8a50a39b54c890882e49&type=album',
      answer: 'green',
      src:
        'https://sun9-70.userapi.com/impg/s4v0L92QDew4O_8jN2Ui-cWIMP9C_1c2JQhFBw/JBFCA_2AOb8.jpg?size=1081x888&quality=95&sign=7dafbeaa239d01bd996dd4e0d7826c5f&type=album',
      answer: 'red',
      src:
        'https://sun9-30.userapi.com/impg/EU9_shmVdeVOBPATR7KUMm1SMSR3YFahza9kAA/CrnYap5hNuk.jpg?size=1081x889&quality=95&sign=f98672a00df7d5cc94e3ff559ffa8be5&type=album',
      answer: 'yellow',
      src:
        'https://sun9-54.userapi.com/impg/imyMU4afLHDCMP4yu-beBbxXeGfYObSfbAlVzA/FofXZu6WRH0.jpg?size=1081x888&quality=95&sign=5330ef3eea8c46f8b2528904685e7fba&type=album',
      answer: 'green'
    }
  ]

  const colors = document.querySelectorAll('.A_MindMapPageChooseCard')

  const playButton = document.getElementById('play')

  const game = document.querySelector('.Q_MindMapPagePlayImage')

  const restartButton = document.getElementById('restart')

  const result = document.getElementById('result')

  let correctAnswers = 0
  let currentImage = 0

  shuffleArray(images)

  function showNextImage() {
    if (currentImage < images.length) {
      if (game.lastChild) {
        game.removeChild(game.lastChild)
      }
      const imageContainer = document.createElement('div')
      const image = document.createElement('img')
      image.src = images[currentImage].src
      image.style.maxWidth = '100%'
      image.style.maxHeight = '100%'
      image.style.objectFit = 'contain'
      imageContainer.style.overflow = 'hidden'
      imageContainer.style.maxWidth = '100%'
      imageContainer.style.maxHeight = '100%'
      imageContainer.appendChild(image)
      game.appendChild(imageContainer)
      currentImage++
    } else {
      result.textContent = `Number of correct answers: ${correctAnswers}`
      game.dataset.playing = false
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  function startGame() {
    correctAnswers = 0
    currentImage = 0

    game.dataset.playing = true

    game.innerHTML = ''

    showNextImage()
  }

  function restartGame() {
    result.textContent = ''
    startGame()
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return
    }

    if (e.target.id === images[currentImage - 1].answer) {
      e.target.classList.add('correct')
      correctAnswers++
    } else {
      e.target.classList.add('incorrect')
    }

    setTimeout(() => {
      e.target.classList.remove('correct', 'incorrect')
      showNextImage()
    }, 500)
  }

  colors.forEach((color) => color.addEventListener('click', handleColorClick))
  playButton.addEventListener('click', startGame)
  restartButton.addEventListener('click', restartGame)
})
