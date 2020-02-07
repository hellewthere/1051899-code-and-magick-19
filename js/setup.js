'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(147, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var createPerson = function () {
  var wizardObj = {
    name: names[Math.floor(Math.random() * names.length)],
    surname: surnames[Math.floor(Math.random() * surnames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
  };

  return wizardObj;
};

var renderWizardsData = function () {
  var data = [];
  // 4 итерации цикла генерируют 4 персонажей
  for (var i = 0; i < 4; i++) {
    var wizard = createPerson();
    data.push(wizard);
  }
  return data;
};
// переменная получает результат работы функции
var myWizards = renderWizardsData();

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

// Открывает окно с волшебниками
var openPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizards(myWizards);
openPopup();

