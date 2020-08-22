import {Router } from 'express';

const router = Router();

import { indexRouter } from '../controllers/index.controllers';

router.route('/')
    .get(indexRouter);

export default router;

