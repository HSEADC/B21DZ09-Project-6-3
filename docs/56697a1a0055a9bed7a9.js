var images = [{
  src: '/scr/images/mindmap/im1.png',
  answer: 'red'
}, {
  src: '/scr/images/mindmap/im2.png',
  answer: 'yellow'
}, {
  src: '/scr/images/mindmap/im3.png',
  answer: 'blue'
}];
var colors = document.querySelectorAll('.A_MindMapPageChooseCard');
var playButton = document.getElementById('play');
var game = document.querySelector('.Q_MindMapPagePlayImage');
var restartButton = document.getElementById('restart');
var result = document.getElementById('result');
var correctAnswers = 0;
var currentImage = 0;
shuffleArray(images);

function showNextImage() {
  if (currentImage < images.length) {
    if (game.lastChild) {
      game.removeChild(game.lastChild);
    }

    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    image.src = images[currentImage].src;
    imageContainer.appendChild(image);
    game.appendChild(imageContainer);
    currentImage++;
  } else {
    result.textContent = "Number of correct answers: ".concat(correctAnswers);
    game.dataset.playing = false;
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

function startGame() {
  correctAnswers = 0;
  currentImage = 0;
  game.dataset.playing = true;
  game.innerHTML = '';
  showNextImage();
}

function restartGame() {
  result.textContent = '';
  startGame();
}

function handleColorClick(e) {
  if (!game.dataset.playing) {
    return;
  }

  if (e.target.id === images[currentImage - 1].answer) {
    e.target.classList.add('correct');
    correctAnswers++;
  } else {
    e.target.classList.add('incorrect');
  }

  setTimeout(function () {
    e.target.classList.remove('correct', 'incorrect');
    showNextImage();
  }, 500);
}

colors.forEach(function (color) {
  return color.addEventListener('click', handleColorClick);
});
playButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);