"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const posts_controllers_1 = require("../controllers/posts.controllers");
const verifyToken_1 = require("../lib/verifyToken");
const multer_1 = __importDefault(require("../lib/multer"));
router.route('/video-lock')
    .get(posts_controllers_1.preview);
router.route('/')
    .get(posts_controllers_1.getPosts)
    .post(multer_1.default.single('file'), posts_controllers_1.createPosts);
router.route('/:postId')
    .get(posts_controllers_1.getPost)
    .delete(posts_controllers_1.deletePost)
    .put(verifyToken_1.TokenValidation, posts_controllers_1.updatePost);
exports.default = router;
