let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");

hamburger.addEventListener("click", showmenu);
close.addEventListener("click", closemenu)

function showmenu() {
    let menu = document.getElementById("aside");
    let background = document.getElementById("asideBackground");
    menu.classList.add("show");
    background.classList.add("show");
}
function closemenu() {
    let menu = document.getElementById("aside");
    let background = document.getElementById("asideBackground");
    menu.classList.remove("show");
    background.classList.remove("show");
}

let amount = document.getElementById("amountCounter");
document.getElementById("amountMinus").addEventListener("click", function(){
    amount.value = amount.value-1;
    if(amount.value<0){
        amount.value=0;
    }
})
document.getElementById("amountPlus").addEventListener("click", function(){
    amount.value = Number(amount.value)+1;
})
