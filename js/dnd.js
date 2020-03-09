'use strict';

// Перемещение диалога
// диалог должен начинать двигаться за курсором мыши при нажатии (mousedown) на блок .upload
// диалог должен переставать двигаться за курсором мыши
// при отпускании (mouseup) кнопки мыши и оставаться на новом месте;
// при повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное

(function () {
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // Запоминает координаты точки, с которой начали перемещать диалог
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    // При каждом движении мыши обновляет смещение относительно первоначальной точки, чтобы диалог смещался на необходимую величину
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    // При отпускании кнопки мыши перестает слушать события движения мыши
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    // Обработчики события передвижения мыши и отпускания кнопки мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
