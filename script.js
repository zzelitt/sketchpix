
/////////////////////////////////////////////////////////////////////////////
////////////////// VARIABLE DECLARATION 
////////////////////////////////////////////////////////////////////////////


const canvasCont = document.querySelector("#canvas-container");
let grid_size = 16;
var randomMode = false;

let btn_rand = document.querySelector("#randomMode");
let btn_norm = document.querySelector("#normalMode");
let clear = document.querySelector("#clear_canvas");

clear.addEventListener("click", () => {
    creategrid(grid_size)
});

btn_rand.addEventListener("click", () => randomMode = true);
btn_norm.addEventListener("click", () => randomMode = false);

creategrid(grid_size);

////////////////////////////////////////////////////////////////////////////
//////////////////// FUNCTIONS
////////////////////////////////////////////////////////////////////////////

document.querySelector("#size_form").addEventListener("submit", (e) => {
    e.preventDefault();
    getInput();
    e.target.reset();
});

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(let i = 1; i <= 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getInput(){
    let inpt = document.querySelector("#grid_size").value;
    let inpt_size = parseInt(inpt, 10);

    if(!(inpt_size >= 16) || !(inpt_size <= 100)){
        alert(`Minimum of 16 and maximum 100`);
    }
    else{
        grid_size = inpt_size;
        creategrid(grid_size);
    }
}

function creategrid(size){
    canvasCont.innerHTML = "";
    for(let i = 1; i<=size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 1; j<=size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", function (){
                if(randomMode){
                    square.style.backgroundColor = getRandomColor();
                }
                else{
                    square.style.backgroundColor = "#575453";
                }
            });
            row.appendChild(square);
        }
        canvasCont.appendChild(row);
    }
}