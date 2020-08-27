import { Router } from 'express';
const router = Router();
import {createVideo, createImages} from '../controllers/uploads.controller';
import {TokenValidation} from '../lib/verifyToken';

import multer from '../lib/multer';

router.route('/images')
    .post(multer.single('file'), createImages);
router.route('/videos')
    .post(TokenValidation, multer.single('file'), createVideo)

export default router;