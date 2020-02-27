let nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let intNombreEtages = parseInt(nombreEtages, 10);
let space = " ";
let hash = "#";

for(let count = 1; count <= nombreEtages; count++) {
  console.log(space.repeat(intNombreEtages), hash.repeat(count));
  intNombreEtages--;
};
