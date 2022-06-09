const numberButtons=document.querySelectorAll(".number");
const current=document.querySelector("#current");
const previous=document.querySelector("#previous");
const dotButton=document.getElementById("dot")


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
