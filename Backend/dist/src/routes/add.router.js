"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const router = express_1.Router();
router.route('/:postId')
    .get((req, res, next) => {
    const id = req.params.postId;
    //if(req.query.key=='13fg345v456'){
    fs_1.default.readFile('./uploads/' + id, (err, data) => {
        return res.send(data);
    });
    //}
});
exports.default = router;
