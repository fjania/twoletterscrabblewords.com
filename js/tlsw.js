tlw = {
	'AA':'n pl. –S rough, cindery lava',
	'AB':'n pl. –S an abdominal muscle',
	'AD':'n pl. –S an advertisement',
	'AE':'adj one',
	'AG':'adj pertaining to agriculture',
	'AH':'interj – used to express delight, relief, or contempt',
	'AI':' n  pl. –S a three-toed sloth',
	'AL':'n  pl. –S an East Indian tree',
	'AM':'present 1st person sing. of BE',
	'AN':'indefinite article – used before words beginning with a vowel',
	'AR':'n pl. –S the letter R',
	'AS':'adv to the same degree',
	'AT':'prep in the position of',
	'AW':'interj – used to express protest, disgust, or disbelief',
	'AX':'v –ED, -ING, -ES to work on with an ax (a type of cutting tool)',
	'AY':'n  pl. –S aye',
	'BA':'n  pl. –S the eternal soul in Egyptian mythology',
	'BE':'v AM, ARE, ART, WAS, WERE, WAST, WERT, BEEN, BEING to have actuality',
	'BI':'n pl. –S bisexual',
	'BO':'n pl. –S a pal',
	'BY':'n pl. –S a pass in certain card games',
	'DE':'prep of; from – used in names',
	'DO':'n pl. –S the first tone of the diatonic scale',
	'ED':'n pl. –S education',
	'EF':'n pl. –S the letter F',
	'EH':'interj – used to express doubt',
	'EL':'n pl. –S an elevated railroad or train',
	'EM':'n pl. –S the letter M',
	'EN':'n pl. –S the letter M',
	'ER':'interj – used to express hesitation',
	'ES':'n pl. ESES the letter S (also spelled ESS)',
	'ET':'a past tense of EAT',
	'EX':'n pl. EXES the letter X',
	'FA':'n pl. –S the fourth tone of the diatonic musical scale',
	'FE':'n –FES a Hebrew letter',
	'GO':'v WENT, GONE, GOING, GOES to move along',
	'HA':'n pl. –S a sound of surprise',
	'HE':'n pl. –S a male person',
	'HI':'interj – used as a greeting',
	'HM':'interj – used to express thoughtful consideration',
	'HO':'interj – used to express surprise',
	'ID':'n pl. –S a part of the psyche',
	'IF':'n pl. –S a possibility',
	'IN':'v INNED, INNING, INS to harvest',
	'IS':'v present 3d person sing. of BE',
	'IT':'pron the 3rd person sing. of BE',
	'JO':'n pl.  -ES a sweetheart',
	'KA':'n pl. –S the spiritual self of a human being in Egyptian religion',
	'KI':'n pl. -S the vital force in Chinese thought',
	'LA':'n pl. –S the sixth tone of the diatonic musical scale',
	'LI':'n pl. a Chinese unit of distance',
	'LO':'interj – used to attract attention or to express surprise',
	'MA':'n pl. –S mother',
	'ME':'pron the objective case of the pronoun I',
	'MM':'interj – Used to express assent or satisfaction',
	'MO':'n pl. –S a moment',
	'MU':'n pl. –S a Greek letter',
	'MI':'n pl. –MIS the third tone of the diatonic musical scale',
	'MY':'pron the possessive form of the pronoun I',
	'NA':'adv no; not',
	'NE':'adj born with the name of (also NEE)',
	'NO':'n  pl. NOS or NOES a negative reply',
	'NU':'n pl. –S a Greek letter',
	'OD':'n pl. –S a hypothetical force of natural power',
	'OE':'n pl. –S a whirlwind off the Faeroe Islands',
	'OF':'prep coming from',
	'OH':'v –ED, -ING, -S to exclaim in surprise, pain, or desire',
	'OI':'v – oy--used to express dismay or pain',
	'OM':'n pl. –S a mantra used in contemplation of ultimate reality',
	'ON':'n pl. –S the side of the wicket where a batsman stands in cricket',
	'OP':'n pl. –S a style of abstract art',
	'OR':'n pl. –S the heraldic color gold',
	'OS':'n pl. –S ORA, OSSA, or OSAR either an orifice, a bone, or an esker',
	'OW':'interj – used to express sudden pain',
	'OX':'n pl. OXEN or OXES a hoofed mammal or clumsy person',
	'OY':'interj – used to express dismay or pain',
	'PA':'n pl. –S a father',
	'PE':'n pl. –S a Hebrew letter',
	'PI':'v PIED, PIEING, PIING, or PIES to jumble or disorder',
	'QI':'n pl. -S the vital force that in Chinese thought is inherent in all things',
	'RE':'n pl. –S the second tone of diatonic musical scale',
	'SH':'interj – used to urge silence',
	'SI':'n pl. –S ti',
	'SO':'n pl. –S the fifth tone of the diatonic musical scale',
	'TA':'n pl. –S an expression of gratitude',
	'TO':'prep in the direction of',
	'TI':'n TIS the seventh tone of the diatonic musical scale',
	'UH':'interj – used to express hesitation',
	'UM':'interj – used to express hesitation',
	'UN':'pron pl. –S one',
	'UP':'v UPPED, UPPING, UPS to raise',
	'US':'pron the objective case of the pronoun we',
	'UT':'n pl. –S the musical tone C in the French solmization system, now replaced by do',
	'WE':'pron the 1st person pl. pronoun in the nominative case',
	'WO':'n pl. –S woe',
	'XI':'n pl. –S a Greek letter',
	'XU':'n pl. XU a monetary unit of Vietnam',
	'YA':'pron you',
	'YE':'pron you',
	'YO':'interj – used to call attention or express affirmation',
	'ZA':'n pl. -S a pizza'
}
letters={
  'A':1,
  'B':3,
  'C':3,
  'D':2,
  'E':1,
  'F':4,
  'G':2,
  'H':4,
  'I':1,
  'J':8,
  'K':5,
  'L':1,
  'M':3,
  'N':1,
  'O':1,
  'P':3,
  'Q':10,
  'R':1,
  'S':1,
  'T':1,
  'U':1,
  'V':4,
  'W':4,
  'X':8,
  'Y':4,
  'Z':10
}
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
  
  initCanvas();
  drawAllLines();
});

function clearDefinitions(){
  $('#definitions').children().html("");
}

function drawLinesStartingWith(letter){
  for (var key in tlw){
    var first = key.substr(0,1);
    var second = key.substr(1,1);
    if (first == letter){
      drawLine(letter, second, true)
      $('#def-' + second).html(key + ": " + tlw[key]);
    }
  }  
}

function drawLinesEndingWith(letter){
  for (var key in tlw){
    var first = key.substr(0,1);
    var second = key.substr(1,1);
    if (second == letter){
      drawLine(first, letter, true)      
      $('#def-' + first).html(key + ": " + tlw[key]);
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
  canvas.height = 856;
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
    var ay = (a - 65) * 33 + 18;
    var b = secondletter.charCodeAt(0);
    var by = (b - 65) * 33 + 18;
    ctx.moveTo(0, ay);  
    ctx.lineTo(370, by);
    //ctx.bezierCurveTo(0, ay, 20, ay, 20, by/2)
    //ctx.bezierCurveTo(350, by/2, 350, by, 370, by)
    ctx.stroke();
  }  
}

function getTile(number, letter){
  return "<div class='tile' id='tile-"+number+"-"+letter+"'><div class='letter'>" + letter + "</div><div class=value>" + letters[letter] + "</div></div>"
}

function getDefinitionContainer(letter){
  return "<div class='definition' id='def-"+letter+"'></div>"
}