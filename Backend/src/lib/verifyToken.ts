import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export const TokenValidation = (req: Request, res: Response, next: NextFunction) =>{
    const token = req.header('Autorization');
    console.log(token);
    
    console.log(process.env.secretKey);
    if(!token) return res.status(401).json('Necesitas Permisos');

    const payload = jwt.verify(token, process.env.secretKey || 'tokentest', (err, decoded) => {
        if (err) {
            console.log('Error de verificacion');
            console.log(err);
            return;
        }
        next();
    });
    console.log(payload);
}