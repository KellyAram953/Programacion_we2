const tablero = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");

let turno = "X";
let celdas = Array(9).fill("");
let juegoActivo = true;

// Crear las 9 celdas del tablero
for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("celda");
    div.setAttribute("data-index", i);
    div.addEventListener("click", jugar);
    tablero.appendChild(div);
}

// Función principal del juego
function jugar(e) {
    const index = e.target.getAttribute("data-index");
    if (celdas[index] !== "" || !juegoActivo) return;

    celdas[index] = turno;
    e.target.textContent = turno;

    if (verificarGanador()) {
        mensaje.textContent = ` ¡Jugador ${turno} gana!`;
        juegoActivo = false;
        return;
    }

    if (!celdas.includes("")) {
        mensaje.textContent = " ¡Empate!";
        juegoActivo = false;
        return;
    }

    turno = turno === "X" ? "O" : "X";
    mensaje.textContent = `Turno del jugador ${turno}`;
}

// Verifica si hay un ganador
function verificarGanador() {
    const combinaciones = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of combinaciones) {
        const [a, b, c] = combo;
        if (celdas[a] && celdas[a] === celdas[b] && celdas[a] === celdas[c]) {
            // resalta las celdas ganadoras
            document.querySelectorAll(".celda")[a].style.background = "#b0ffb0";
            document.querySelectorAll(".celda")[b].style.background = "#b0ffb0";
            document.querySelectorAll(".celda")[c].style.background = "#b0ffb0";
            return true;
        }
    }
    return false;
}

// Reinicia el tablero
function reiniciar() {
    celdas = Array(9).fill("");
    document.querySelectorAll(".celda").forEach(celda => {
        celda.textContent = "";
        celda.style.background = "white";
    });
    turno = "X";
    mensaje.textContent = "Turno del jugador X";
    juegoActivo = true;
}
