import { fetchAllPokemons, fetchOnePokemon } from "../../services/pokemonService.js";

export async function getAllPokemons(req, res) {
	const pokemons = await fetchAllPokemons();

	res.json(pokemons);
};

export async function getOnePokemon(req, res) {
	const id = Number.parseInt(req.params.id);

	if (Number.isNaN(id)) {
		res.status(400).json({ error: "The id must be a number. Please try again." });
		return;
	};

	const pokemon = await fetchOnePokemon(id);
	res.json(pokemon);
};
