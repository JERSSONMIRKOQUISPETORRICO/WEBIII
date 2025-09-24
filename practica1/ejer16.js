console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");


// 16. Migrar promesa a async/await
function promesaEjemplo() {
  return new Promise((res) => setTimeout(() => res("16: promesa con await"), 1000));
}
async function usarPromesa() {
  let resultado = await promesaEjemplo();
  console.log(resultado);
}