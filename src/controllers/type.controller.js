import { fetchAllTypes, fetchOnePokemon } from "../services/typeService.js";

export async function getAllTypes(req, res) {
  const types = await fetchAllTypes();

  res.json(types);
};

export async function getOneType(req, res) {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({ error: "The id must be a number. Please try again." });
    return;
  };

  const type = await fetchOnePokemon(id);
  res.json(type);
};
