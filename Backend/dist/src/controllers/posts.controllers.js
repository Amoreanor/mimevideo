"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
async function preview(req, res) {
    const id = req.params.postId;
    if (req.query.key == '13fg345v456') {
        fs_extra_1.default.readFile('./upload/' + id, (err, data) => {
            res.send(data);
        });
    }
    console.log('Holas');
}
exports.preview = preview;
async function getPosts(req, res) {
    const conn = await database_1.connect();
    const posts = await conn.query('SELECT * FROM VIDEOS');
    return res.json(posts[0]);
}
exports.getPosts = getPosts;
async function createPosts(req, res) {
    const conn = await database_1.connect();
    const newPost = req.body;
    newPost.url = req.file.path;
    await conn.query('INSERT INTO videos SET ?', [newPost]);
    return res.json({
        message: 'Post video creado'
    });
}
exports.createPosts = createPosts;
async function getPost(req, res) {
    const id = req.params.postId;
    const conn = await database_1.connect();
    //const post = await conn.query('SELECT * FROM videos WHERE id = ?', id);
    await conn.query({
        sql: 'SELECT * FROM videos WHERE id = ?',
        timeout: 40000,
        values: [id]
    }, function (error, results, fields) {
        res.json(results[0]);
    });
}
exports.getPost = getPost;
async function deletePost(req, res) {
    const id = req.params.postId;
    const conn = await database_1.connect();
    const [rows, fields] = await conn.execute('SELECT url FROM videos where id = ' + id);
    fs_extra_1.default.unlink(path_1.default.resolve(rows[0].url));
    const video = await conn.query('DELETE FROM videos WHERE id = ?', [id]);
    return res.json({
        message: 'Eliminado'
    });
}
exports.deletePost = deletePost;
async function updatePost(req, res) {
    const id = req.params.postId;
    const updatePost = req.body;
    const conn = await database_1.connect();
    try {
        const updateVideo = await conn.query('UPDATE videos SET ? WHERE id = ?', [updatePost, id]);
        return res.json({
            message: 'Actualizado'
        });
    }
    catch (error) {
        return res.json({
            message: 'Error'
        });
    }
}
exports.updatePost = updatePost;
