import {Router} from 'express';

import fs from 'fs';

const router = Router();

router.route('/:postId')
    .get((req, res, next)=>{
        const id = req.params.postId;

        //if(req.query.key=='13fg345v456'){
            fs.readFile('./uploads/'+id, (err,data)=>{
                return res.send(data);
            });
        //}
    });

export default router;