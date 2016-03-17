/*-------------------------------------------*\
                    VARIABLES
\*-------------------------------------------*/

// Creamos la var + Recuperamos los elementos :
$boton = document.getElementById("boton"); 
$multiplicacion = document.getElementById("multiplicacion");
$autoclic = document.getElementById("autoclic");
$score = document.getElementById("score");


score = 0; 
nbMultiplicacion = 1; 


/*---------------------------------------------------------------------------------*\
        Calcular y mostrar la puntuación del contenido de los botones
\*---------------------------------------------------------------------------------*/

//Se encarga de mostrar la puntuacion/score :
function mostrarScore() {
    $score.innerHTML = "Score : " + score + " COOKIES OBTENUS ";
}

//Se encarga de mostrar la puntuacion para obtener el multiplicador :
function mostrarNbMultiplicacion() {
    $multiplicacion.innerHTML = "Multipliez x " + nbMultiplicacion + " ( Ponctuation du prochain super Cookie : " + points() + " ) ";
}

//Se encarga de mostrar la puntuacion para obtener el autoclic :
function mostrarAutoclic() {
   $autoclic.innerHTML = "Autoclic de 5 seconds avec un score de : " + aupoints() + " Cookies ";
}

//Muestra la puntuacion/score de cada clic :
function clic() {
    score = score + nbMultiplicacion;
    mostrarScore();
}

/*--------------------------------------------------------------------*\
        Calcular la puntuacion de la multiplicaion y del autoclic
\*--------------------------------------------------------------------*/

//Calcula la puntuacion de de la multiplicacion/Super Cookie
function points() {
    return 10 * (nbMultiplicacion * nbMultiplicacion);
}

//Calcula la puntuacion para obtener el auto clic
function aupoints() {
    return 10;
}

/*------------------------------------------------------------*\
        Conseguir la multiplicacion y el autoclic
\*------------------------------------------------------------*/

// Es la funcion que obtiene la multiplicacion y retirar los puntos del score, una vez utilizada
function obtenerMultiplicacion() {
    if (score >= points()){
        score = score - points(); 
        nbMultiplicacion = nbMultiplicacion +1;
        mostrarNbMultiplicacion();
        mostrarScore();
    } else {
        alert("vous n'avez pas suffisamment de points pour avoir un super cookie");
    }
}

// Es la funcion que obtiene el autoclick y retira los puntos, una vez utilizada.
function obtenerAutoclic() {
    if (score >= aupoints()){
        score = score - aupoints(); 
        timesAutoClic();
        stopTimesAutoClic();
        
    } else {
        alert("vous n'avez pas suffisamment de points pour avoir l'Autoclic");
    }
}

/*-----------------------------------------------------------------------------------------------*\
        Intervalo entre los clics y tiempo del autoclic "1segundo = 1000"

        << Estas dos funciones permiten ejecutar una función pasado un cierto intervalo de tiempo. 
        La única diferencia entre ellas es que 
        "setInterval" se ejecutará una y otra vez en intervalos de x segundos, 
        en cambio, setTimeout se ejecutará una sola vez pasados x segundos. >>

\*----------------------------------------------------------------------------------------------*/

function timesAutoClic() {
    $stop = setInterval($boton.onclick, 1000); //Intervalo del click -> 1 segundo
}

function stopTimesAutoClic() { // Tiempo del autoclick -> 5 segundos
    setTimeout(stoptim, 5000);
}

function stoptim(){
    clearInterval($stop); //Para el setInterval
} 



$boton.onclick = clic; 
$multiplicacion.onclick = obtenerMultiplicacion;
$autoclic.onclick = obtenerAutoclic;
mostrarScore();
mostrarNbMultiplicacion();
mostrarAutoclic();





