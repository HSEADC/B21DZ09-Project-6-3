import telegramLogo from '../images/telegram.svg'
import vkLogo from '../images/vk.svg'
import instagramLogo from '../images/instagram.svg'
import recycleLogo from '../images/promo/recycle.svg'
import searchIcon from '../images/search.svg'
import backIcon from '../images/arrow.svg'

const hamburger = document.querySelector('#hamburger')
const hamburgerPhone = document.querySelector('#hamburger-phone')
const pageHamburger = document.querySelector('#page-hamburger')

function toggleHamburger() {
  document.querySelector('.menu__container').classList.toggle('hidden')
  document.querySelector('#hamburger-close').classList.toggle('hidden')
  document.querySelectorAll('.hamburger__line').forEach((line) => {
    line.classList.toggle('hidden')
  })
}

function toggleHamburgerPhone() {
  document.querySelector('.menu-phone__container').classList.toggle('hidden')
  document.querySelector('#hamburger-phone-close').classList.toggle('hidden')
  document.querySelectorAll('.hamburger-phone__line').forEach((line) => {
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
hamburgerPhone?.addEventListener('click', toggleHamburgerPhone)
pageHamburger?.addEventListener('click', togglePageHamburger)

if (document.querySelector('.telegram-logo')) {
  document.querySelector('.telegram-logo').src = telegramLogo
}

if (document.querySelector('.insta-logo')) {
  document.querySelector('.insta-logo').src = instagramLogo
}

if (document.querySelector('.vk-logo')) {
  document.querySelector('.vk-logo').src = vkLogo
}

if (document.querySelector('.recycle-logo')) {
  document.querySelector('.recycle-logo').src = recycleLogo
}

// search icon
const search = document.querySelector('.search-icon')
if (search) search.src = searchIcon

// back icon
const back = document.querySelector('.back-icon')
if (back) back.src = backIcon
