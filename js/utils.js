'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  window.utils = {
    isEscEvent: function (evt, callback) {
      if (evt.key === ESC_KEY) {
        callback();
      }
    },
    isEnterEvent: function (evt, callback) {
      if (evt.key === ENTER_KEY) {
        callback();
      }
    }
  };
})();
