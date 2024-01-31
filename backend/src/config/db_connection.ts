import mysql from 'mysql2';

// Verbindung zur Datenbank
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE
});


export default db;