const toggleButton = document.querySelector('.Q_BurgerMenuIqon')
const overlay = document.querySelector('.O_BurgerMenu')
const header = document.querySelector('.W_Header')

toggleButton?.addEventListener('click', function () {
  if (overlay.style.display === 'none' || overlay.style.display === '') {
    overlay.style.display = 'flex'
    header.style.position = 'fixed'
    header.style.top = '0'
    document.body.style.paddingTop = header.offsetHeight + 'px'
  } else {
    overlay.style.display = 'none'
    header.style.position = 'static'
    document.body.style.paddingTop = '0'
  }
})

const menuItems = document.querySelectorAll('.menu-item1')

// Перебираем элементы и добавляем обработчик события наведения мыши
menuItems.forEach((menuItem) => {
  const symbol = menuItem.querySelector('.Q_MainPageSymbol')

  menuItem?.addEventListener('mouseenter', () => {
    // Изменяем цвет текста и картинку всех пунктов меню, кроме текущего
    menuItems.forEach((item) => {
      if (item !== menuItem) {
        item.style.transition = 'color 0.3s, opacity 0.3s'
        item.style.color = 'rgba(0, 0, 0, 0.4)'
      }
    })
  })

  // Восстанавливаем цвет текста и картинку всех пунктов меню при уходе мыши
  menuItem?.addEventListener('mouseleave', () => {
    menuItems.forEach((item) => {
      item.style.transition = 'color 0.3s, opacity 0.3s'
      item.style.color = 'rgba(0, 0, 0, 1)'
    })
  })
})
