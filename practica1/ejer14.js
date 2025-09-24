console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 14. Convertir promesa en callback
function promesaACallback(promesa, cb) {
  promesa.then((res) => cb(null, res)).catch((err) => cb(err));
}
let prom = Promise.resolve("14: éxito con promesa a callback");
promesaACallback(prom, (err, res) => console.log(res));