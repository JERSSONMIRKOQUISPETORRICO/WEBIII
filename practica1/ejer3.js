console.log("======================================");
  console.log("Practica 01 - INF-133 Programación Web 3");
  console.log("Estudiante: JERSSON MIRKO QUISPE TORRICO");
  console.log("CI: 14487821");
  console.log("Carrera: Informática - UMSA");
  console.log("Fecha: 24/09/2025");

// 3. Separar pares e impares en un objeto
function paresImpares(arr) {
  let obj = { pares: [], impares: [] };
  for (let num of arr) {
    if (num % 2 === 0) obj.pares.push(num);
    else obj.impares.push(num);
  }
  return obj;
}
console.log("3:", paresImpares([1, 2, 3, 4, 5]));
