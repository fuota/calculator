const numberButtons=document.querySelectorAll(".number");
const current=document.querySelector("#current");
const previous=document.querySelector("#previous");
const dotButton=document.getElementById("dot")
const clearButton=document.getElementById("clear-button");
const backspace=document.getElementById("backspace")
const operators=document.querySelectorAll(".operator")
const equalButton=document.getElementById("equal")
const percent=document.getElementById("percent")

let operation;
let firstNum;
let secondNum;
let isFinished = false;
let numberOfCalcs = 0;

numberButtons.forEach((btn) => {btn.addEventListener("click", ()=>{
    if (isFinished) {current.textContent = btn.textContent}
    else {
    if (current.textContent == "0") 
    {current.textContent = btn.textContent}
    else
        {current.textContent += btn.textContent;}
    }
    isFinished=false;
})
})

dotButton.addEventListener("click", ()=> {
    if (current.textContent.includes(".")) return
    current.textContent += ".";
    isFinished=false;
})

clearButton.addEventListener("click", ()=> {
    current.textContent = "0";
    previous.textContent="";
    operation=undefined;
    firstNum=undefined;
    secondNum=undefined;
    isFinished=false;
})
backspace.addEventListener("click", ()=>{
    if (current.textContent!=="") {
    current.textContent=current.textContent.slice(0,-1);
    isFinished=false;
    }
})

clearButton.addEventListener("click", ()=> {
    current.textContent = "0";
    previous.textContent="";
    operation=undefined;
    firstNum=undefined;
    secondNum=undefined;
    isFinished=false;
})
backspace.addEventListener("click", ()=>{
    if (current.textContent!=="") {
    current.textContent=current.textContent.slice(0,-1);
    isFinished=false;
    }
})

function computeResult(operation, first, second){
    switch (operation) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "×":
            return first * second;
        case "÷":
            return first / second;
        default:
            break;
    }
}

let result; 
operators.forEach((opr) => {opr.addEventListener("click", ()=> {
    numberOfCalcs += 1;
    if (previous.textContent !== "" && current.textContent !== "" && numberOfCalcs>1) {
        secondNum = parseFloat(current.textContent);
        result = computeResult(operation, firstNum, secondNum);
        operation = opr.textContent;
        previous.textContent = result+operation;
        firstNum = result;
        current.textContent=""

        console.log(firstNum, "first")
        console.log(secondNum, "second")
    }
    else {
        operation = opr.textContent;
        firstNum = parseFloat(current.textContent);
        previous.textContent = current.textContent + operation;
        current.textContent = "";
}
    isFinished=false;
})} )



equalButton.addEventListener(("click"), ()=>{
    if (previous.textContent !== "" && current.textContent !== "" && operation) {
    secondNum = parseFloat(current.textContent);
    previous.textContent += current.textContent;
    current.textContent=computeResult(operation, firstNum, secondNum)
    operation = undefined;
    isFinished = true;
    numberOfCalcs = 0;
    }
})

percent.addEventListener("click", ()=> {

    firstNum = parseFloat(current.textContent);
    previous.textContent = current.textContent+"%";
    current.textContent = (firstNum/100).toString()
    isFinished=false;

})