let sep = "=";

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Les livres ont-ils été empruntés au moins une fois
console.log(sep.repeat(40));
console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");

let answer;

for(let index in books) {
   if (books[index].rented > 0) {
     answer = "Oui";
   } else {
     answer = "Non";
       break;
   }
}
console.log(`> ${answer}`);
console.log(sep.repeat(40));

//Trouver le livre le plus emprunté
let x = 0;
let mostRented = "";
let lessRented = "";

for(let index in books) {
  if (books[index].rented > x) {
    x = books[index].rented;
    mostRented = books[index].title;
  }
}

console.log(`Le livre le plus emprunté est : ${mostRented}`);
console.log(sep.repeat(40));

//Trouver le livre le moins emprunté
books.forEach(book => {
  if(book.rented < x) {
    x = book.rented;
    lessRented = book.title;
  };
});
console.log(`Le livre le moinns emprunté est : ${lessRented}`);
console.log(sep.repeat(40));

//Trouer le livre en fonction de l'ID. Ici choisir "873495"
//let searchId = prompt("Quel est l'ID recherché ?")
//console.log(`Le livre ayant l'ID ${searchId} est : ${books.find(element => element.id === parseInt(searchId)).title}`);

//Supprimer le livre avec l'ID 133712
let index = books.findIndex(element => element.id === 133712);
let title = books[index].title;
books.splice(index,1);
console.log(`Le livre ayant l'ID 133712 et du nom de ${title} a bien été supprimé`);
console.log("La liste pour vérification :");
console.log(books);

//Livres triés par odre alphabétique
console.log(sep.repeat(40));

function compare(a, b) {
  const bookA = a.title.toUpperCase();
  const bookB = b.title.toUpperCase();

  let comparison = 0;
  if (bookA > bookB) {
    comparison = 1;
  } else if (bookA < bookB) {
    comparison = -1;
  }
  return comparison;
};
console.log("Liste des livres triés par odre alphabétique :")
console.log(books.sort(compare));
console.log(sep.repeat(40));
