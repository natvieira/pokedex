function convertPokemonTypesToHtml(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`

    )
}

function convertPokemonToHtml(pokemon) {
    console.log(pokemon)
    return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToHtml(pokemon.types).join('')}
        </ol>

    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    
    const newList = pokemons.map(convertPokemonToHtml).join('')
    pokemonList.innerHTML = newList
    
})