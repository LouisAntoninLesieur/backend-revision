import { Router } from "express";
import * as pokemonController from "../controller/pokemon.controller.js";

export const router = Router();

router.get('/pokemons', pokemonController.getAllPokemons);
router.get('/pokemons/:id', pokemonController.getOnePokemon);