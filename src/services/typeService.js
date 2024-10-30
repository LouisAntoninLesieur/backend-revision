import { Type } from "../models/index.js";

export async function fetchAllTypes() {
  return await Type.findAll();
}

export async function fetchOnePokemon(id) {
  return await Type.findByPk(id);
}