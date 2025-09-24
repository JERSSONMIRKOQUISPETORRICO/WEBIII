console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 5. Determinar si es palíndromo
function esPalindromo(cad) {
  let invertida = cad.split("").reverse().join("");
  return cad === invertida;
}
console.log("5:", esPalindromo("oruro"));
console.log("5:", esPalindromo("hola"));