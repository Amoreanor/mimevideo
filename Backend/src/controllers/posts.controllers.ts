import { Request, Response, json } from 'express';
import { generatorImages } from '../services/generatorImages.service';

import { connect } from '../database';
import { Post } from '../interface/Post';
import fs from 'fs-extra';

import path from 'path';
import { FieldPacket,  } from 'mysql2';

export async function debug(req: Request, res: Response): Promise<Response>{
    return res.json('Probar esto');
}

export async function getPosts(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM VIDEOS');
    const post = posts[0];

    return res.json(post);
}

export async function createPosts(req: Request, res: Response): Promise<Response>{
    console.log('entro in create posts')
    const conn = await connect();
    const newPost: Post = req.body;

    newPost.url = req.file.path;

    generatorImages(newPost.url);

    console.log(newPost)

    await conn.query('INSERT INTO videos SET ?', [newPost]);
    return res.json({
        message: 'Post video creado'
    });
}

export async function getPost(req: Request, res: Response): Promise<void>{
    const id = req.params.postId;
    const conn = await connect();

    const [rows, fields]: [Post[], FieldPacket[]] =  await conn.query('SELECT * FROM videos WHERE id = ?', [id]);

    res.json(rows[0]);
}

export async function deletePost(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();

    const url = await conn.query('SELECT * FROM videos WHERE id = ?', [id]);
    const [rows, fields]: [Post[], FieldPacket[]] = await conn.execute('SELECT url FROM videos where id = '+ id);

    const list = rows[0].url.split('\\');
    const idsucio = list[1];
    const idlink = idsucio.slice(0,-4);

    //Delete File
    //fs.unlink(path.resolve(rows[0].url));
    for (let i = 1; i >= 3; i++){
        const urlresolve = 'uploads\\thumbail\\'+idlink+'_'+i+'.png';
        console.log(urlresolve)
        fs.unlink(path.resolve(urlresolve));
    }
    //Delete de BD
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
        return res.status(505).json({
            message: 'Error'
        });
    }
}