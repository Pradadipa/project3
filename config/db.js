const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    // host: process.env.DB_HOST || "localhost",
    // user: process.env.DB_USER || "root",
    // password: process.env.DB_PASS || "Prada",
    // database: process.env.DB_NAME || "contoh_jurnal",

    uri: process.env.DB_URI,
})

module.exports = { pool }
