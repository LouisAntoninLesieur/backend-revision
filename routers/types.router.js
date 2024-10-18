import { Router } from 'express';
import * as typeController from '../controller/type.controller.js';
import { controllerWrapper } from '../routers/controller-wrapper.js';

export const router = Router();

router.get('/types', controllerWrapper(typeController.getAllTypes));
router.get('/types/:id', controllerWrapper(typeController.getOneType));
