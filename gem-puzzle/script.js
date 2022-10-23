'use strict'

const titleName = document.createElement("h1");
titleName.className = "centralizer";
titleName.innerHTML = "Gem Puzzle";
document.body.append(titleName);

const header = document.createElement("header");
header.className = "header";
document.body.append(header);

const ctrlPanel = document.createElement("div");
ctrlPanel.className = "ctrl-panel";
header.append(ctrlPanel);

// const select = document.createElement("select");
// select.className = "field-size";
// ctrlPanel.append(select);

// const option = document.createElement("option");
// option.innerHTML = "Size";
// select.append(option);

// const option3 = document.createElement("option");
// option3.className = 'option3'
// option3.value = 3;
// option3.innerHTML = "3 x 3";
// select.append(option3);

// const option4 = document.createElement("option");
// option4.value = 4;
// option4.innerHTML = "4 x 4";
// select.append(option4);

// const option5 = document.createElement("option");
// option5.value = 5;
// option5.innerHTML = "5 x 5";
// select.append(option5);

// const option6 = document.createElement("option");
// option6.value = 6;
// option6.innerHTML = "6 x 6";
// select.append(option6);

// const option7 = document.createElement("option");
// option7.value = 7;
// option7.innerHTML = "7 x 7";
// select.append(option7);

// const option8 = document.createElement("option");
// option8.value = 8;
// option8.innerHTML = "8 x 8";
// select.append(option8);

const newGame = document.createElement("button");
newGame.className = "ctrl-panel-btns";
newGame.id = "shuffle";
newGame.innerHTML = "New Game";
ctrlPanel.append(newGame);

const toggleButton = document.createElement("input");
toggleButton.className = "toggleButton";
toggleButton.innerHTML = "Sound";
toggleButton.type = 'button';
toggleButton.value = 'ON Sound'
toggleButton.style.color = 'green'
toggleButton.id = 'elem';
ctrlPanel.append(toggleButton);


const containerNode = document.createElement("div"); //field
containerNode.className = "fiften field dropZone";
document.body.append(containerNode);

const score = document.createElement("div");
score.className = "score";
document.body.append(score);

const timerCount = document.createElement("form");
timerCount.name = "MyForm";
score.append(timerCount);

const timerInput = document.createElement("input");
timerInput.name = 'stopwatch';
timerInput.value = "00:00:00.00";
timerInput.size = 8;
timerCount.append(timerInput);

const move = document.createElement("span");
move.className = "move";
move.innerHTML = 'Moves: ' + 0;
move.id = 'buttonCountNumber'
score.append(move);

const button3 = document.createElement("button");
button3.className = "Size";
button3.innerHTML = "3 x 3";
button3.id = 'size3'
document.body.append(button3);

const button4 = document.createElement("button");
button4.className = "Size";
button4.innerHTML = "4 x 4";
button4.id = 'size4'
document.body.append(button4);

const button5 = document.createElement("button");
button5.className = "Size";
button5.innerHTML = "5 x 5";
button5.id = 'size5'
document.body.append(button5);

const button6 = document.createElement("button");
button6.className = "Size";
button6.innerHTML = "6 x 6";
button6.id = 'size6'
document.body.append(button6);

const button7 = document.createElement("button");
button7.className = "Size";
button7.innerHTML = "7 x 7";
button7.id = 'size7'
document.body.append(button7);

const button8 = document.createElement("button");
button8.className = "Size";
button8.innerHTML = "8 x 8";
button8.id = 'size8'
document.body.append(button8);

let sizeSize = 0;

if(document.getElementById('size3').addEventListener('click', () => {    
 
}));
  


let sizeContainer = 16



 


for (let i = 1; i <= sizeContainer; i++) {                 //9,16,25,36,49,64
    const cell = document.createElement('button');
    cell.className = 'cell dragItem';
    cell.draggable = true
    cell.id = i;    
    cell.innerHTML = i;  
    containerNode.append(cell);
}

const itemNodes = Array.from(containerNode.querySelectorAll('.cell'))
let countItems = sizeContainer;      //9,16,25,36,49,64

/* =====position===== */
itemNodes[countItems - 1].style.display = 'none';
let matrix = getMatrix(
    itemNodes.map((item) => Number(item.innerHTML))
);
setPositionItems(matrix);

/* =====shuffle===== */
let timer;
clearInterval(timer)    
    
        timer = setInterval(() => {
            randomSwap(matrix);
            setPositionItems(matrix);
            StartStop()
            shuffleCount += 1;

            if(shuffleCount >= maxShaffleCount) {                            
                clearInterval(timer)
            }
        }, 40);



let moves = []
const maxShaffleCount = 80;

let shuffleCount = 0;
document.getElementById('shuffle').addEventListener('click', () => {      
    moves = [];
    move.innerHTML = 'Moves: ' + 0;    
    
    clearInterval(timer)
    let shuffleCount = 0;
    
        timer = setInterval(() => {
            randomSwap(matrix);
            setPositionItems(matrix);
            StartStop()
            shuffleCount += 1;

            if(shuffleCount >= maxShaffleCount) {                            
                clearInterval(timer)
            }
        }, 40);  
                     
})


