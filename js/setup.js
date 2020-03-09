'use strict';

(function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(147, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizard = document.querySelector('.setup-wizard');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var createPerson = function () {
    var wizardObj = {
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
      fireballColor: fireballColors[Math.floor(Math.random() * fireballColors.length)],
    };

    return wizardObj;
  };

  var createWizardsData = function () {
    var data = [];
    // 4 итерации цикла генерируют 4 персонажей
    for (var i = 0; i < 4; i++) {
      data.push(createPerson());
    }
    return data;
  };
  // переменная получает результат работы функции
  var myWizards = createWizardsData();

  var createWizard = function (wizardObj) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizardObj.name + ' ' + wizardObj.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardObj.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardObj.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (wizardsData) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsData.length; i++) {
      fragment.appendChild(createWizard(wizardsData[i]));
    }
    similarListElement.appendChild(fragment);
  };

  // Показывает окно с волшебниками
  var showPopup = function () {
    document.querySelector('.setup').classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Изменение деталей персонажа по клику
  var colorizeElements = function () {
    wizardCoat.addEventListener('click', function () {
      var wizardCoatColor = getRandomElement(coatColors);
      setupWizard.querySelector('.wizard-coat').style.fill = wizardCoatColor;
      setupPlayer.querySelector('input[name=coat-color]').value = wizardCoatColor;
    });

    wizardEyes.addEventListener('click', function () {
      var wizardEyesColor = getRandomElement(eyesColors);
      setupWizard.querySelector('.wizard-eyes').style.fill = wizardEyesColor;
      setupPlayer.querySelector('input[name=eyes-color]').value = wizardEyesColor;
    });

    wizardFireball.addEventListener('click', function () {
      var wizardFireballColor = getRandomElement(fireballColors);
      setupPlayer.querySelector('.setup-fireball-wrap').style.background = wizardFireballColor;
      setupPlayer.querySelector('input[name=fireball-color]').value = wizardFireballColor;
    });
  };

  renderWizards(myWizards);
  showPopup();
  colorizeElements();
})();
