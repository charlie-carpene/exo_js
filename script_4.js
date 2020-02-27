let sep = "=";
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log(sep.repeat(40));
console.log("Liste des entrepreneurs nées dans les années 70 :");
console.log(sep.repeat(40));
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur["year"] <= 1979 && entrepreneur["year"] > 1969) {
    console.log(entrepreneur["first"], entrepreneur["last"], `né(e) en ${entrepreneur["year"]}`);
  }
});

console.log(sep.repeat(40));
console.log("Liste des entrepreneurs et leur age :");
console.log(sep.repeat(40));
entrepreneurs.forEach(entrepreneur => {
  let age = 2020 - entrepreneur.year;
  console.log(`Aujourd'hui ${entrepreneur.first} ${entrepreneur.last} a ${age} ans.`);
});

console.log(sep.repeat(40));
console.log("Liste des entrepreneurs triée par ordre alphabétique :");
console.log(sep.repeat(40));

function compare(a, b) {
  const entrA = a.last.toUpperCase();
  const entrB = b.last.toUpperCase();

  let comparison = 0;
  if (entrA > entrB) {
    comparison = 1;
  } else if (entrA < entrB) {
    comparison = -1;
  }
  return comparison;
};

console.log(entrepreneurs.sort(compare));
