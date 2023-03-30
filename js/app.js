let numAleatorio = 0;
const form = document.getElementById('formulario');
let bandera = false;
form.addEventListener('submit', adivinar);

function generarNumAleatorio(){
    if (bandera === false){
        numAleatorio = Math.floor(Math.random() * (50 - 1) + 1);
        console.log(numAleatorio);
        bandera = true;
        return numAleatorio;
    }else{
        alert('El juego ya inicio! Adivina el numero.');
    }
}

function adivinar(e){
    e.preventDefault();
    console.log('desde adivinar');
    let input = document.getElementById('numero');

    if(parseInt(input.value)>= 1 && parseInt(input.value)<= 50){
        if(parseInt(input.value) === numAleatorio){
            alert(`Correcto! adivinaste, el numero era: ${numAleatorio}`);
            bandera = false;
        }else if(parseInt(input.value) < numAleatorio){
            alert(`Incorrecto! el numero es mayor a : ${input.value}`);
        }else{
            alert(`Incorrecto! el numero es menor a : ${input.value}`);
        }
    }else{
        alert('Ingresa un numero entre 1 y 50');
    }    
    form.reset();
}