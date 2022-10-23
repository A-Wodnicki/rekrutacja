const pokemonsContainer = document.querySelector(".pokemons");

pokemons.forEach((pokemon) => {
  let types = "";
  types = pokemon.types.join(" ");
  pokemonsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class='${types}' id='${pokemon.id}'>
    <span>${pokemon.name}</span>
    <img src=${pokemon.image}>
    </div>`
  );
});

function renderPokemons(pokemons) {
  let pokemonBlocks = document.querySelectorAll(".pokemons div"),
    ids = [];
  pokemons.forEach((pokemon) => {
    ids.push(pokemon.id);
  });
  pokemonBlocks.forEach((element) => {
    element.style.display = ids.includes(parseInt(element.id))
      ? "block"
      : "none";
  });
}

function filterPokemons(pokemons) {
  let types = [],
    checked = document.querySelectorAll("input[type='checkbox']:checked"),
    searchedName = document.getElementById("pokemon-name").value.toLowerCase();
  checked.forEach((type) => types.push(type.value));

  return pokemons
    .filter((pokemon) => pokemon.types.some((type) => types.includes(type)))
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchedName));
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);
