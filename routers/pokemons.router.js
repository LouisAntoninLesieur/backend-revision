import { Router } from "express";
import * as pokemonController from "../controller/pokemon.controller.js";
import { controllerWrapper } from "../routers/controller-wrapper.js";

export const router = Router();

router.get('/pokemons', controllerWrapper(pokemonController.getAllPokemons));
router.get('/pokemons/:id', controllerWrapper(pokemonController.getOnePokemon));