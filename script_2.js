let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
let factorielle = 1;
for(nombre; nombre > 1; nombre--){
  factorielle = factorielle * nombre;
};
console.log(`Le résultat est ${factorielle}`);
