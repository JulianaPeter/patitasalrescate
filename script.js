document.addEventListener("DOMContentLoaded", function(event) {
    
    var greeted = localStorage.getItem('greeted');

    if (!greeted) {
     
        var username = prompt("Por favor, ingresa tu nombre:");

      
        if (username !== null && username.trim() !== "") {
            
            alert("¡Bienvenido, " + username + "!");
        } else {
          
            alert("¡Bienvenido! (Sin nombre)");
        }

    
        localStorage.setItem('greeted', true);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".banner img"); 

    function changeImage() {
        images[currentImageIndex].classList.remove("active"); 
        currentImageIndex = (currentImageIndex + 1) % images.length; 
        images[currentImageIndex].classList.add("active"); 
    }


    setInterval(changeImage, 5000);
});


function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

   
    var newBrightness = body.classList.contains("dark-mode") ? "70%" : "100%";

    
    document.documentElement.style.setProperty('--brightness', newBrightness);
}




document.addEventListener("DOMContentLoaded", function() {
 
    const juegos = [
        { nombre: "Super Mario Bros", imagen: "https://i.pinimg.com/originals/67/85/ed/6785ed59293366d5d34ac3c775e735d9.jpg", enlace: "#" },
        { nombre: "The Legend of Zelda", imagen: "https://i.pinimg.com/736x/97/bf/cb/97bfcb329317ad87e07efd6f77288f50.jpg", enlace: "#" },
        { nombre: "Pokémon", imagen: "https://user-images.githubusercontent.com/63087888/87461299-8582b900-c60e-11ea-82ff-7a27a51859d0.png", enlace: "#" },
        { nombre: "Minecraft", imagen: "https://cdn2.steamgriddb.com/icon/986648642d1a68a3178f6869689cc260.png", enlace: "#" },
        { nombre: "Silent Hill", imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42881d3a-22b8-44e8-b60f-d2300200ad57/d4ziq6w-d1608fe3-9b43-4620-8542-04847cdc8578.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyODgxZDNhLTIyYjgtNDRlOC1iNjBmLWQyMzAwMjAwYWQ1N1wvZDR6aXE2dy1kMTYwOGZlMy05YjQzLTQ2MjAtODU0Mi0wNDg0N2NkYzg1NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Z0xMe1ofbpo80kJYFKI7cOBslGlM0Z_gv1_oIsEcPqw", enlace: "#" },
        { nombre: "Among Us", imagen: "https://cdn2.steamgriddb.com/icon_thumb/254ed7d2de3b23ab10936522dd547b78.png", enlace: "#" }
    ];

  
    const listaJuegos = document.getElementById("lista-juegos");


    juegos.forEach(juego => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = juego.imagen;
        img.alt = juego.nombre;
        const span = document.createElement("span");
        span.textContent = juego.nombre;
        
        li.addEventListener("click", function() {
            window.location.href = juego.enlace; 
        });
        li.appendChild(img);
        li.appendChild(span);
        listaJuegos.appendChild(li);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("sugerirJuegoForm");
    const mensajeExito = document.getElementById("mensajeExito");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreJuego = form.querySelector("input[type='text']").value;

       
        if (nombreJuego.trim() === "") {
            mensajeError.textContent = "Por favor, ingresa el nombre del juego.";
            mensajeError.style.display = "block";
            mensajeExito.style.display = "none";
        } else {
           
            mensajeExito.textContent = `¡Gracias por tu sugerencia! Se ha enviado el juego "${nombreJuego}" para revisión.`;
            mensajeExito.style.display = "block";
            mensajeError.style.display = "none";
            form.querySelector("input[type='text']").value = "";
        }
    });
});











	
     window.addEventListener('load',iniciar,false);

     
     var contador=0;

     function iniciar(){
         setInterval('cambiarImg()',5000);
     }

        var obj=document.getElementById('slider');
     var obj2=obj.getElementsByTagName('img');

     function cambiarManual(sentido)
     {
         if (sentido=="DER") {
             obj2[contador].style.opacity=0;
             if (contador<obj2.length-1) 
             {
                 contador++;
                 obj2[contador].style.opacity=1;
                 console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
             }
             else
             {
                 contador=0;
                 obj2[contador].style.opacity=1;
                 console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
             }
         }
         else if (sentido=="IZQ") 
         {
             obj2[contador].style.opacity=0;
             if (contador!=0) 
             {
                 contador--;
                 obj2[contador].style.opacity=1;
             }
             else
             {
                 contador=obj2.length-1;
                 obj2[contador].style.opacity=1;
             }
         }
     }

     function cambiarImg(){	        

         if(contador==obj2.length){
             for(var i=0; i<obj2.length; i++){
                 obj2[i].style.opacity='0';
                 contador--;
             }
             obj2[contador].style.opacity='1';
         }
         else
         {
             obj2[contador].style.opacity='1';
             contador++;
         }
         
     }



     function cambiarImagen() {
        var imagen1 = document.getElementById("imagen1");
        var imagen2 = document.getElementById("imagen2");
        var dialogo = document.getElementById("dialogo");
    
   
        if (imagen1.style.display === "block" || imagen1.style.display === "") {
            imagen1.style.display = "none";
            imagen2.style.display = "block";
            dialogo.style.display = "block"; 
        } else {
            imagen1.style.display = "block";
            imagen2.style.display = "none";
            dialogo.style.display = "none"; 
        }
    }
    












    function play(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
      
        let result;
      
        if (userChoice === computerChoice) {
          result = "¡Es un empate!";
        } else if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "paper" && computerChoice === "rock") ||
          (userChoice === "scissors" && computerChoice === "paper")
        ) {
          result = "¡Ganaste!";
        } else {
          result = "¡Perdiste!";
        }
      
        document.getElementById("result").innerText = `Elegiste ${userChoice}, la computadora eligió ${computerChoice}. ${result}`;
      }
      
