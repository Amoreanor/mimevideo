import { Request, Response, json } from 'express';
import { generatorImages } from '../services/generatorImages.service';

import { connect } from '../database';
import { Post } from '../interface/Post';
import { File } from '../interface/File';

import fs from 'fs-extra';

import path from 'path';
import { FieldPacket,  } from 'mysql2';

//Metodo para probar peticiones
export async function debug(req: Request, res: Response): Promise<Response>{
    return res.json('Probar esto');
}

export async function createVideo(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const newPost: Post = req.body;
    if (!req.file) return res.send('Please upload a file')
    else{
        newPost.url = req.file.path;
        generatorImages(newPost.url);

        await conn.query('INSERT INTO videos SET ?', [newPost]);
        return res.json({
            message: 'Post de videos creado'
        });
    }
}

export async function createImages(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const newPost: Post = req.body;

    if (!req.files) return res.send('Please upload a file');

    const files = req.files as File[];
    const paths = files.map((file) => file.path);
    newPost.url = paths.toString();
    await conn.query('INSERT INTO videos SET ?', [newPost]);
    return res.json({
        message: 'Post Imagenes creado'
    });
}