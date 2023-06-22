const toggleButton = document.querySelector('.Q_BurgerMenuIqon')
const overlay = document.querySelector('.O_BurgerMenu')
const header = document.querySelector('.W_Header')

toggleButton?.addEventListener('click', function () {
  if (overlay.style.display === 'none' || overlay.style.display === '') {
    overlay.style.display = 'flex'
    header.style.position = 'fixed'
    header.style.top = '0'
    document.body.style.paddingTop = header.offsetHeight + 'px'
  } else {
    overlay.style.display = 'none'
    header.style.position = 'static'
    document.body.style.paddingTop = '0'
  }
})
