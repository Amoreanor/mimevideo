import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import path from 'path';

// Rutas
import IndexRoutes from './routes/index.routes';
import postRoutes from './routes/posts.router';               
import addRoutes from './routes/add.router';
import usersRoutes from './routes/users.router';

export class App{

    private app : Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.router();
        this.public();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }


    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    router(){
        this.app.use(IndexRoutes);
        this.app.use( '/uploads', addRoutes);
        this.app.use( '/posts', postRoutes);
        this.app.use( '/users', usersRoutes);
    }

    public(){
        this.app.use('/uploads', express.static(path.resolve('uploads')) );
    }

    async listen(){
       await this.app.listen(this.app.get('port'));
       console.log('Server on port', this.app.get('port'));
    }
}