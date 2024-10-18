import { Router } from "express";
import * as pokemonController from "../controllers/pokemon.controller.js";
import { controllerWrapper } from "./controller-wrapper.js";

export const router = Router();

router.get('/pokemons', controllerWrapper(pokemonController.getAllPokemons));
router.get('/pokemons/:id', controllerWrapper(pokemonController.getOnePokemon));