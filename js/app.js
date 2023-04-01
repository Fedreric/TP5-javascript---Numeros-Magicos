let numAleatorio = 0;
const form = document.getElementById('formulario');
const contenedorNumIngresados = document.getElementById('contenedorNumIngresados');
let bandera = false;
form.addEventListener('submit', adivinar);

function generarNumAleatorio() {
    if (bandera === false) {
        numAleatorio = Math.floor(Math.random() * (50 - 1) + 1);
        console.log(numAleatorio);
        bandera = true;
        contenedorNumIngresados.innerHTML = '';
        return numAleatorio;
    } else {
        alert('El juego ya inicio! Adivina el numero.');
    }
}

function numIngresado(tipo, numero) {
    contenedorNumIngresados.innerHTML += `
    <div class="caja-${tipo} col-4 col-md-2 col-lg-1">
    ${numero} 
    <i class="bi bi-chevron-double-${tipo}"></i>
  </div>`
}

function adivinar(e) {
    e.preventDefault();
    console.log('desde adivinar');
    let input = document.getElementById('numero');

    if (parseInt(input.value) >= 1 && parseInt(input.value) <= 50) {
        if (parseInt(input.value) === numAleatorio) {
            alert(`Correcto! adivinaste, el numero era: ${numAleatorio}`);
            bandera = false;
            contenedorNumIngresados.innerHTML = `
            <div class="caja-win text-center">
                <p class="m-0 py-1 lead">GANASTE!!</p>
                <p class="m-0 pb-1 lead">Preciona "Comenzar" para volver a jugar</p>
            </div>`
        } else if (parseInt(input.value) < numAleatorio) {
            alert(`Incorrecto! el numero es mayor a : ${input.value}`);
            numIngresado('up',input.value);
        } else {
            alert(`Incorrecto! el numero es menor a : ${input.value}`);
            numIngresado('down',input.value);
        }
    } else {
        alert('Ingresa un numero entre 1 y 50');
    }
    form.reset();
}