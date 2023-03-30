let numAleatorio = 0;
const form = document.getElementById('formulario');
form.addEventListener('submit', adivinar);
function generarNumAleatorio(){
    numAleatorio = Math.floor(Math.random() * (50 - 1) + 1);
    console.log(numAleatorio);
    return numAleatorio;
}

function adivinar(e){
    e.preventDefault();
    console.log('desde adivinar');
    let input = document.getElementById('numero');
    if(parseInt(input.value) === numAleatorio){
        alert(`Correcto! adivinaste, el numero era: ${numAleatorio}`);
    }else if(parseInt(input.value) < numAleatorio){
        alert(`Incorrecto! el numero es mayor a : ${input.value}`);
    }else{
        alert(`Incorrecto! el numero es menor a : ${input.value}`);
    }
    form.reset();
}