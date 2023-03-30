document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
  var playButton = document.getElementById('play');
  var restartButton = document.getElementById('restart');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap1Food1: 'breakfast',
    MindMap1Food2: 'all',
    MindMap1Food3: 'dinner',
    MindMap1Food4: 'breakfast',
    MindMap1Food5: 'dinner',
    MindMap1Food6: 'breakfast',
    MindMap1Food7: 'breakfast',
    MindMap1Food8: 'lunch',
    MindMap1Food9: 'breakfast',
    MindMap1Food10: 'dinner',
    MindMap1Food11: 'lunch'
  };
  var correctAnswers = 0;
  var currentImage = 0;

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return;
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    game.className = 'Q_MindMapPagePlayImage';
    game.classList.add("MindMap1Food".concat(currentImage + 1));
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  }

  function startGame() {
    correctAnswers = 0;
    currentImage = 0;
    showNextImage();
    result.textContent = '';
    game.dataset.playing = true;
  }

  function restartGame() {
    startGame();
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return;
    }

    var selectedColor = e.target.id;

    if (colorAnswers["MindMap1Food".concat(currentImage)] === selectedColor) {
      correctAnswers++;
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect');

      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false;
        result.textContent = "\u0423 \u0432\u0430\u0441 ".concat(correctAnswers, " \u0438\u0437 ").concat(Object.keys(colorAnswers).length, " \u0431\u0430\u043B\u043B\u043E\u0432!");
        return;
      }

      showNextImage();
    }, 500);
  }

  playButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', restartGame);
  colors.forEach(function (color) {
    color.addEventListener('click', handleColorClick);
  });
});