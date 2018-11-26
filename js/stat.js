'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var FONT_HEIGHT = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 4, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 4, CLOUD_Y + GAP * 4 + FONT_HEIGHT / 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var totalBarHeight = BAR_HEIGHT * times[i] / maxTime;
    var sizeElementX = CLOUD_X + GAP * 4 + (BAR_GAP + BAR_WIDTH) * i;
    var sizeElementY = CLOUD_Y + CLOUD_HEIGHT - (GAP * 2 + FONT_HEIGHT + totalBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], sizeElementX, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), sizeElementX, sizeElementY - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
    }
    ctx.fillRect(sizeElementX, sizeElementY, BAR_WIDTH, totalBarHeight);
  }
};
