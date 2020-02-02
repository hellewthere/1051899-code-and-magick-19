'use strict';

// параметры облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

// параметры текста
var TITLE_COLOR = '#000';
var TITLE_FONT = '16px PT Mono';
var TITLE_TEXT = 'Ура вы победили!';
var TITLE_MSG = 'Список результатов:';

// параметры цвета
var shadow = 'rgba(0, 0, 0, 0.7)';
var white = '#fff';
var blockColor = 'rgba(255, 0, 0, 1)';

// параметры блока
var BLOCK_X = 160;
var BLOCK_Y = 240;
var BLOCK_WIDTH = 40;
var BLOCK_HEIGHT = -150;

// вспомогательные параметры
var GAP = 10;
var OFFSET = BLOCK_WIDTH + 50;

var renderCloud = function (ctx) {
  drawShadow(ctx);
  drawCloud(ctx);
};

var drawCloud = function (ctx) {
  ctx.fillStyle = white;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawShadow = function (ctx) {
  ctx.fillStyle = shadow;
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx) {
  ctx.font = TITLE_FONT;
  ctx.fillStyle = TITLE_COLOR;
  ctx.fillText(TITLE_TEXT, 130, 60);
  ctx.fillText(TITLE_MSG, 130, 40);
};

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

var renderBlocks = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {

    ctx.fillStyle = getRandomColor();
    if (names[i] === 'Вы') {
      ctx.fillStyle = blockColor;
    }

    ctx.fillRect(BLOCK_X + OFFSET * i, BLOCK_Y, BLOCK_WIDTH, BLOCK_HEIGHT * times[i] / maxTime);
  }
};

// функция рандомного цвета
var getRandomColor = function () {
  var str1 = 'rgba(0, 0, 255,';
  var str2 = Math.random().toPrecision(1);
  var str3 = ')';
  return str1 + str2 + str3;
};

var renderNames = function (ctx, names) {
  ctx.font = TITLE_FONT;
  ctx.fillStyle = TITLE_COLOR;
  ctx.fillText(names[0], BLOCK_X, 260);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], BLOCK_X + OFFSET * i, BLOCK_Y + 20);
  }
};

var renderTimes = function (ctx, times) {

  var maxTime = getMaxElement(times);

  ctx.font = TITLE_FONT;
  ctx.fillStyle = TITLE_COLOR;
  ctx.fillText(times[0], 130, 120);

  for (var i = 0; i < times.length; i++) {
    var time = Math.round(times[i]);
    ctx.fillText(time, BLOCK_X + OFFSET * i, BLOCK_Y + (BLOCK_HEIGHT * time) / maxTime;
    );
};

// отрисовать гистограмму
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);
  renderTitle(ctx);
  renderBlocks(ctx, names, times);
  renderNames(ctx, names);
  renderTimes(ctx, times);
};


