document.addEventListener('DOMContentLoaded', function () {
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

  const backButton = document.querySelector('.Q_GoBack')
  backButton.addEventListener('click', function () {
    history.back()
  })

  // filterArrow.addEventListener('click', function (event) {
  //   filterArrowClickCount++
  //   searchAndFilterCards.style.height =
  //     filterArrowClickCount % 2 === 0 ? '6.15vw' : 'fit-content'
  //   titleSearchAndFilterPage.classList.toggle('borderbottom')
  //   filterArrow.classList.toggle('Q_FilterPageArrowImage2')
  //   event.stopPropagation()
  // })

  // input.addEventListener('input', function () {
  //   searchQuery = input.value.trim().toLowerCase()
  //   cards.forEach(function (card) {
  //     const keywords = card.getAttribute('data-keywords').toLowerCase()
  //     if (
  //       keywords.includes(searchQuery) &&
  //       (activeCategories.length === 0 ||
  //         activeCategories.includes(
  //           card.getAttribute('data-category').toLowerCase()
  //         ))
  //     ) {
  //       card.style.display = 'flex'
  //     } else {
  //       card.style.display = 'none'
  //     }
  //   })
  // })

  categories.forEach(function (category) {
    category.addEventListener('click', function () {
      const categoryValue = category.getAttribute('data-category').toLowerCase()
      if (activeCategories.includes(categoryValue)) {
        activeCategories.splice(activeCategories.indexOf(categoryValue), 1)
        category.classList.remove('textopacity')
      } else {
        activeCategories.push(categoryValue)
        category.classList.add('textopacity')
      }
      cards.forEach(function (card) {
        const keywords = card.getAttribute('data-keywords').toLowerCase()
        const cardCategory = card.getAttribute('data-category').toLowerCase()
        if (
          keywords.includes(searchQuery) &&
          (activeCategories.length === 0 ||
            activeCategories.includes(cardCategory))
        ) {
          card.style.display = 'flex'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
})
