'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = [
  'rgb (101, 137, 164)',
  'rgb (241, 43, 107)',
  'rgb (147, 100, 161)',
  'rgb (56, 159, 117)',
  'rgb (215, 210, 55)',
  'rgb (0, 0, 0)',
];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var createPerson = function () {
  var personObj = {
    name: names[Math.floor(Math.random() * names.length)],
    surname: surnames[Math.floor(Math.random() * surnames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
  };

  return personObj;
};

var createPeopleData = function () {
  var data = [];

  for (var i = 0; i < 4; i++) {
    var person = createPerson();
    data.push(person);
  }

  return data;
};

/*
var myFriends = createPeopleData();

console.log(myFriends);
*/

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  // На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template
  // создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам, и заполните
  // их данными из массива
  wizardElement.querySelector('.setup-similar-label').textContent = names[i];
  wizardElement.querySelector('.wizard-coat').fill = coatColors[i];
  wizardElement.querySelector('.wizard-eyes').fill = eyesColors[i];

  // Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
  // Для вставки элементов используйте DocumentFragment.
  var fragment = document.createDocumentFragment('.setup-similar-list');

  similarListElement.appendChild(wizardElement);
}


