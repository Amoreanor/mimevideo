import { Router } from 'express';
const router = Router();
import { getPosts, createPosts, getPost, deletePost, updatePost, preview } from '../controllers/posts.controllers';
import {TokenValidation} from '../lib/verifyToken';

import multer from '../lib/multer';

router.route('/video-lock')
    .get(preview);

router.route('/')
    .get(getPosts)
    .post(multer.single('file'), createPosts);
router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(TokenValidation ,updatePost);

export default router;