/* =====change===== */
let blankNumber = sizeContainer;                                //9,16,25,36,49,64
containerNode.addEventListener('click', (event) => {
    const buttonNode = event.target.closest('button');
    if(!buttonNode) {
        return
    }       

    const buttonNumber = Number(buttonNode.innerHTML)
    const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
    const blankCoords = findCoordinatesByNumber(blankNumber, matrix);    
    const isValid = isValidForSwap(buttonCoords, blankCoords);

    if(isValid === true){        
        move.innerHTML = 'Moves: ' + moves.push(isValid)
        
        //sound        
        if(toggleButton.value === "ON Sound"){
            const audio = new Audio()       
            audio.src = './mp3/knopka-vyiklyucheniya-na-nastolnoy-lampe1.mp3';
            audio.autoplay = true            
        }        
        
    }      

    if (isValid) {
        swap(blankCoords, buttonCoords, matrix)
        setPositionItems(matrix);
    }
})

let blockedCoords = null;

function randomSwap(matrix){
    const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
    const validCoords = findValidCoords({
        blankCoords,
        matrix,
        blockedCoords,
    })    
    const swapCoords = validCoords[
        Math.floor(Math.random() * validCoords.length)
    ];

    swap(blankCoords, swapCoords, matrix)
    blockedCoords = blankCoords;
}

function findValidCoords ({ blankCoords, matrix }) {
    const validCoords = [];
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x< matrix[y].length; x++) {
            if(isValidForSwap({x, y}, blankCoords)) {
                if(!blockedCoords || !(blockedCoords.x ===x && blockedCoords.y === y)){
                    validCoords.push({x, y})
                }                
            }
        }
    }
    return validCoords
}


function getMatrix(arr) {
    let matrix = [[], [], [], []];           //матрицы 3х3 4х4 5х5 6х6 7х7 8х8
    let y = 0;
    let x = 0;
    let sizeX = 4
    for (let i = 0; i < arr.length; i++) {
        if(x >= sizeX) {                         //3, , 5, 6, 7, 8
            y++;
            x = 0;
        }

        matrix[y][x] = arr[i];
        x++;
    }

    return matrix
}

function setPositionItems(matrix) {
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x< matrix[y].length; x++) {
            const value = matrix[y][x];
            const node = itemNodes[value - 1];
            setNodeStyles(node, x, y)
        }
    }
}

