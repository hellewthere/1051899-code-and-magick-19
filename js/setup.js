'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(147, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var createWizard = function () {
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

  for (var i = 0; i < 4; i++) {
    var wizard = createWizard();
    data.push(wizard);
  }

  return data;
};


var myWizards = renderWizardsData();


for (var i = 0; i < myWizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  console.log(myWizards[i]);
  // На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template
  // создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам, и заполните
  // их данными из массива
  wizardElement.querySelector('.setup-similar-label').textContent = myWizards[i].name + ' ' + myWizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = myWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = myWizards[i].eyesColor;

  // Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
  // Для вставки элементов используйте DocumentFragment.
  // eslint-disable-next-line no-unused-vars
  var fragment = document.createDocumentFragment('.setup-similar-list');

  similarListElement.appendChild(wizardElement);
}


