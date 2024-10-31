const frases = [
  "Original",
  "Deliciosa",
  "Jugosa",
  "BurHub" 
];

const textoContenedor = document.getElementById("contenedor-texto");
const contenedorInvisible = document.querySelector(".contenedor-invisible");
let index = 0;

function animarFrase() {
  if (index < frases.length - 1) {
      // Actualiza el texto 
      textoContenedor.innerHTML = frases[index];

      // Animación de entrada desde arriba
      gsap.fromTo(
          textoContenedor,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      // Pausa del texto
      gsap.to(textoContenedor, {
          y: 50,
          opacity: 0,
          delay: 0.6,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
              index++;
              animarFrase(); 
          }
      });
  } else {
      animarBroed(); 
  }
}

// Cambia el fondo de la página 
document.body.style.backgroundColor = "#EB304B";

function animarBroed() {
  // Texto de burhub
  textoContenedor.innerHTML = "BurHub";
  
  // baja burhub mientras está en el contenedor
  gsap.fromTo(
      textoContenedor,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", onComplete: () => {
          // Esto para que la palabra "BurHub" salga antes de crecer, del contenedor
          contenedorInvisible.style.overflow = "visible";
          
          // La animación de la explosión
          gsap.to(textoContenedor, {
              scale: 2.5, 
              duration: 0.3, 
              ease: "back.out(1.2)", 
              delay: 0.2, 
              onComplete: () => {

                document.body.style.backgroundColor = "white"; // Restablece a blanco

                document.body.style.backgroundImage = "url('img/Fondo.png')";

                document.body.style.backgroundSize = "100% 90%"; // Cubre el ancho completo y solo el 50% de la altura
                document.body.style.backgroundPosition = "center 80%";
document.body.style.backgroundRepeat = "no-repeat";

                

                  // Restablece el overflow del contenedor
                  contenedorInvisible.style.overflow = ""; 
                  textoContenedor.style.display = "none";

                  // Muestra el contenido de la página y llama a la animación principal
                  document.getElementById("contenido-pagina").style.display = "block";
                  animarContenidoPrincipal(); // Ejecuta la animación principal aquí
              }
          });
      }}
  );
}

// Animación del contenido principal
function animarContenidoPrincipal() {
  // Animación de "explosión" para cada elemento
  gsap.from(".inicio__titulo", { 
      duration: 0.6, 
      delay: 0.2, 
      opacity: 0, 
      scale: 0.5, // Empieza más pequeño
      ease: "back.out(1.7)", // Rebote más fuerte al final
  });
  
  gsap.from(".inicio__eslogan", { 
      duration: 0.6, 
      delay: 0.4, 
      opacity: 0, 
      scale: 0.5, 
      ease: "back.out(1.7)" 
  });

  gsap.from(".inicio__texto1", { 
    duration: 0.6, 
    delay: 0.4, 
    opacity: 0, 
    scale: 0.5, 
    ease: "back.out(1.7)" 
});


  
  gsap.from(".inicio__salsa", { 
      duration: 0.5, 
      delay: 0.2, 
      opacity: 0, 
      scale: 0.5, 
      ease: "bounce.out" // Efecto de rebote como si saltara
  });

  gsap.from(".inicio__ham2", { 
    duration: 0.5, 
    delay: 0.2,
    opacity: 0, 
    scale: 0.5, 
    ease: "bounce.out" // Efecto de rebote como si saltara
});

gsap.from(".inicio__ham3", { 
  duration: 0.5, 
  delay: 0.2, 
  opacity: 0, 
  scale: 0.5, 
  ease: "bounce.out" // Efecto de rebote como si saltara
});



gsap.from(".inicio__papafrita", { 
  duration: 0.5, 
  delay: 0.2, 
  opacity: 0, 
  scale: 0.5, 
  ease: "bounce.out" // Efecto de rebote como si saltara
});

gsap.from(".inicio__ham1", { 
  duration: 0.5, 
  delay: 0.2, 
  opacity: 0, 
  scale: 0.5, 
  ease: "bounce.out" // Efecto de rebote como si saltara
});






}

const sonidoHover = new Audio('Sonido/Click.mp3'); // Reemplaza con la ruta correcta de tu archivo de sonido

    // Seleccionar el botón y añadir el evento 'mouseenter' para reproducir el sonido al pasar el cursor
    document.getElementById('inicio__boton').addEventListener('mouseenter', () => {
        sonidoHover.currentTime = 0; // Reinicia el audio para que suene cada vez que entres
        sonidoHover.play(); // Reproduce el audio
    });





const cordinar = {x: 0, y: 0}
const circulos = document.querySelectorAll('.circulo');


circulos.forEach(function(circulo){
  circulo.x = 0;
  circulo.y = 0;

});

window.addEventListener('mousemove', function(n){
  cordinar.x = n.clientX;
  cordinar.y = n.clientY;

  


});

function circuloAnimado(){

let x = cordinar.x;
let y = cordinar.y;


circulos.forEach(function (circulo, index){
  circulo.style.left = x -12 + "px";
  circulo.style.top = y -12 + "px";

circulo.style.scale = (circulos.length -index) / circulos.length;

circulo.x = x;
circulo.y = y;

const siguienteCirculo = circulos[index + 1] || circulos[0];
x += (siguienteCirculo.x - x) * 0.3;
y += (siguienteCirculo.y - y) * 0.3;


});

requestAnimationFrame(circuloAnimado);


}


circuloAnimado();



// Inicia la animación con la primera frase
animarFrase();


