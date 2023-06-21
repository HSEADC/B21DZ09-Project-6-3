document?.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.A_SearchInput')
  const cards = document.querySelectorAll('.W_ContentCard')
  const categories = document.querySelectorAll('.A_FilterPageChooseButton')
  const filterArrow = document.querySelector('.Q_FilterPageArrowImage1')
  const searchAndFilterCards = document.querySelector('.W_FilterPageButtons ')
  const titleSearchAndFilterPage = document.querySelector(
    '.A_TitleSearchAndFilterPage'
  )
  let searchQuery = ''
  let activeCategories = []
  let filterArrowClickCount = 0

  categories.forEach(function (category) {
    category?.addEventListener('mouseover', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '0.4'
            cat.style.transition = 'opacity 0.15s ease-in-out'
          }
        })
      }
    })

    category?.addEventListener('mouseout', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '1'
            cat.style.transition = 'opacity 0.15s ease-in-out'
          }
        })
      }
    })

    category?.addEventListener('click', function () {
      filterArrowClickCount++
      const categoryValue = category.getAttribute('data-category').toLowerCase()

      if (activeCategories.includes(categoryValue)) {
        activeCategories.splice(activeCategories.indexOf(categoryValue), 1)
      } else {
        activeCategories.push(categoryValue)
      }

      categories.forEach(function (cat) {
        const catValue = cat.getAttribute('data-category').toLowerCase()

        if (activeCategories.includes(catValue)) {
          cat.style.opacity = '1'
          cat.style.transition = 'opacity 0.15s ease-in-out'
        } else {
          cat.style.opacity = '0.4'
          cat.style.transition = 'opacity 0.15s ease-in-out'
        }
      })

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
