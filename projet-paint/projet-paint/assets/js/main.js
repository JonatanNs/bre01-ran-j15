
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
    let div = document.querySelector("body > header div"); //je récupère le div dans le header
    let colorsTableau = `${div = colors}`; // j'utilise l'injection pour attribuer les couleurs a div
    // console.log(colorsTableau);
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

     // le code de l'étape 2 se passe ici
    let div = document.querySelector("body > header div"); 
    div.addEventListener("click", function(loadPalette){
        for(let i=0; i < div.length ; i++){
            selectColor;
            console.log(div[i]);
            
        }
    });

//     // le code de l'étape 3 se passe ici

});