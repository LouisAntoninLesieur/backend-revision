import { Pokemon, Type } from "../models/index.js";

export async function getAllPokemons(req, res) {
	const pokemons = await Pokemon.findAll({
		include: {
			model: Type,
			as: "types",
			attributes: ["name", "color"],
		},
	});

	res.json(pokemons);
};

export async function getOnePokemon(req, res) {
	const id = Number.parseInt(req.params.id);

	const pokemon = await Pokemon.findByPk(id);

	res.json(pokemon);
};
