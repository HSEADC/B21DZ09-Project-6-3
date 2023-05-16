document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('.A_SearchInput');
  var cards = document.querySelectorAll('.M_SearchAndFiltersPageCard');
  var categories = document.querySelectorAll('.A_SearchAndFilterCard');
  var filterArrow = document.querySelector('.Q_FilterPageArrowImage1');
  var searchAndFilterCards = document.querySelector('.W_SearchAndFilterCards');
  var titleSearchAndFilterPage = document.querySelector('.A_TitleSearchAndFilterPage');
  var searchQuery = '';
  var activeCategories = [];
  var filterArrowClickCount = 0; // filterArrow.addEventListener('click', function (event) {
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
      var categoryValue = category.getAttribute('data-category').toLowerCase();

      if (activeCategories.includes(categoryValue)) {
        activeCategories.splice(activeCategories.indexOf(categoryValue), 1);
        category.classList.remove('textopacity');
      } else {
        activeCategories.push(categoryValue);
        category.classList.add('textopacity');
      }

      cards.forEach(function (card) {
        var keywords = card.getAttribute('data-keywords').toLowerCase();
        var cardCategory = card.getAttribute('data-category').toLowerCase();

        if (keywords.includes(searchQuery) && (activeCategories.length === 0 || activeCategories.includes(cardCategory))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});