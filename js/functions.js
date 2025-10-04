var turn = false;
var movimientos = 0;

function turno(button) {
    button.disabled = true;
    button.value = turn ? "X" : "O";
    document.getElementById("status").innerText = `Turno: ${(turn ? "X" : "O")}`;
    turn = !turn;
    verificado();
}

function verificado() {
    if (++movimientos == 9) {
        document.getElementById("status").innerText = "Empate";
        bloquear();
    }
    var botones = document.querySelectorAll("input[type='button']");
    const style = document.createElement('style');
    // Verificamos la primera linea horizontal
    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        style.textContent = `
                    tr:nth-child(1)::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 0;
                        right: 0;
                        height: 10px;
                        background-color: black;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[0].value}`;

    }
    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        style.textContent = `
                    tr:nth-child(2)::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 0;
                        right: 0;
                        height: 10px;
                        background-color: black;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[3].value}`;
    }
    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        style.textContent = `
                    tr:nth-child(3)::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 0;
                        right: 0;
                        height: 10px;
                        background-color: black;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[6].value}`;
    }
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        style.textContent = `
                    td:nth-child(1)::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 50%;
                        width: 10px;
                        background-color: black;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[0].value}`;
    }
    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        style.textContent = `
                    td:nth-child(2)::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 50%;
                        width: 10px;
                        background-color: black;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[1].value}`;
    }
    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        style.textContent = `
                    td:nth-child(3)::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 50%;
                        width: 10px;
                        background-color: black;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[2].value}`;
    }
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        style.textContent = `
                    table::after{
                        content: "";
                        position: absolute;
                        top: 0;
                        left:0;
                        width: calc(100% * 1.414);
                        height: calc(100% * 1.414);
                        border-top: 10px solid black;
                        transform : rotate(45deg);
                        transform-origin: top left;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[0].value}`;
    }
    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        style.textContent = `
                    table::before{
                        content: "";
                        position: absolute;
                        top: 0;
                        right:0;
                        width: calc(100% * 1.414);
                        height: calc(100% * 1.414);
                        border-top: 10px solid black;
                        transform : rotate(-45deg);
                        transform-origin: top right;
                        z-index: 1;
                        pointer-events: none;
                }
                `;
        bloquear();
        document.getElementById("status").innerText = `Gano: ${botones[2].value}`;
    }
    //Esta linea va al final de la funcion verificado
    document.head.appendChild(style);
}

//este metodo bloquea todos los botones en cuanto alguien gane
function bloquear() {

    document.querySelectorAll("input[type='button']").forEach(boton => boton.disabled = true);
}