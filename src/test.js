let testStore = {
  getPokemonsWithTags(tags) {
    const tagsPromiseArray = {
      tags: tags,
      pokemons: tags.map((tag) => {
        return pokemonAPI.getPokemonsWithTag(tag).then((response) => {
          return response.data.pokemon.map((pokemon) => {
            return pokemon.pokemon.name;
          });
        });
      }),
    };
    Promise.all(tagsPromiseArray).then((response) => {
      console.log(response);
    });
  },
};
