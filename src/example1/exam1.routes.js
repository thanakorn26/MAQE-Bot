import { Router } from 'express';
import * as Controller from './exam1.controller.js';

const router = Router();

router.post('/move', Controller.botController);


export default router;