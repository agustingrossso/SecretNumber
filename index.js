

let myForm = document.getElementById("formulario");
myForm.addEventListener("submit", validarForm);

function validarForm (e) {
    // PREVENIR EL EVENTO POR DEFAULT
    e.preventDefault();
    
    let resultado = e.target;
    let ingreso = parseInt(resultado.children[0].value) ;

    // LLAMADA A LA FUNCION DEL JUEGO
    algoritmoJuego (ingreso)
}

let numeroSecreto = 95;
let intentos = 9;

function algoritmoJuego (ingreso) {

    while (numeroSecreto != ingreso && intentos > 0) {
        if (numeroSecreto < ingreso) {
            console.log("Muy Alto")
            // ALERTS QUE MUESTRA RESULTADO
            swal("Muy Alto", "Prueba un numero mas bajo 🤞😉 \n te quedan " + intentos -- + " intentos", "error");
            
        }else if (numeroSecreto > ingreso) {
            console.log("Muy Bajo")
            // ALERTS QUE MUESTRA RESULTADO

            swal("Muy Bajo", "Prueba un numero mas alto 🤞😉 \n te quedan " + intentos -- + " intentos", "error");
            
        }
      
        
        break

    }

    if (numeroSecreto === ingreso) {
        console.log("Ganaste " + "lo lograste en " + intentos)
        
        
        swal("GANASTE ✨🚀", " lo lograste en " + intentos + " intentos", "success");
        confetti();

    }else if (numeroSecreto != ingreso && intentos < 1) {
        swal("NO LO HAS LOGRADO 😥", "\n lo sentimos mucho, vuelve a intentar cuando quieras 😉  " + "\n el numero secreto era: " + numeroSecreto, "error");
        }
}









    
    
    
