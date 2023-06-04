// Получаем все элементы с классом "menu-item"
var menuItems = document.querySelectorAll('.menu-item'); // Перебираем элементы и добавляем обработчик события наведения мыши

menuItems.forEach(function (menuItem) {
  var symbol = menuItem.querySelector('.Q_MainPageSymbol');
  menuItem === null || menuItem === void 0 ? void 0 : menuItem.addEventListener('mouseenter', function () {
    // Изменяем цвет текста и картинку всех пунктов меню, кроме текущего
    menuItems.forEach(function (item) {
      if (item !== menuItem) {
        item.style.transition = 'color 0.3s, opacity 0.3s';
        item.style.color = 'rgba(0, 0, 0, 0.4)';

        var _symbol = item.querySelector('.Q_MainPageSymbol');

        _symbol.style.transition = 'opacity 0.3s';
        _symbol.style.opacity = '0.4';
      }
    });
  }); // Восстанавливаем цвет текста и картинку всех пунктов меню при уходе мыши

  menuItem === null || menuItem === void 0 ? void 0 : menuItem.addEventListener('mouseleave', function () {
    menuItems.forEach(function (item) {
      item.style.transition = 'color 0.3s, opacity 0.3s';
      item.style.color = 'rgba(0, 0, 0, 1)';
      var symbol = item.querySelector('.Q_MainPageSymbol');
      symbol.style.transition = 'opacity 0.3s';
      symbol.style.opacity = '1';
    });
  });
});