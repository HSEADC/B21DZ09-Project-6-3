import telegramLogo from '../images/telegram.svg'
import vkLogo from '../images/vk.svg'
import instagramLogo from '../images/instagram.svg'
import recycleLogo from '../images/promo/recycle.svg'

const hamburger = document.querySelector('#hamburger')

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden')
  document.querySelector('#hamburger-close').classList.toggle('hidden')
  document.querySelectorAll('.hamburger__line').forEach((line) => {
    line.classList.toggle('hidden')
  })

}

hamburger.addEventListener('click', toggleHamburger)

document.querySelector('.telegram-logo').src = telegramLogo
document.querySelector('.insta-logo').src = instagramLogo
document.querySelector('.vk-logo').src = vkLogo
document.querySelector('.recycle-logo').src = recycleLogo
