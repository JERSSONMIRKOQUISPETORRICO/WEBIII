console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 13. Anidamiento de promesas -> async/await
function promesa1() {
  return new Promise((res) => setTimeout(() => res("13: promesa1"), 1000));
}
function promesa2() {
  return new Promise((res) => setTimeout(() => res("13: promesa2"), 1000));
}
async function ejecutarPromesas() {
  let p1 = await promesa1();
  console.log(p1);
  let p2 = await promesa2();
  console.log(p2);
}
ejecutarPromesas();