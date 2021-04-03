const container = document.querySelector(".sub-container");

//creates the grid and fills colors in the cells
function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let xSize = size * size;
    for (let i = 0; i < xSize; i++) { 
    const gridElement = document.createElement("div");
    gridElement.classList.add("cell");
    gridElement.addEventListener("mouseover", changeColor);
    container.appendChild(gridElement);
    }    
}
//picks a random color to input
function changeColor(e) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);

//resets the grid to its normal state i.e every div
function resetGrid() {
    let a = document.querySelectorAll("div");
    a.forEach(a => a.style.backgroundColor = "white");
}

//changes the size of the grid
const newSize = document.querySelector("#newSize");
newSize.addEventListener("click", customSize);

function customSize(){
    let size = prompt ("Please enter a value between 1 and 100", "16")
    if (size > 1){
        createGrid(size);
    }
    else if (size < 100){
        createGrid(size);
    }
    else {
        customSize();
    }
}