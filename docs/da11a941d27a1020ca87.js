var _document;

(_document = document) === null || _document === void 0 ? void 0 : _document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('.A_SearchInput');
  var cards = document.querySelectorAll('.M_SearchAndFiltersPageCard');
  var categories = document.querySelectorAll('.A_SearchAndFilterCard');
  var filterArrow = document.querySelector('.Q_FilterPageArrowImage1');
  var searchAndFilterCards = document.querySelector('.W_SearchAndFilterCards');
  var titleSearchAndFilterPage = document.querySelector('.A_TitleSearchAndFilterPage');
  var searchQuery = '';
  var activeCategories = [];
  var filterArrowClickCount = 0;
  categories.forEach(function (category) {
    category === null || category === void 0 ? void 0 : category.addEventListener('mouseover', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '0.4';
            cat.style.transition = 'opacity 0.15s ease-in-out';
          }
        });
      }
    });
    category === null || category === void 0 ? void 0 : category.addEventListener('mouseout', function () {
      if (filterArrowClickCount === 0) {
        categories.forEach(function (cat) {
          if (cat !== category) {
            cat.style.opacity = '1';
            cat.style.transition = 'opacity 0.15s ease-in-out';
          }
        });
      }
    });
    category === null || category === void 0 ? void 0 : category.addEventListener('click', function () {
      filterArrowClickCount++;
      var categoryValue = category.getAttribute('data-category').toLowerCase();

      if (activeCategories.includes(categoryValue)) {
        activeCategories.splice(activeCategories.indexOf(categoryValue), 1);
      } else {
        activeCategories.push(categoryValue);
      }

      categories.forEach(function (cat) {
        var catValue = cat.getAttribute('data-category').toLowerCase();

        if (activeCategories.includes(catValue)) {
          cat.style.opacity = '1';
          cat.style.transition = 'opacity 0.15s ease-in-out';
        } else {
          cat.style.opacity = '0.4';
          cat.style.transition = 'opacity 0.15s ease-in-out';
        }
      });
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