import telegramLogo from '../images/telegram.svg'
import vkLogo from '../images/vk.svg'
import instagramLogo from '../images/instagram.svg'
import recycleLogo from '../images/promo/recycle.svg'
import searchIcon from '../images/search.svg'
import backIcon from '../images/arrow.svg'

const hamburger = document.querySelector('#hamburger')
const pageHamburger = document.querySelector('#page-hamburger')

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden')
  document.querySelector('#hamburger-close').classList.toggle('hidden')
  document.querySelectorAll('.hamburger__line').forEach((line) => {
    line.classList.toggle('hidden')
  })
}

function togglePageHamburger() {
  document.querySelector('.page-navbar__container').classList.toggle('hidden')
  document.querySelector('#hamburger-close').classList.toggle('hidden')
  document.querySelectorAll('.hamburger__line').forEach((line) => {
    line.classList.toggle('hidden')
  })
}

hamburger?.addEventListener('click', toggleHamburger)
pageHamburger?.addEventListener('click', togglePageHamburger)

document.querySelector('.telegram-logo').src = telegramLogo
document.querySelector('.insta-logo').src = instagramLogo
document.querySelector('.vk-logo').src = vkLogo
document.querySelector('.recycle-logo').src = recycleLogo

// search icon
document.querySelector('.search-icon').src = searchIcon

// back icon
document.querySelector('.back-icon').src = backIcon
