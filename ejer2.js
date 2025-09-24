console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");

// ----------------------------
// 2. Invertir orden de caracteres en una cadena
function invertirCadena(cad) {
  return cad.split("").reverse().join("");
}
console.log("2:", invertirCadena("abcd"));