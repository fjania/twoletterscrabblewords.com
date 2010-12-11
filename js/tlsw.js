$(document).ready(function(){
  for (var letter in letters){
    $('#first').append(getTile(1, letter));
    $('#second').append(getTile(2, letter));
    $('#definitions').append(getDefinitionContainer(letter));
  }
  $('#first .tile').hover(function(){
    initCanvas();
    drawAllLines();
    clearDefinitions();
    drawLinesStartingWith(this.id.charAt(this.id.length-1));
  },
  function(){
    initCanvas();
    drawAllLines();
    clearDefinitions();
  });
  
  $('#second .tile').hover(function(){
    initCanvas();
    drawAllLines();
    clearDefinitions();
    drawLinesEndingWith(this.id.charAt(this.id.length-1));
  },
  function(){
    initCanvas();
    drawAllLines();
    clearDefinitions();
  })

  tileHeight = 30;
  
  initCanvas();
  drawAllLines();
});

function clearDefinitions(){
  $('#definitions').children().html("");
}

function showDefinition(letter, word){
//  $('#def-' + letter).html(word + ": " + tlw[word]);  
  $('#def-' + letter).html(getDefinitionHTML(word));  
}

function drawLinesStartingWith(letter){
  for (var key in tlw){
    var first = key.substr(0,1);
    var second = key.substr(1,1);
    if (first == letter){
      drawLine(letter, second, true);
      showDefinition(second, key);
    }
  }  
}

function drawLinesEndingWith(letter){
  for (var key in tlw){
    var first = key.substr(0,1);
    var second = key.substr(1,1);
    if (second == letter){
      drawLine(first, letter, true)      
      showDefinition(first, key);
    }
  }  
}

function drawAllLines(){
  for (var key in tlw){
    drawLine(key.substr(0,1), key.substr(1,1))
  }  
}

function initCanvas(){
  var canvas = document.getElementById('lines');  
  canvas.width = 370;
  canvas.height = 784;
}  

function drawLine(firstletter, secondletter, heavy){  
  var canvas = document.getElementById('lines');  
  if (canvas.getContext){  
    var ctx = canvas.getContext('2d');
    if (heavy) {
      ctx.strokeStyle = '#666666';
      ctx.lineWidth = 2;
    } else {
      ctx.strokeStyle = '#CCCCCC';      
      ctx.lineWidth = 1;
    }
    ctx.beginPath();
    var a = firstletter.charCodeAt(0);
    var ay = (a - 65) * tileHeight + 18;
    var b = secondletter.charCodeAt(0);
    var by = (b - 65) * tileHeight + 18;
    ctx.moveTo(0, ay);  
    ctx.lineTo(370, by);
    //ctx.bezierCurveTo(0, ay, 20, ay, 20, by/2)
    //ctx.bezierCurveTo(350, by/2, 350, by, 370, by)
    ctx.stroke();
  }  
}

function getTile(number, letter){
  return "<div class='tilewrapper'><div class='tile' id='tile-"+number+"-"+letter+"'><div class='letter'>" + letter + "</div><div class=value>" + letters[letter] + "</div></div></div>"
}

function getDefinitionHTML(word){
  var a = word.substr(0,1);
  var b = word.substr(1,1);
  def = tlw[word].split('|');
  return "<div class='tilewrapper'><div class='arrow'></div><div class='tile' style='left: 5px'><div class='letter'>" + a + "</div><div class=value>" + letters[a] + "</div></div><div class='tile' style='left: 35px'><div class='letter'>" + b + "</div><div class=value>" + letters[b] + "</div></div><div class='text'><span class='pos'>" + def[0] + "</span><br/><span class='def'>" + def[1] + "</span></div></div>"
}

function getDefinitionContainer(letter){
  return "<div class='definition' id='def-"+letter+"'></div>"
}