const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const spriteContainer = document.getElementById("sprite-container");
const typesContainer = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpAttack = document.getElementById("special-attack");
const pokemonSpDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const getPokemon = async () => {
    try{
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await res.json();
        showPokemonDetails(data);
    } catch(err){
        alert("Pokémon not found");
        console.log(err);
    }
};

const showPokemonDetails = (data) => {
    const {id, name, weight, height, types, sprites, stats} = data;

    pokemonName.innerText = `${name.toUpperCase()}`;
    pokemonId.innerText = `#${id}`;
    pokemonWeight.innerText = `Weight: ${weight}`;
    pokemonHeight.innerText = `Height: ${height}`;
    spriteContainer.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name}"/> `;
    
    pokemonHp.innerText = `${stats[0].base_stat}`;
    pokemonAttack.innerText = `${stats[1].base_stat}`;
    pokemonDefense.innerText = `${stats[2].base_stat}`;
    pokemonSpAttack.innerText = `${stats[3].base_stat}`;
    pokemonSpDefense.innerText = `${stats[4].base_stat}`;
    pokemonSpeed.innerText = `${stats[5].base_stat}`;

    typesContainer.innerHTML = types.map((obj) => `<span class="types">${obj.type.name}</span>`).join(" ");
};



searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getPokemon();
});