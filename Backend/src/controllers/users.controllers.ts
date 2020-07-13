import {Request, Response} from 'express';
import { connect } from '../database';

import { Users} from '../interface/Users';
import { encryptPassword, matchPassword } from '../lib/bcrypt'

import jwt from 'jsonwebtoken';

export async function signupUser(req: Request, res: Response): Promise<Response>{
    const conn = await connect();

    const newUser: Users  = req.body;

    newUser.password = await encryptPassword(req.body.password);
    await conn.query('INSERT INTO users SET ?', [newUser]);

    const token = jwt.sign({id: newUser.id}, process.env.secretKey || 'tokentest');

    return res.header('token', token).status(200).json({
      token
    });
}

export async function signUser(req: Request, res: Response): Promise<Response>{
    const conn = await connect();

    const newUser: Users  = req.body;

    //Mejorar Seguridad
    const row = await conn.query('select * from users where name = ?', [newUser.name]);
    const [rows, fields] = await conn.execute('select * from users where name = ?', [newUser.name]);

    if(row.length < 0) return res.status(401).send("Name incorrecto");

    const validpass: boolean = await matchPassword(newUser.password, rows[0].password);

    if(!validpass) return res.status(401).send("Password incorrecto");
      
    const token = jwt.sign({id: rows[0].id}, process.env.secretKey || 'tokentest',{
      expiresIn: 60 * 60
    });

    return res.header('token', token).status(200).json({
      token
    });
}