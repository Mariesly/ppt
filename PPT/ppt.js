var persona
var resultado

const nombre = ["piedra", "papel", "tijera"];
var maquina = nombre[Math.floor(Math.random() * nombre.length)];
console.log("La maquina escogio: "+ maquina);

if (((persona=="piedra")&&(maquina=="tijera")) || ((persona=="papel")&&(maquina=="piedra")) || ((persona=="tijera")&&(maquina=="papel"))) {
    resultado="Felicidades! Ganaste"
    console.log(resultado)
}
else if(persona==maquina){
    resultado="empatados"
    console.log(resultado)
}
else{
    resultado="Lo siento, perdiste"
    console.log(resultado)
}