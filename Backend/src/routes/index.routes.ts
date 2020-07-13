import {Router } from 'express';

const router = Router();

import { indexRouter } from '../controllers/index.controllers'

import multer from '../lib/multer';

router.route('/')
    .get(indexRouter);

export default router;

