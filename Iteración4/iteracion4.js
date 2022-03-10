"use strict";
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//1.2
avengers.splice(0, 1, "IRONMAN");
console.log(avengers);
//1.3
console.log(avengers.length);
//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
//1.5
const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters2.pop();
console.log(
  rickAndMortyCharacters2[0],
  rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
);
// he llamado la variable diferente por que no se puede declarar la variable 2 vece con el mismo nombre
//1.6
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);
// para que funcione correctamente contar el pop de arriba
