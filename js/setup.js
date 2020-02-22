'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(147, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

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

// Паказывает окно с волшебниками
var showPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

// 8. Учебный проект: одеть Надежду
// Открытие/закрытие окна настройки персонажа:
var popupSetup = document.querySelector('.setup');
var popupBtnOpen = document.querySelector('.setup-open');
var popupBtnClose = document.querySelector('.setup-close');
var inputName = document.querySelector('.setup-user-name');

var keyboard = {
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

var onPopupEscPress = function (evt) {
  keyboard.isEscEvent(evt, closePopup);
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

// * Когда окно настройки персонажа открыто, нажатие
// на клавишу ESC должно закрывать диалог
var closePopup = function () {
  popupSetup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// *Если фокус находится на форме ввода имени, то окно закрываться не должно.
inputName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

inputName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

popupBtnOpen.addEventListener('keydown', function (evt) {
  keyboard.isEnterEvent(evt, openPopup);
});

// * Если окно открыто и фокус находится на кнопке закрытия окна,
// то нажатие клавиши ENTER должно приводить к закрытию диалога
popupBtnClose.addEventListener('keydown', function (evt) {
  keyboard.isEscEvent(evt, closePopup);
});

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
