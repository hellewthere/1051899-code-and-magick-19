'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// var renderTitle = function (ctx) {
// ctx.fillStyle = '#000';
// ctx.font = '16px PT Mono';
// ctx.fillText('Ура вы победили!', 130, 50);
// ctx.fillText('Список результатов:', 130, 70);
// };


window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx, 130, 50, 'Ура вы победили!', '#000', '16px PT Mono');
  renderTitle(ctx, 130, 70, 'Список результатов:', '#000', '16px PT Mono');
};

var renderTitle = function (ctx, x, y, text, color, font) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(x, y, text);
};
