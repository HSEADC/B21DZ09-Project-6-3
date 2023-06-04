var _document;

(_document = document) === null || _document === void 0 ? void 0 : _document.addEventListener('DOMContentLoaded', function () {
  var backButton = document.querySelector('.Q_GoBack');
  backButton === null || backButton === void 0 ? void 0 : backButton.addEventListener('click', function () {
    if (document.referrer) {
      window.location.href = document.referrer;
    } else {
      // Ваш fallback-код, если document.referrer недоступен
      // Например, перенаправление на главную страницу
      window.location.href = '/';
    }
  });
});