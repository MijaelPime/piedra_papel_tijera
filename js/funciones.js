const fondopantalla = document.querySelector("body");
let jugadaJuador1 = "";

function iniciarJuego(selecciono, numeroJugador) {

    jugadaJuador1 = selecciono;
    console.log("" +jugadaJuador1);
    alert("Que el Jugador 2 seleccione ahora!..");
}

function terminarJuego (seleccionoJugador2) {

    if(jugadaJuador1 === ""){
        alert("Tiene que Seleccionar Primero el Jugardor 1 ")
    }else {
            console.log("accedio a la funcion");
        //Evalua Jugar 1
            if(jugadaJuador1 === seleccionoJugador2)
            {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es EMPATE");
            } else if(jugadaJuador1 === "papel" && seleccionoJugador2 === "tijera") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 2");
            } else if(jugadaJuador1 === "piedra" && seleccionoJugador2 === "tijera") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 1");
            } else if(jugadaJuador1 === "piedra" && seleccionoJugador2 === "papel") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 2");
            } else if(seleccionoJugador2 === "papel" && jugadaJuador1 === "tijera") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 1");
            } else if(seleccionoJugador2 === "piedra" && jugadaJuador1 === "tijera") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 1");
            } else if(seleccionoJugador2 === "piedra" && jugadaJuador1 === "papel") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 1");
            } else if(jugadaJuador1 === "piedra" && seleccionoJugador2 === "papel") {
                alert("Jugador 1: " +jugadaJuador1 +"\n Jugador 2: "+seleccionoJugador2 +" \n El Resultado es Gano Jugador 2");
            }
        
    }
    
    jugadaJuador1 = "";
}