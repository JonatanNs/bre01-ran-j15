
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    // le code de l'étape 1 se passe ici
    let div = document.querySelectorAll("body > header div"); 
        for(let i = 0; i < colors.length ; i++){
            div[i].style.backgroundColor = colors[i];
            // console.log(div[i]);
        }
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

   // le code de l'étape 2 se passe ici
     
    let div = document.querySelectorAll("body > header div");
    for(let o = 0; o < div.length ; o++){
        div[o].addEventListener("click", selectColor(event));
        
 }

 // le code de l'étape 3 se passe ici
});