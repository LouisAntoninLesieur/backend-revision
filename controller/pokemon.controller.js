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

	if (Number.isNaN(id)) {
		res.status(400).json({ error: "The id must be a number. Please try again." });
		return;
	};

	const pokemon = await Pokemon.findByPk(id);
	res.json(pokemon);
};
