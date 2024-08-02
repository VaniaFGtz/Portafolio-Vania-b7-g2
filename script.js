// alert("Holis mundo atácate");
//con let las variables viven en este archivo no son globales como lo es var

//Este es para un solo elemento
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// reconoces una acción porque tiene paréntesis después del nombre de la acción
// a veces tiene el operador punto
typewriter
  .pauseFor(2500) //valor en milisegundos 2.5s
  .typeString('Ingeniera en sistemas computacionales y técnico en programación.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
//   .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
  .start();

  //un objeto tiene propiedades y/o características y ejecutan métodos