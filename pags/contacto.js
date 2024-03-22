






const modoOscuroBtn = document.getElementById("modoOscuroBtn");


modoOscuroBtn.addEventListener("click", function() {
 
    document.body.classList.toggle("dark-mode");
});



  
  function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    const adivinanza = parseInt(document.getElementById("adivinanzaInput").value);

    if (adivinanza === numeroSecreto) {
        document.getElementById("mensaje").innerText = "¡Felicidades! ¡Has adivinado el número correctamente!";
    } else {
        document.getElementById("mensaje").innerText = "¡Incorrecto! Inténtalo de nuevo.";
    }
}






/*juego*/



document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById("gameArea");
    const player = document.getElementById("player");
    const scoreboard = document.getElementById("score");
    let score = 0;

    
    function createObject() {
        const newObject = document.createElement("div");
        newObject.classList.add("object");
        newObject.style.left = `${Math.random() * (gameArea.offsetWidth - 20)}px`;
        newObject.style.top = `${Math.random() * (gameArea.offsetHeight - 20)}px`;
        gameArea.appendChild(newObject);
    }

    
    for (let i = 0; i < 20; i++) {
        createObject();
    }

 
    document.addEventListener("keydown", function(event) {
        const moveStep = 10;

        if (event.key === "a" || event.key === "A") { 
            if (player.offsetLeft - moveStep >= 0) {
                player.style.left = `${player.offsetLeft - moveStep}px`;
            }
        } else if (event.key === "d" || event.key === "D") {
            if (player.offsetLeft + player.offsetWidth + moveStep <= gameArea.offsetWidth) {
                player.style.left = `${player.offsetLeft + moveStep}px`;
            }
        } else if (event.key === "w" || event.key === "W") { 
            if (player.offsetTop - moveStep >= 0) {
                player.style.top = `${player.offsetTop - moveStep}px`;
            }
        } else if (event.key === "s" || event.key === "S") { 
            if (player.offsetTop + player.offsetHeight + moveStep <= gameArea.offsetHeight) {
                player.style.top = `${player.offsetTop + moveStep}px`;
            }
        }
        
    
        const playerRect = player.getBoundingClientRect();
        const objects = document.querySelectorAll(".object");
        objects.forEach(function(object) {
            const objectRect = object.getBoundingClientRect();
            if (
                playerRect.left < objectRect.right &&
                playerRect.right > objectRect.left &&
                playerRect.top < objectRect.bottom &&
                playerRect.bottom > objectRect.top
            ) {
                object.remove();
                score++;
                scoreboard.textContent = score;
                if (score === 20) {
                    alert("¡Felicidades! ¡Has recolectado todos los objetos y has ganado!");
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById("gameArea");
    const objects = document.querySelectorAll(".object");

  
    const gameAreaRect = gameArea.getBoundingClientRect();
    const gameAreaWidth = gameAreaRect.width;
    const gameAreaHeight = gameAreaRect.height;

  
    function updateObjectPosition(object) {
   
        const objectRect = object.getBoundingClientRect();
        const objectWidth = objectRect.width;
        const objectHeight = objectRect.height;

      
        const maxX = gameAreaWidth - objectWidth;
        const maxY = gameAreaHeight - objectHeight;

        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

       
        object.style.left = `${randomX}px`;
        object.style.top = `${randomY}px`;
    }

    objects.forEach(function(object) {
        updateObjectPosition(object);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById("player");
    const objects = document.querySelectorAll(".object");
    const scoreboard = document.getElementById("score");
    
    let score = 0; 
    

    function checkCollision(object) {
        const playerRect = player.getBoundingClientRect();
        const objectRect = object.getBoundingClientRect();
        return (
            playerRect.left < objectRect.right &&
            playerRect.right > objectRect.left &&
            playerRect.top < objectRect.bottom &&
            playerRect.bottom > objectRect.top
        );
    }


    objects.forEach(function(object) {
        object.addEventListener("click", function() {
            if (checkCollision(object)) {
                object.style.display = "none"; 
                score++; // Incrementar el marcador
                scoreboard.textContent = score;
                if (score === 20) {
                    alert("¡Felicidades! Has recolectado 20 objetos. ¡Has ganado!");
                    resetGame(); // Reiniciar el juego
                }
            }
        });
    });

   
   function resetGame() {
    score = 0; 
    scoreboard.textContent = score;
    const objects = document.querySelectorAll(".object");
    objects.forEach(function(object) {
        object.remove();
    });
    for (let i = 0; i < 20; i++) {
        createObject();
    }
}
});