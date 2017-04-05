// stat.js
'use strict';
window.renderStatistics = function(ctx, names, times) {
  //тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  //облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  //надпись
  ctx.fillStyle = '#000';
  ctx.font = '16px, \"PT Mono\"';
  ctx.fillText('Ура, вы победили!', 110, 45);
  ctx.fillText('Список результатов:', 110, 65);
   
  //определяем максимальное время
  var maxTime = times[0];
  for (var i=0; i < times.length; i++){
    if (maxTime < times[i]) {
      maxTime = times[i];
    } 
  }
  
  //гистограмма
  var histogramHeight = 150;
  var histogramYMin = 95;
  var columnWidth = 40;
  var histogramXMin = 130;
  var intercolumnWidth = 50;
  var histogramYMax = histogramYMin + histogramHeight;
  
  //alert(times);
  //ctx.fillText('max time=' + maxTime, 110, 85);
  
  for(var i = 0; i < times.length; i++){
    var columnHeight = histogramHeight/maxTime*times[i];
    var getColumnColour = function() {
      if (names[i] === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(0,0,255,' + Math.random() + ')';
    }}
    ctx.fillStyle = getColumnColour();
    ctx.fillRect(histogramXMin + i * (columnWidth + intercolumnWidth) , histogramYMin + histogramHeight - columnHeight, 40, columnHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(times[i].toFixed(0), histogramXMin + i * (columnWidth + intercolumnWidth), histogramYMin + histogramHeight - columnHeight - 10);
    ctx.fillText(names[i], histogramXMin + i * (columnWidth + intercolumnWidth), histogramYMax + 20)
  };
};