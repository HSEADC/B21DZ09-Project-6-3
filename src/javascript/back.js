document?.addEventListener('DOMContentLoaded', function () {
  const backButton = document.querySelector('.Q_GoBack')
  backButton?.addEventListener('click', function () {
    if (document.referrer) {
      window.location.href = document.referrer
    } else {
      // Ваш fallback-код, если document.referrer недоступен
      // Например, перенаправление на главную страницу
      window.location.href = '/'
    }
  })
})
