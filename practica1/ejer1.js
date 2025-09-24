console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 1. Contar cuántas veces aparece cada vocal en un texto
function contarVocales(texto) {
  let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let letra of texto.toLowerCase()) {
    if (resultado.hasOwnProperty(letra)) {
      resultado[letra]++;
    }
  }
  return resultado;
}
console.log("1:", contarVocales("euforia"));

