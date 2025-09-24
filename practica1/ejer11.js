// 11. Encadenamiento de promesas
new Promise((res) => res(2))
  .then((num) => num * 2)
  .then((num) => num + 3)
  .then((num) => console.log("11:", num));
