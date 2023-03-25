const input = document.querySelector('.A_SearchInput')
const cards = document.querySelectorAll('.M_SearchAndFiltersPageCard')
const categories = document.querySelectorAll('.A_SearchAndFilterCard')
const filterArrow = document.querySelector('.Q_FilterPageArrowImage1')
const searchAndFilterCards = document.querySelector('.W_SearchAndFilterCards')
const titleSearchAndFilterPage = document.querySelector(
  '.A_TitleSearchAndFilterPage'
)
let searchQuery = ''
let activeCategories = []
let filterArrowClickCount = 0

filterArrow.addEventListener('click', (event) => {
  filterArrowClickCount++
  searchAndFilterCards.style.height =
    filterArrowClickCount % 2 === 0 ? '6.15vw' : 'fit-content'
  titleSearchAndFilterPage.classList.toggle('borderbot')
  filterArrow.classList.toggle('Q_FilterPageArrowImage2')
  event.stopPropagation()
})

input.addEventListener('input', () => {
  searchQuery = input.value.trim().toLowerCase()
  cards.forEach((card) => {
    const keywords = card.getAttribute('data-keywords').toLowerCase()
    if (
      keywords.includes(searchQuery) &&
      (activeCategories.length === 0 ||
        activeCategories.includes(
          card.getAttribute('data-category').toLowerCase()
        ))
    ) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })
})

categories.forEach((category) => {
  category.addEventListener('click', () => {
    const categoryValue = category.getAttribute('data-category').toLowerCase()
    if (activeCategories.includes(categoryValue)) {
      activeCategories.splice(activeCategories.indexOf(categoryValue), 1)
      category.classList.remove('textopacity')
    } else {
      activeCategories.push(categoryValue)
      category.classList.add('textopacity')
    }
    cards.forEach((card) => {
      const keywords = card.getAttribute('data-keywords').toLowerCase()
      const cardCategory = card.getAttribute('data-category').toLowerCase()
      if (
        keywords.includes(searchQuery) &&
        (activeCategories.length === 0 ||
          activeCategories.includes(cardCategory))
      ) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  })
})