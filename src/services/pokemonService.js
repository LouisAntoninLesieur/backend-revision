import { Pokemon, Type } from "../models/index.js";

export async function fetchAllPokemons() {
  return await Pokemon.findAll({
    include: {
      model: Type,
      as: "types",
      attributes: ["name", "color"],
    },
  });
}

export async function fetchOnePokemon(id) {
  return await Pokemon.findByPk(id, {
    include: {
      model: Type,
      as: "types",
      attributes: ["name", "color"],
    },
  });
}