const h1 = document.querySelector("h1");

const ul = document.createElement("ul");
const li = document.createElement("li");

h1.insertAdjacentElement("afterend", ul);
ul.appendChild(li);

const logPokemons = async () => {
  const res = await fetch("https://majazocom.github.io/Data/pokemons.json");
  const pokemons = await res.json();
  console.log(pokemons);
};

// logPokemons();

const listPokemon = async () => {
  const res = await fetch("https://majazocom.github.io/Data/pokemons.json");
  const pokemons = await res.json();
  pokemons.forEach((poke, i) => {
    console.log(`Pokemon nr ${i} is ${poke.name}`);
  });
};

// listPokemon();
let html = ``;

const renderPokemon = async () => {
  const res = await fetch("https://majazocom.github.io/Data/pokemons.json");
  const pokemons = await res.json();
  pokemons.forEach((poke, i) => {
    html += `<li>Pokemon nr ${i} is ${poke.name}</li>`;
  });
  ul.innerHTML = html;
};

// renderPokemon();

const fetchAllDogs = async () => {
  const res = await fetch("https://majazocom.github.io/Data/dogs.json");
  const dogs = await res.json();
  console.log(dogs);
};
// fetchAllDogs()

const renderAllDogs = async () => {
  const res = await fetch("https://majazocom.github.io/Data/dogs.json");
  const dogs = await res.json();
  dogs.forEach((dog) => console.log(dog.name));
};

// renderAllDogs();

const renderDogsToDom = async () => {
  const res = await fetch("https://majazocom.github.io/Data/dogs.json");
  const dogs = await res.json();
  dogs.forEach((dog, i) => {
    html += `<li>Dog nr ${i} name is${dog.name}</li>`;
  });
  ul.innerHTML = html;
};
// renderDogsToDom();

const fetchAllBooks = async () => {
  const res = await fetch("https://majazocom.github.io/Data/books.json");
  const books = await res.json();
  console.log(books);
};

// fetchAllBooks()

const booksWithCondition = async () => {
  const res = await fetch("https://majazocom.github.io/Data/books.json");
  const books = await res.json();
  books.forEach((book, i) => {
    if (book.pages <= 500) {
      console.log(book);
    }
  });
};

// booksWithCondition();
const requestVisitors = async () => {
  const res = await fetch("https://majazocom.github.io/Data/attendees.json");
  const visitors = await res.json();
  visitors.forEach((visitor) => {
    if (visitor.attending === true && visitor.allergies.length >= 1) {
      console.log(visitor);
    }
  });
};

requestVisitors();
