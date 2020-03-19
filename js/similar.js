'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = [];
  var coatColor;
  var eyesColor;

  // рейтинг совпадений
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  // сортировка по имени
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  // загрузка магов
  var loadWizards = function (data) {
    wizards = data;
    updateWizards();
  };

  // фильтрация
  var updateWizards = function () {
    renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  // отрисовка мага
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // отрисовка магов
  var renderWizards = function (uniqueWizards) {
    var fragment = document.createDocumentFragment();
    // добавление магов во фрагмент
    for (var i = 0; i < window.data.wizardCount; i++) {
      fragment.appendChild(renderWizard(uniqueWizards[i]));
    }
    // очистка перед вставкой
    similarListElement.innerHTML = '';
    // добавление магов на страницу
    similarListElement.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  // подбор похожих магов при смене цвета плаща или глаз
  window.wizard.onCoatChange = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });
  window.wizard.onEyesChange = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  // загрузка данных
  window.backend.load(loadWizards, window.backend.onError);
})();
