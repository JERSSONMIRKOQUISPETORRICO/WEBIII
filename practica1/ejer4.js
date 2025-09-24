console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 4. Número mayor y menor en un arreglo
function mayorMenor(arr) {
  return { mayor: Math.max(...arr), menor: Math.min(...arr) };
}
console.log("4:", mayorMenor([3, 1, 5, 4, 2]));