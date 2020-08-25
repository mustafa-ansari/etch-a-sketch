const container = document.getElementById("container");

makeRows(16, 16);
addListener();

let squares = 16;
let l = 50;
const reset = document.getElementById("reset");
reset.addEventListener('click', resetBoard);

const clear = document.getElementById("clear");
clear.addEventListener('click', clearBoard);

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for(c=0; c<(rows*cols); c++) {
        let cell = document.createElement('div');
        // cell.innerText = (c+1);
        container.appendChild(cell).className = 'grid-item';
    }
}

function addListener() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', effectOver));
}


function clearBoard(e) {
    container.innerHTML = "";
    makeRows(squares, squares)
    addListener();
    l = 50;
}

function resetBoard(e) {
    squares = prompt("Enter the number of squares");
    container.innerHTML = "";
    makeRows(squares, squares)
    addListener();
    l = 50;
}

function effectOver(e) {
    // let r = Math.floor(Math.random() * 256);
    // let g = Math.floor(Math.random() * 256);
    // let b = Math.floor(Math.random() * 256);
    // let rgb = "rgba("+r+","+g+","+b+")";

    let h = Math.floor(Math.random() * 360);
    l = (l>0)?(l-5):l;
    let hsl = "hsl("+h+", 100%, "+l+"%)";
    e.target.style.background = hsl;
}