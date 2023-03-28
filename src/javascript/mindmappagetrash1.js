document.addEventListener('DOMContentLoaded', function () {
  const colors = document.querySelectorAll('.A_MindMapPageChooseCard')
  const playButton = document.getElementById('play')
  const restartButton = document.getElementById('restart')
  const game = document.querySelector('.Q_MindMapPagePlayImage')
  const result = document.getElementById('result')

  const colorAnswers = {
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
    game.classList.add(`MindMap${currentImage + 1}`)
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
    game.innerHTML = ''
    startGame()
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return
    }

    const selectedColor = e.target.id

    if (colorAnswers[`MindMap${currentImage}`] === selectedColor) {
      correctAnswers++
      e.target.classList.add('correct')
    } else {
      e.target.classList.add('incorrect')
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect')
      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false
        result.textContent = `You got ${correctAnswers} out of ${
          Object.keys(colorAnswers).length
        } correct!`
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
