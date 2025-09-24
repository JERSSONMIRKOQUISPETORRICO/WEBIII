console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 8. Callback después de 2 segundos
function ejecutarCallback(callback) {
  setTimeout(callback, 2000);
}
ejecutarCallback(() => console.log("8: Callback ejecutado después de 2s"));