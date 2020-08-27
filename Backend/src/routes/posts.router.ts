import { Router } from 'express';
const router = Router();
import {debug, getPosts, createVideo, createImages, getPost, deletePost, updatePost} from '../controllers/posts.controllers';
import {TokenValidation} from '../lib/verifyToken';

import multer from '../lib/multer';

router.route('/')
    .get(getPosts)
router.route('/uploadsImages')
    .post(multer.array('file', 10), createImages);
router.route('/uploadsvideos')
    .post(TokenValidation, multer.single('file'), createVideo)
router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(TokenValidation,updatePost);

export default router;