console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 12. Anidamiento de callbacks -> async/await
function tarea1(cb) {
  setTimeout(() => cb("12: tarea1 lista"), 1000);
}
function tarea2(cb) {
  setTimeout(() => cb("12: tarea2 lista"), 1000);
}
async function ejecutarAsync() {
  let r1 = await new Promise((res) => tarea1(res));
  console.log(r1);
  let r2 = await new Promise((res) => tarea2(res));
  console.log(r2);
}
ejecutarAsync();
