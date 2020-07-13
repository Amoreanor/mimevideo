import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken'

export const TokenValidation = (req: Request, res: Response, next: NextFunction) =>{
    const token = req.header('token');
    if(!token) return res.status(401).json('Necesitas Permisos')

    const payload = jwt.verify(token, process.env.secretKey || 'tokentest');
    
    console.log(payload);

    next();
}