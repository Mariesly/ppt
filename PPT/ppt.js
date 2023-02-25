var resultado = null

const nombre = ["piedra", "papel", "tijera"];
let persona = nombre[0]

const $PPTSelect = document.querySelector("#PPT")

$PPTSelect.addEventListener("click", (e) => {
    persona = nombre[parseInt(e.target.value)]
    console.log(persona)
})

const $inputSubmit = document.querySelector("#input-submit")

const $resultText = document.querySelector("#result")
const $machineSelection = document.querySelector("#machineSelection")

$inputSubmit.addEventListener("click", (e) => {
    e.preventDefault()
 
    var maquina = nombre[Math.floor(Math.random() * nombre.length)];
    $machineSelection.textContent = "La maquina escogio: " + maquina;

    console.log({ maquina, persona })

    if (((persona == "piedra") && (maquina == "tijera")) || ((persona == "papel") && (maquina == "piedra")) || ((persona == "tijera") && (maquina == "papel"))) {
        resultado = "Felicidades! Ganaste"
        console.log(resultado)
    }
    else if (persona == maquina) {
        resultado = "empatados"
        console.log(resultado)
    }
    else {
        resultado = "Lo siento, perdiste"
        console.log(resultado)
    }

    $resultText.textContent = resultado

})

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("hola mary")

})