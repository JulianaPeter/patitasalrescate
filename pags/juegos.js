





// Obtenemos el botón de "Modo Oscuro"
const modoOscuroBtn = document.getElementById("modoOscuroBtn");

// Escuchamos el evento de clic en el botón de "Modo Oscuro"
modoOscuroBtn.addEventListener("click", function() {
    // Toggle dark mode class en el body
    document.body.classList.toggle("dark-mode");
});











/*TERMINADOINDEX*/


  // Datos de los juegos
 // Datos de los juegos
const games = [
  { name: "LIFE IS STRANGE", description: "Descripción del Juego 1", imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202103/1012/N04lh9ZoSb004IhEe6mYEcWk.jpg", link: "#", genre: "Acción" },
  { name: "GTA V", description: "Descripción del Juego 2", imageUrl: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2014/09/59755-ya-hay-fecha-trailer-gta-5-ps4-xbox-one.jpg?tf=3840x", link: "#", genre: "Acción" },
  { name: "BIOSHOCK", description: "Descripción del Juego 3", imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/7670/capsule_616x353.jpg?t=1568739889", link: "#", genre: "Aventura" },
  { name: "FAR CRY NEW DAWN", description: "Descripción del Juego 4", imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/939960/capsule_616x353.jpg?t=1694554850", link: "#", genre: "Acción" },
  { name: "RED DEAD REDEMPTION II", description: "Descripción del Juego 5", imageUrl: "https://i.ytimg.com/vi/SXvQ1nK4oxk/maxresdefault.jpg", link: "#", genre: "Aventura" },
  { name: "THE EVIL WITHIN", description: "Descripción del Juego 6", imageUrl: "https://cdn1.epicgames.com/offer/d602fd70876141ba9bf4d54809c423d1/EGS_TheEvilWithin_TangoGameworks_S1_2560x1440-16b7f817d8803517fbecbf3f175ac997", link: "#", genre: "Acción" },
  { name: "RESIDENT EVIL", description: "Descripción del Juego 7", imageUrl: "https://www.laps4.com/wp-content/uploads/2023/03/Resident-Evil-4-2.jpg", link: "#", genre: "Acción" },
  { name: "BORDERLANDS", description: "Descripción del Juego 8", imageUrl: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_BorderlandsGameoftheYearEdition_image1600w.jpg", link: "#", genre: "Acción" },
];

const catalog = document.getElementById('gameCatalog');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');

// Función para mostrar los juegos en el catálogo
function renderCatalog() {
  catalog.innerHTML = ''; // Limpiar el contenido existente
  
  const searchText = searchInput.value.trim().toLowerCase(); // Obtener el texto de búsqueda y convertirlo a minúsculas
  const selectedGenre = genreFilter.value; // Obtener el género seleccionado
  
  games.forEach((game) => {
    // Verificar si el nombre del juego incluye el texto de búsqueda y si coincide con el género seleccionado (o si no se ha seleccionado ningún género)
    if ((game.name.toLowerCase().includes(searchText) || searchText === '') && (game.genre === selectedGenre || (game.name === "BIOSHOCK" && selectedGenre === "Aventura") || selectedGenre === '')) {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
  
      const link = document.createElement('a');
      link.href = game.link;
      link.target = "_blank";
      gameCard.appendChild(link);
  
      const image = document.createElement('img');
      image.src = game.imageUrl;
      image.alt = game.name;
  
      const gameDetails = document.createElement('div');
      gameDetails.classList.add('game-description');
      gameDetails.innerHTML = `<p>${game.name}</p>`;
  
      link.appendChild(image);
      gameCard.appendChild(gameDetails);
      catalog.appendChild(gameCard);
    }
  });
}

// Agregar evento de escucha al campo de búsqueda y al filtro de género
searchInput.addEventListener('input', renderCatalog);
genreFilter.addEventListener('change', renderCatalog);

// Llamar a renderCatalog() al cargar la página para mostrar todos los juegos inicialmente
renderCatalog();



const gameCatalog = document.getElementById('gameCatalog');
const gameForm = document.getElementById('gameForm');
const successMessage = document.getElementById('successMessage');

gameForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const gameName = document.getElementById('gameName').value.trim();

  // Validación del campo de nombre del juego
  if (!gameName) {
    alert('Por favor, ingresa el nombre del juego.');
    return;
  }

  // Mostrar mensaje de agradecimiento con el nombre del juego ingresado
  successMessage.textContent = `¡Gracias por tu sugerencia de "${gameName}"!`;
  successMessage.style.color = 'green';

  // Limpiar el campo de nombre del juego
  document.getElementById('gameName').value = '';
});


