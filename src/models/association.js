import { Pokemon } from "./pokemon.model.js";
import { Type } from "./type.model.js";
import { sequelize } from "./sequelize-client.js";

Pokemon.belongsToMany(Type, {
  through: 'pokemon_type',
  as: 'types',
  foreignKey: 'pokemon_id'
});
Type.belongsToMany(Pokemon, {
  through: 'pokemon_type',
  as: 'pokemons',
  foreignKey: 'type_id'
})

export { Pokemon, Type, sequelize }

/* Coucou les goat */
// Hello le Alex