console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 9. Promesa después de 3 segundos
function promesaExito() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("9: Éxito después de 3s"), 3000);
  });
}
promesaExito().then(console.log);