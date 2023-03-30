document.addEventListener('DOMContentLoaded', function () {
  const colors = document.querySelectorAll('.A_MindMapPageChooseCard')
  const playButton = document.getElementById('play')
  const restartButton = document.getElementById('restart')
  const game = document.querySelector('.Q_MindMapPagePlayImage')
  const result = document.getElementById('result')

  const colorAnswers = {
    MindMap1Clothes1: 'polkiclothes',
    MindMap1Clothes2: 'veshalkiclothes',
    MindMap1Clothes3: 'veshalkiclothes',
    MindMap1Clothes4: 'veshalkiclothes',
    MindMap1Clothes5: 'korobkiclothes',
    MindMap1Clothes6: 'kruchkiclothes',
    MindMap1Clothes7: 'kruchkiclothes',
    MindMap1Clothes8: 'veshalkiclothes'
  }
  let correctAnswers = 0
  let currentImage = 0

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return
    }

    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    game.className = 'Q_MindMapPagePlayImage'
    game.classList.add(`MindMap1Clothes${currentImage + 1}`)
    imageContainer.appendChild(image)
    game.appendChild(imageContainer)
    currentImage++
  }

  function startGame() {
    correctAnswers = 0
    currentImage = 0
    showNextImage()
    result.textContent = ''
    game.dataset.playing = true
  }

  function restartGame() {
    startGame()
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return
    }

    const selectedColor = e.target.id

    if (colorAnswers[`MindMap1Clothes${currentImage}`] === selectedColor) {
      correctAnswers++
      e.target.classList.add('correct')
    } else {
      e.target.classList.add('incorrect')
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect')
      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false
        result.textContent = `У вас ${correctAnswers} из ${
          Object.keys(colorAnswers).length
        } баллов!`
        return
      }
      showNextImage()
    }, 500)
  }

  playButton.addEventListener('click', startGame)
  restartButton.addEventListener('click', restartGame)

  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick)
  })
})
