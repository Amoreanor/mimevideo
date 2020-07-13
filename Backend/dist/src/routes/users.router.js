"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const users_controllers_1 = require("../controllers/users.controllers");
//router.route('/signup')
//.get(adduser)
router.route('/signin')
    .post(users_controllers_1.signUser);
router.route('/signup')
    .post(users_controllers_1.signupUser);
exports.default = router;
