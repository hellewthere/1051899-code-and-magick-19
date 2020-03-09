'use strict';

// Открытие/закрытие окна настройки персонажа
(function () {
  var popupSetup = document.querySelector('.setup');
  var popupBtnOpen = document.querySelector('.setup-open');
  var popupBtnClose = document.querySelector('.setup-close');
  var inputName = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    window.utils.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    popupSetup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  popupBtnOpen.addEventListener('click', function () {
    openPopup();
  });

  popupBtnClose.addEventListener('click', function () {
    closePopup();
  });

  // Когда окно настройки персонажа открыто - нажатие ESC закрывает диалог
  var closePopup = function () {
    popupSetup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Если фокус находится на форме ввода имени - окно закрываться не должно
  inputName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  inputName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  popupBtnOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openPopup);
  });

  // Если фокус находится на кнопке закрытия - нажатие ENTER закрывает диалог
  popupBtnClose.addEventListener('keydown', function (evt) {
    window.utils.isEscEvent(evt, closePopup);
  });
})();
