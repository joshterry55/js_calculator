var calcDisplay = document.getElementById('calc-display');
var calcButtons = document.getElementsByClassName('calc-btn');
var calcEqual = document.getElementById('calc-equal-btn');
var calcSigns = document.getElementsByClassName('calc-sign');
var calcClear = document.getElementById('clear-calc');
var calcHistory = ["End"]
var historyUp = document.getElementById('history-up');
var historyDown = document.getElementById('history-down');
var historyPosition = 0
var memSave = document.getElementById('mem-save');
var memClear = document.getElementById('mem-clear');
var memUp = document.getElementById('mem-up');
var memDown = document.getElementById('mem-down');
var calcMemory = ["End"]
var memoryPosition = 0


for(var i = 0; i < calcButtons.length; i++) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function() {
    var number = this.innerText;
    calcDisplay.innerText = calcDisplay.innerText + number
  });
}

for(var i = 0; i < calcSigns.length; i++) {
  var calcSign = calcSigns[i];
  calcSign.addEventListener('click', function() {
    var number = this.innerText;
    var lastDigit = calcDisplay.innerText[calcDisplay.innerText.length - 1];
    if (lastDigit == '+' || lastDigit == '-' || lastDigit == '*' || lastDigit == '/') {
      calcDisplay.innerText = calcDisplay.innerText.slice(0, -1) + number;
    } else {
      calcDisplay.innerText = calcDisplay.innerText + number;
    }
  });
}



calcEqual.addEventListener('click', function() {
  var equation = calcDisplay.innerText
  calcDisplay.innerText = eval(calcDisplay.innerText);
  var wholeEquation = equation + " = " + calcDisplay.innerText
  calcHistory.push(wholeEquation)
  historyPosition = 0
  memoryPosition = 0
});

calcClear.addEventListener('click', function() {
  calcDisplay.innerText = '';
  historyPosition = 0
  memoryPosition = 0
});




historyUp.addEventListener('click', function() {
  if(historyPosition === 0 ){
    historyPosition = calcHistory.length - 1;
    calcDisplay.innerText = calcHistory[historyPosition]
  } else {
    historyPosition -= 1
    calcDisplay.innerText = calcHistory[historyPosition]
  }
});

historyDown.addEventListener('click', function() {
    historyPosition += 1
    calcDisplay.innerText = calcHistory[historyPosition]
});

memUp.addEventListener('click', function() {
  if (memoryPosition === 0 ){
    memoryPosition = calcMemory.length - 1;
    calcDisplay.innerText = calcMemory[memoryPosition]
  } else {
    memoryPosition -= 1
    calcDisplay.innerText = calcMemory[memoryPosition]
  }
});

memDown.addEventListener('click', function() {
  memoryPosition += 1
  calcDisplay.innerText = calcMemory[memoryPosition]
});

memSave.addEventListener('click', function() {
  var memoryToSave = calcDisplay.innerText
  calcMemory.push(memoryToSave)
  console.log(calcMemory)
});

memClear.addEventListener('click', function() {
  calcMemory = []
});
