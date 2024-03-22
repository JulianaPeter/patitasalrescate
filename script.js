// Función para pedir el nombre del usuario
function pedirNombre() {
  var nombre = prompt("Por favor, ingrese su nombre:");

  if (nombre !== null && nombre !== "") {
      // Guardar el nombre en el almacenamiento local
      localStorage.setItem("nombreUsuario", nombre);
      return nombre;
  } else {
      // Si no se ingresó un nombre, volver a pedirlo
      return pedirNombre();
  }
}

// Verificar si el nombre del usuario ya está guardado en el almacenamiento local
var nombreGuardado = localStorage.getItem("nombreUsuario");

// Si no hay un nombre guardado, pedir al usuario que ingrese su nombre
if (!nombreGuardado) {
  nombreGuardado = pedirNombre();
}

// Mostrar un saludo personalizado
alert("Hola, " + nombreGuardado + "! Bienvenido/a.");

// Array de mensajes de bienvenida
var mensajesBienvenida = [
  "¡Bienvenido a mi página web!",
  "¡Hola! ¡Gracias por visitar mi sitio!",
  "¡Hola, amante de los videojuegos! ¡Bienvenido!",
  "¡Gracias por estar aquí! ¡Espero que disfrutes tu visita!",
  "¡Bienvenido! ¡Aquí encontrarás los mejores juegos!",
  "¡Hola! ¡Qué bueno verte por aquí!"
];

// Función para obtener un mensaje aleatorio del array
function obtenerMensajeAleatorio() {
  var indice = Math.floor(Math.random() * mensajesBienvenida.length);
  return mensajesBienvenida[indice];
}

// Actualizar el mensaje de bienvenida en el párrafo debajo del banner
document.getElementById("mensajeBienvenida").textContent = obtenerMensajeAleatorio();






// Cambiar imágenes del banner
var images = ["./img/5555.jpg", "./img/33.png", "./img/3.jpg"];
var currentIndex = 0;

function changeBanner() {
  document.getElementById("bannerImg").src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBanner, 2000); 





// Define array de videojuegos
var videojuegos = [
  {
    nombre: "Resident Evil 5",
    descripcion: "Resident Evil 5 es un videojuego de acción y terror desarrollado y publicado por Capcom. Es la séptima entrega principal de la serie Resident Evil.",
    lanzamiento: "5 de marzo de 2009",
    imagen: "../img/3333.webp" // Cambiar la ruta de la imagen si es necesario
  },
  {
    nombre: "Shadow Of The Colossus",
    descripcion: "Shadow of the Colossus es un videojuego de acción y aventuras desarrollado por Team Ico y publicado por Sony Computer Entertainment.",
    lanzamiento: "18 de octubre de 2005",
    imagen: "../img/6666.jpg" // Cambiar la ruta de la imagen si es necesario
  },
  {
    nombre: "Fallout 4",
    descripcion: "Fallout 4 es un juego de rol de acción desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks.",
    lanzamiento: "10 de noviembre de 2015",
    imagen: "../img/22.png" // Cambiar la ruta de la imagen si es necesario
  },
  {
    nombre: "Life Is Strange",
    descripcion: "Life is Strange es un videojuego de aventura desarrollado por Dontnod Entertainment y publicado por Square Enix. ",
    lanzamiento: "30 de enero de 2015",
    imagen: "../img/55.png" // Cambiar la ruta de la imagen si es necesario
  },
 
  // Puedes agregar más juegos aquí
];

// Función para agregar juegos al DOM
function agregarJuegos() {
  var appContainer = document.getElementById("app");
  appContainer.innerHTML = ""; // Limpiar contenido anterior
  
  videojuegos.forEach(function(juego) {
    var juegoHTML = document.createElement("div");
    juegoHTML.classList.add("videojuego");
    
    var imagen = document.createElement("img");
    imagen.src = juego.imagen;
    imagen.alt = juego.nombre;
    juegoHTML.appendChild(imagen);
    
    var titulo = document.createElement("h2");
    titulo.textContent = juego.nombre;
    juegoHTML.appendChild(titulo);
    
    var desc = document.createElement("p");
    desc.textContent = juego.descripcion;
    juegoHTML.appendChild(desc);
    
    var lanzamiento = document.createElement("p");
    lanzamiento.textContent = "Lanzamiento: " + juego.lanzamiento;
    juegoHTML.appendChild(lanzamiento);
    
    appContainer.appendChild(juegoHTML);
  });
}

// Mostrar u ocultar la lista de juegos al hacer clic en el botón
var botonMostrar = document.getElementById("mostrarJuegos");
botonMostrar.addEventListener("click", function() {
  var listaJuegos = document.getElementById("app");
  if (listaJuegos.style.display === "none") {
    listaJuegos.style.display = "block";
    agregarJuegos(); // Mostrar la lista de juegos al hacer clic en el botón
  } else {
    listaJuegos.style.display = "none";
  }
});


// Selecciona el elemento de texto del banner
var bannerText = document.querySelector(".bannerText");

// Define la función para animar el texto
function animateText() {
  // Define la posición inicial del texto
  var initialPosition = -10; // Supongamos que el texto comienza ligeramente arriba de su posición normal
  
  // Define la posición final del texto
  var finalPosition = 10; // Supongamos que el texto se mueve ligeramente hacia abajo
  
  // Define la velocidad de la animación (en milisegundos)
  var animationDuration = 4000; // 4 segundos
  
  // Define la cantidad de pasos en la animación
  var steps = 100; // 100 pasos
  
  // Calcula la cantidad de píxeles que el texto se moverá en cada paso
  var stepSize = (finalPosition - initialPosition) / steps;
  
  // Inicia un bucle de animación utilizando setInterval
  var currentPosition = initialPosition;
  var goingDown = true;
  setInterval(function() {
    // Calcula la nueva posición del texto para este paso
    currentPosition += goingDown ? stepSize : -stepSize;
    
    // Si el texto llega a la posición final, cambia la dirección
    if (currentPosition >= finalPosition || currentPosition <= initialPosition) {
      goingDown = !goingDown;
    }
    
    // Aplica la transformación CSS al elemento de texto
    bannerText.style.transform = "translate(-50%, " + currentPosition + "px)";
  }, animationDuration / steps);
}

// Llama a la función para iniciar la animación
animateText();









// Obtenemos el botón de "Modo Oscuro"
const modoOscuroBtn = document.getElementById("modoOscuroBtn");

// Escuchamos el evento de clic en el botón de "Modo Oscuro"
modoOscuroBtn.addEventListener("click", function() {
    // Toggle dark mode class en el body
    document.body.classList.toggle("dark-mode");
});











/*TERMINADOINDEX*/



























