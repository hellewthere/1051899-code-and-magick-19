'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_COLOR = '#000';
var TITLE_FONT = '16px PT Mono';
var TITLE_TEXT = 'Ура вы победили! \nСписок результатов:';
var RANDOM_COLOR= generateColor();
// цвета облака
var shadow = 'rgba(0, 0, 0, 0.7)';
var white = '#fff';
var BLOCK_X = CLOUD_X + GAP;
var BLOCK_WIDTH = 40;
var BLOCK_HEIGHT = 150;

var drawCloud = function (ctx) {
  ctx.fillStyle = white;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawShadow = function (ctx) {
  ctx.fillStyle = shadow;
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloud = function (ctx) {
  drawShadow(ctx);
  drawCloud(ctx);
};

var renderTitle = function (ctx, x, y, text, color, font) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderBlocks = function (ctx, x, y, RANDOM_COLOR, names, times)

window.renderStatistics = function (ctx) {
  renderCloud(ctx);
  renderTitle(ctx, 130, 50, TITLE_TEXT, TITLE_COLOR, TITLE_FONT);
  renderBlocks(ctx, BLOCK_X, BLOCK_WIDTH, RANDOM_COLOR);
};

var names = [
  "Вы",
  "Кекс",
  "Катя",
  "Игорь",
];

var times = [
  "2725",
  "4025",
  "1244",
  "1339",
];

// найти максимальное значение массива times
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// функция рандомного цвета js
function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}



