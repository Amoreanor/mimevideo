import {Router } from 'express';

const router = Router();

import { signupUser, signUser } from '../controllers/users.controllers';

//router.route('/signup')
    //.get(adduser)
router.route('/signin')
    .post(signUser)

router.route('/signup')
    .post(signupUser)
    

export default router;