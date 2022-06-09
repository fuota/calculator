const numberButtons=document.querySelectorAll(".number");
const current=document.querySelector("#current");
const previous=document.querySelector("#previous");
const dotButton=document.getElementById("dot")
const clearButton=document.getElementById("clear-button");
const backspace=document.getElementById("backspace")


numberButtons.forEach((btn) => {btn.addEventListener("click", ()=>{
    if (current.textContent == "0") 
    {current.textContent = btn.textContent}
    else
        {current.textContent += btn.textContent;}
    }
)})

dotButton.addEventListener("click", ()=> {
    if (current.textContent.includes(".")) return
    current.textContent += ".";
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
})
backspace.addEventListener("click", ()=>{
    if (current.textContent!=="") {
    current.textContent=current.textContent.slice(0,-1);
    }
})

