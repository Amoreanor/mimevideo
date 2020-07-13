"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function encryptPassword(password) {
    const salt = await bcryptjs_1.default.genSalt(10);
    return bcryptjs_1.default.hash(password, salt);
}
exports.encryptPassword = encryptPassword;
async function matchPassword(password, savePassword) {
    return await bcryptjs_1.default.compare(password, savePassword);
}
exports.matchPassword = matchPassword;
