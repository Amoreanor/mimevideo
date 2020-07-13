"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
async function connect() {
    const connection = await promise_1.createPool({
        host: 'localhost',
        user: 'root',
        database: 'server_page',
        connectionLimit: 10
    });
    return connection;
}
exports.connect = connect;
