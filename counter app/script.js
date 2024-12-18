const counterEl = document.getElementById("count-el");
const increseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const decreseBtn = document.getElementById("decrese-btn");

let count = 0;

function increse(){
   count++
   counterEl.innerText = count;
}
function reset(){
    count = 0;
    counterEl.innerText = count;
}
function decrese(){
   count--
   counterEl.innerText = count;
}
