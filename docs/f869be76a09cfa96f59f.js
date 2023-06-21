var _document;
(_document = document) === null || _document === void 0 ? void 0 : _document.addEventListener('DOMContentLoaded', function () {
  var colors = document.querySelectorAll('.A_MindMapPageChooseButton4');
  var playButton = document.getElementById('play4');
  var game = document.querySelector('.Q_MindMapPagePlayImage');
  var result = document.getElementById('result');
  var colorAnswers = {
    MindMap2Food1: 'yes',
    MindMap2Food2: 'no',
    MindMap2Food3: 'no',
    MindMap2Food4: 'yes',
    MindMap2Food5: 'yes',
    MindMap2Food6: 'no'
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
    game.classList.add("MindMap2Food".concat(currentImage + 1));
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
    if (colorAnswers["MindMap2Food".concat(currentImage)] === selectedColor) {
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
  playButton === null || playButton === void 0 ? void 0 : playButton.addEventListener('click', startGame);
  colors.forEach(function (color) {
    color === null || color === void 0 ? void 0 : color.addEventListener('click', handleColorClick);
  });
});