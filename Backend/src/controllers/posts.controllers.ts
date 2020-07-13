import { Request, Response } from 'express';

import { connect } from '../database';
import { Post } from '../interface/Post';
import fs from 'fs-extra';

import path from 'path';

export async function preview(req: Request, res: Response){
    const id = req.params.postId;

    if(req.query.key=='13fg345v456'){
        fs.readFile('./upload/'+id, (err,data)=>{
            res.send(data);
        });
    }
    console.log('Holas');
}

export async function getPosts(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM VIDEOS');
    return res.json(posts[0]);
}

export async function createPosts(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const newPost: Post = req.body;

    newPost.url = req.file.path;
    
    await conn.query('INSERT INTO videos SET ?', [newPost]);
    return res.json({
        message: 'Post video creado'
    });
}

export async function getPost(req: Request, res: Response): Promise<any>{
    const id = req.params.postId;
    const conn = await connect();
    
    //const post = await conn.query('SELECT * FROM videos WHERE id = ?', id);

    await conn.query({
        sql: 'SELECT * FROM videos WHERE id = ?',
        timeout: 40000, // 40s
        values: [id]
      }, function (error: any, results: any, fields: any) {
        res.json(results[0]);
      });
}

export async function deletePost(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();

    const [rows, fields] = await conn.execute('SELECT url FROM videos where id = '+id);

    fs.unlink(path.resolve(rows[0].url));

    const video = await conn.query('DELETE FROM videos WHERE id = ?', [id]);     
    
    return res.json({
        message: 'Eliminado'
    });
}

export async function updatePost(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    

    try {
        const updateVideo = await conn.query('UPDATE videos SET ? WHERE id = ?',[updatePost, id]);
        return res.json({
            message: 'Actualizado'
        });
    } catch (error) {
        return res.json({
            message: 'Error'
        });
    }
}