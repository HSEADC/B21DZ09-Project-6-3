const hamburger = document.querySelector('#hamburger')

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden')
  document.querySelector('#hamburger-close').classList.toggle('hidden')
  document.querySelectorAll('.hamburger__line').forEach((line) => {
    line.classList.toggle('hidden')
  })

}

hamburger.addEventListener('click', toggleHamburger)
