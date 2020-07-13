"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = (req, res, next) => {
    const token = req.header('token');
    if (!token)
        return res.status(401).json('Necesitas Permisos');
    const payload = jsonwebtoken_1.default.verify(token, process.env.secretKey || 'tokentest');
    console.log(payload);
    next();
};
