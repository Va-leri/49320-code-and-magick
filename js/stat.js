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
  var writeText = function(text, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = '16px, \"PT Mono\"';
    ctx.fillText(text, x, y); 
  };
  
  writeText('Ура, вы победили!', 110, 45);
  writeText('Список результатов:', 110, 65);
  
   
  //определяем максимальное время
  var maxTime = times[0];
  (function() {
    for (var i=0; i < times.length; i++){
      if (maxTime < times[i]) {
        maxTime = times[i];
      } 
    }
  } ());  
  
  var i;
  var getColumnColour = function(name){
      if (name === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(0,0,255,' + Math.random() + ')';
    }};
  //гистограмма
  var histogram = {
    height : 150,
    columnWidth : 40,
    yMin : 95,
    xMin : 130,
    interColumnWidth : 50
  };
  
  histogram.yMax =  histogram.yMin + histogram.height;
  
  for(var i = 0; i < times.length; i++){
    histogram.columnHeight = histogram.height / maxTime * times[i];
    
    histogram.draw = function () {
      ctx.fillStyle = getColumnColour(names[i]);
      ctx.fillRect(histogram.xMin + i * (histogram.columnWidth + histogram.interColumnWidth) , histogram.yMin + histogram.height - histogram.columnHeight, 40, histogram.columnHeight);
    };
    histogram.writeTime = writeText(times[i].toFixed(0), histogram.xMin + i * (histogram.columnWidth + histogram.interColumnWidth), histogram.yMin + histogram.height - histogram.columnHeight - 10);
    histogram.writeName = writeText(names[i], histogram.xMin + i * (histogram.columnWidth + histogram.interColumnWidth), histogram.yMax + 20);
    
    histogram.draw();
  
  };
};