// Получаем все элементы с классом "menu-item"
const menuItems = document.querySelectorAll('.menu-item')

// Перебираем элементы и добавляем обработчик события наведения мыши
menuItems.forEach((menuItem) => {
  const symbol = menuItem.querySelector('.Q_MainPageSymbol')

  menuItem.addEventListener('mouseenter', () => {
    // Изменяем цвет текста и картинку всех пунктов меню, кроме текущего
    menuItems.forEach((item) => {
      if (item !== menuItem) {
        item.style.transition = 'color 0.3s, opacity 0.3s'
        item.style.color = 'rgba(0, 0, 0, 0.4)'
        const symbol = item.querySelector('.Q_MainPageSymbol')
        symbol.style.transition = 'opacity 0.3s'
        symbol.style.opacity = '0.4'
      }
    })
  })

  // Восстанавливаем цвет текста и картинку всех пунктов меню при уходе мыши
  menuItem.addEventListener('mouseleave', () => {
    menuItems.forEach((item) => {
      item.style.transition = 'color 0.3s, opacity 0.3s'
      item.style.color = 'rgba(0, 0, 0, 1)'
      const symbol = item.querySelector('.Q_MainPageSymbol')
      symbol.style.transition = 'opacity 0.3s'
      symbol.style.opacity = '1'
    })
  })
})
