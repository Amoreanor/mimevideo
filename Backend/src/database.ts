import {createPool} from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'server_page',
        connectionLimit: 10
    });
    return connection;
}