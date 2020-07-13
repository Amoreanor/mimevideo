"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const bcrypt_1 = require("../lib/bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function signupUser(req, res) {
    const conn = await database_1.connect();
    const newUser = req.body;
    newUser.password = await bcrypt_1.encryptPassword(req.body.password);
    await conn.query('INSERT INTO users SET ?', [newUser]);
    const token = jsonwebtoken_1.default.sign({ id: newUser.id }, process.env.secretKey || 'tokentest');
    return res.header('token', token).status(200).json({
        token
    });
}
exports.signupUser = signupUser;
async function signUser(req, res) {
    const conn = await database_1.connect();
    const newUser = req.body;
    //Mejorar Seguridad
    const row = await conn.query('select * from users where name = ?', [newUser.name]);
    const [rows, fields] = await conn.execute('select * from users where name = ?', [newUser.name]);
    if (row.length < 0)
        return res.status(401).send("Name incorrecto");
    const validpass = await bcrypt_1.matchPassword(newUser.password, rows[0].password);
    if (!validpass)
        return res.status(401).send("Password incorrecto");
    const token = jsonwebtoken_1.default.sign({ id: rows[0].id }, process.env.secretKey || 'tokentest', {
        expiresIn: 60 * 60
    });
    return res.header('token', token).status(200).json({
        token
    });
}
exports.signUser = signUser;
