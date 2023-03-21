import imageSrc1 from '/images/mindmap/im1.png'
import imageSrc2 from '/images/mindmap/im2.png'
import imageSrc3 from '/images/mindmap/im3.png'

const images = [
  {
    src: imageSrc1,
    answer: 'red'
  },
  {
    src: imageSrc2,
    answer: 'yellow'
  },
  {
    src: imageSrc3,
    answer: 'blue'
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
