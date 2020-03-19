'use strict';

(function () {
  var DEBOUNCE__INTERVAL = 500;
  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE__INTERVAL);
    };
  };

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
