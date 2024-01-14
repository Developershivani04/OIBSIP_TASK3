let degreeType = document.getElementById("degree-typ");
let result = document.getElementById("result");
let convertBtn = document.getElementById("convert");
function converttocelcius(){
    let degree = document.getElementById("degree");
    let input = degree.value;
    if(degreeType.value === "farenhite"){
        let farenhiteToCelcius = (input - 32)*(5/9);
        result.innerHTML = `${farenhiteToCelcius.toFixed(3)} &deg; C`
    }     
    else{
        let kelvinToCelcius = input-273.15;
        result.innerHTML =`${kelvinToCelcius.toFixed(3)} &deg; C`
    }
}
