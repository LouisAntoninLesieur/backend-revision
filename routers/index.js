import { Router } from 'express';
import { router as pokemonRouter } from './pokemons.router.js';
import { router as typeRouter } from './types.router.js'

export const router = Router();

router.use(pokemonRouter);
router.use(typeRouter);