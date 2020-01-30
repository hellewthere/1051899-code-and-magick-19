'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_COLOR = '#000';
var TITLE_FONT = '16px PT Mono';
var TITLE_TEXT = 'Ура вы победили! \nСписок результатов:';
// цвета облака
var shadow = 'rgba(0, 0, 0, 0.7)';
var white = '#fff';

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

window.renderStatistics = function (ctx) {
  renderCloud(ctx);
  renderTitle(ctx, 130, 50, TITLE_TEXT, TITLE_COLOR, TITLE_FONT);
};

// функция рандомного цвета js


