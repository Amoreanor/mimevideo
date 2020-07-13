import {Request, Response} from 'express'

export function indexRouter (req: Request, res: Response): Response{
    return res.json('Welcome to my AMPI')
}