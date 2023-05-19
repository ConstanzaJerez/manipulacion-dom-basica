const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  //console.log({event});
//event.preventDefault(); //para que no se recarge la pag

const sumaInputs = +input1.value + +input2.value;
pResult.innerText = "Resultado: " + sumaInputs;
}






















//addEventListener:
//Este metodo sirve para escuchar cualquier tipo de evento que ocurra dentro de un objeto, estos objetos pueden ser un elemento HTML, una ventana, el mismo documento, un XMLhttpRequest.
//Los eventos pueden ser:
    //blur: Cuando el elemento pierde el foco.

    //click: El usuario hace clic sobre el elemento.

    //dblclick: El usuario hace doble clic sobre el elemento.

    //focus: El elemento gana el foco.

    //keydown: El usuario presiona una tecla.

    //keypress: El usuario presiona una tecla y la mantiene pulsada.

    //keyup: El usuario libera la tecla.

    //load: El documento termina su carga.

    //mousedown: El usuario presiona el botón del ratón en un elemento.

   // mousemove: El usuario mueve el puntero del ratón sobre un elemento.

   // mouseout: El usuario mueve el puntero fuera de un elemento.

   // mouseover: El usuario mantiene el puntero sobre un elemento.

   // mouseup: El usuario libera el botón pulsado del ratón sobre un elemento.

   // unload: El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.