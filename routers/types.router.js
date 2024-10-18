import { Router } from 'express';
import * as typeController from '../controller/type.controller.js';

export const router = Router();

router.get('/types', typeController.getAllTypes)
router.get('/types/:id', typeController.getOneType)

