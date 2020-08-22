import { Router } from 'express';
const router = Router();
import {debug, getPosts, createPosts, getPost, deletePost, updatePost} from '../controllers/posts.controllers';
import {TokenValidation} from '../lib/verifyToken';

import multer from '../lib/multer';

router.route('/')
    .get(getPosts)
    .post(TokenValidation, multer.single('file'), createPosts);
router.route('/:postId')
    .get(getPost)
    .delete(TokenValidation, deletePost)
    .put(TokenValidation,updatePost);

export default router;