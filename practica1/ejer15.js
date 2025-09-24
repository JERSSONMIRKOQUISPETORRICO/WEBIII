console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 15. Convertir callback en promesa
function callbackAPromesa(fn) {
  return new Promise((resolve, reject) => {
    fn((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
callbackAPromesa((cb) => cb(null, "15: callback convertido a promesa"))
  .then(console.log);