function setNodeStyles(node, x, y) {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`
}

function shuffleArray (arr) {
    return arr
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}

function findCoordinatesByNumber(number, matrix) {
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x< matrix[y].length; x++) {
            if(matrix[y][x] === number) {
                return {x, y}
            }
        }
    }
    return null
}

function isValidForSwap(coords1, coords2){
    const diffX = Math.abs(coords1.x - coords2.x);
    const diffY = Math.abs(coords1.y - coords2.y);

    return(diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y)

}

function swap (coords1, coords2, matrix) {
    const coords1Number = matrix[coords1.y][coords1.x]
    matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x]
    matrix[coords2.y][coords2.x] = coords1Number;

    if(isWon(matrix)) {
        addWonClass();        
    }
}

const winFlatArr = new Array(sizeContainer).fill(0).map((_item, i) => i + 1);//9, 16, 25, 36, 49, 64
function isWon(matrix) {
    const flatMatrix = matrix.flat();
    for (let i = 0; i < winFlatArr.length; i++) {
        if (flatMatrix[i] !== winFlatArr[i]) {
            return false
        }
    }
    return true
}

const wonClass = 'fifteenWon'
function addWonClass() {
    setTimeout(() => {
        containerNode.classList.add(wonClass)

        setTimeout(() => {
            containerNode.classList.remove(wonClass)              
        }, 2000)
        alert('Ура! Вы решили головоломку за ' + readout +  ' и ' + moves.length + ' ходов')
    }, 200)
}

/**timer */
window.onload = () => {
    StartStop();
  }
  
  //объявляем переменные
  var base = 60;
  var clocktimer, dateObj, dh, dm, ds, ms;
  var readout = '';
  var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;
  
  //функция для очистки поля
  function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00';
    document.MyForm.stopwatch.value = readout;
  }
  
  //функция для старта секундомера
  function StartTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
      s++;
    }
    if (s >= (m * base)) {
      ts = 0;
      m++;
    } else {
      ts = parseInt((ms / 100) + s);
      if (ts >= base) {
        ts = ts - ((m - 1) * base);
      }
    }
    if (m > (h * base)) {
      tm = 1;
      h++;
    } else {
      tm = parseInt((ms / 100) + m);
      if (tm >= base) {
        tm = tm - ((h - 1) * base);
      }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
      ms = 0;
    }
    if (ms == 0) {
      ms = '00';
    }
    if (ms > 0 && ms <= 9) {
      ms = '0' + ms;
    }
    if (ts > 0) {
      ds = ts;
      if (ts < 10) {
        ds = '0' + ts;
      }
    } else {
      ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
      if (dm < 10) {
        dm = '0' + dm;
      }
    } else {
      dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
      if (dh < 10) {
        dh = '0' + dh;
      }
    } else {
      dh = '00';
    }
    readout = dh + ':' + dm + ':' + ds;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);    
  }
  
  //Функция запуска и остановки
  function StartStop() {
    if (init == 0) {
      ClearСlock();
      dateObj = new Date();
      StartTIME();
      init = 1;
    } else {
      clearTimeout(clocktimer);
      init = 0;
    }
  }

  //sound
  elem.onclick = function() {
    if (toggleButton.value == "OFF Sound") {
        toggleButton.value = "ON Sound";
        elem.style.color = 'green'
    } else {
        toggleButton.value = "OFF Sound";
        elem.style.color = 'grey'
    }    
  };

//drag & drop
// const dragItem = document.querySelectorAll('.dragItem');
// const dropZones = document.querySelectorAll('.dropZone');

// dragItem.forEach(dragItem => {
//   dragItem.addEventListener('dragstart', handlerDragstart)
//   dragItem.addEventListener('dragend', handlerDragend)
//   dragItem.addEventListener('drag', handlerDrag)
// })

// dropZones.forEach((dropZone) => {
//   dropZone.addEventListener('dragenter', handlerDragenter)
//   dropZone.addEventListener('dragleave', handlerDragleave)
//   dropZone.addEventListener('dragover', handlerDragover)
//   dropZone.addEventListener('drop', handlerDrop)
//   console.log(dropZone)
// })

// function handlerDragstart(event) {
//   event.dataTransfer.setData('dragItem', this.id)
//   this.classList.add('cel--active')
// }

// function handlerDragend(event) {
//   this.classList.remove('cel--active')
// }

// function handlerDrag(event) {
//   // console.log('drag')
// }

// function handlerDragenter(event) {
//   console.log('enter')
//   event.preventDefault()
// }

// function handlerDragleave(event) {
//   console.log('dragleave', this)
// }

// function handlerDragover(event) {
//   event.preventDefault()
// }

// function handlerDrop(event) {
//   console.log('drop')
//   //  const dragFlag = event.dataTransfer.getData(`[id="${15}"]`)  
//   //  const dragItem = document.querySelector(`[id="${dragFlag}"]`)  
//   this.append('dragItem', this.id)    
// }





if(document.getElementById('size3').addEventListener('click', () => {
  console.log(1)
 
 }));
 console.log(sizeContainer)

 


























// let button = toggleButton;

// function setupSynth() {
//   window.synth = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationFrequency: 0.5
//     },
//     envelope: {
//       attack: 0,
//       decay: 0.2,
//       sustain: 0,
//       release: 0.5,
//     }
//   }).toMaster();
// }

// function boopMe() {
//   if (!window.synth) {
//     setupSynth();
//   }
  
//   window.synth.triggerAttackRelease(600, '9n');
// }

// button.addEventListener('touchstart', function(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   boopMe();
// });
// button.addEventListener('mousedown', boopMe);



// function playSound(sound) {
//     var song = document.getElementById(sound);
//     song.volume = 1;
//     if (song.paused) {
//       song.play();
//     } else {
//       song.pause();
//     }
//   }


// const cellSize = 100;

// const empty = {
//     value: 0,
//     top: 0,
//     left: 0
// };

// const cells = [];
// cells.push(empty);

// function move(index) {
//     const cell = cells[index];
//     const leftDiff = Math.abs(empty.left - cell.left);
//     const topDiff = Math.abs(empty.top - cell.top);

//     if(leftDiff + topDiff > 1) {
//         return;
//     }

//     cell.element.style.left = `${empty.left * cellSize}px`;
//     cell.element.style.top = `${empty.top * cellSize}px`;

//     const emptyLeft = empty.left;
//     const emptyTop = empty.top;
//     empty.left = cell.left;
//     empty.top = cell.top;
//     cell.left = emptyLeft;
//     cell.top = emptyTop;

//     const isFinished = cells.every(cell => {
//         return cell.value === cell.top * 4 + cell.left;
//     })    

//     if (isFinished) {
//         alert('You won')
//     }
// }

// let numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);//24
// console.log(numbers)

// for (let i = 1; i <= 15; i++) {//24
//     const cell = document.createElement('div');
//     const value = numbers[i - 1] + 1;
//     cell.className = 'cell';
//     cell.innerHTML = value;  

//     const left = i % 4;//5
//     const top = (i - left) / 4//5

//     cells.push({
//         value: value,
//         left: left,
//         top: top,
//         element: cell
//     });
    
//     cell.style.left = `${left * cellSize}px`;
//     cell.style.top = `${top * cellSize}px`;

//     field.append(cell);

//     cell.addEventListener('click', () => {
//         move(i);        
//     })
// }

// const button = document.createElement("button");
// button.className = "button";
// button.innerHTML = "Shuffle and start";
// document.body.append(button);

// button.onclick = function() {
//     numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);
//     console.log(numbers)
      
//   };