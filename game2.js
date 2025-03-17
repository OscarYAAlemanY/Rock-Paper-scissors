function GetHumanChoice() {
    let eleccion;
    do {
        eleccion = prompt("Elige: 0 (Piedra), 1 (Papel), 2 (Tijera)");
        eleccion = Number(eleccion);
    } while (eleccion !== 0 && eleccion !== 1 && eleccion !== 2);
    return eleccion;
}

function getComputerChoise() {
    return Math.floor(Math.random() * 3);
}

function chooseWinner(usuario, computadora) {
    if (usuario === computadora) {
        return "Empate";
    } else if (
        (usuario === 0 && computadora === 2) || 
        (usuario === 1 && computadora === 0) || 
        (usuario === 2 && computadora === 1)
    ) {
        return "Usuario";
    } else {
        return "Computadora";
    }
}

function playRound() {
    let puntajeUsuario = 0;
    let puntajeComputadora = 0;

    for (ronda = 1; ronda <= 5; ronda++) {
        console.log(  (ronda) );
        
        let usuario = GetHumanChoice();
        let computadora = getComputerChoise();
        
        console.log(( usuario === 0 ? "Piedra" : usuario === 1 ? "Papel" : "Tijera"));
        console.log( (computadora === 0 ? "Piedra" : computadora === 1 ? "Papel" : "Tijera"));

        let ganador = chooseWinner(usuario, computadora);
        
        if (ganador === "Usuario") {
            puntajeUsuario++;
            console.log("¡Ganaste esta ronda!");
        } else if (ganador === "Computadora") {
            puntajeComputadora++;
            console.log("Perdiste esta ronda.");
        } else {
            console.log("Empate.");
        }
    }

    console.log("\n--- Resultado Final ---");
    console.log((puntajeUsuario) - ( puntajeComputadora));
    
    if (puntajeUsuario > puntajeComputadora) {
        console.log("¡Ganaste el juego!");
    } else if (puntajeUsuario < puntajeComputadora) {
        console.log("Perdiste el juego.");
    } else {
        console.log("El juego terminó en empate.");
    }
}

playRound();