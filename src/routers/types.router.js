import { Router } from 'express';
import * as typeController from '../controllers/type.controller.js';
import { controllerWrapper } from './controller-wrapper.js';

export const router = Router();

router.get('/types', controllerWrapper(typeController.getAllTypes));
router.get('/types/:id', controllerWrapper(typeController.getOneType));
