const dotenv = require("dotenv");

dotenv.config({path: "./config.env"})

const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.dbUser,
    host: process.env.bdHost,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
});

module.exports = pool;