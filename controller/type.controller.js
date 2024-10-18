import { Type } from "../models/index.js";

export async function getAllTypes(req, res) {
  const types = await Type.findAll();
  res.json(types);
}

export async function getOneType(req, res) {
  const id = Number.parseInt(req.params.id);
  const type = await Type.findByPk(id);
  res.json(type);
}
