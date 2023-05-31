var toggleButton = document.querySelector('.Q_Menu');
var overlay = document.querySelector('.C_Menu');
toggleButton.addEventListener('click', function () {
  if (overlay.style.display === 'none' || overlay.style.display === '') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
});