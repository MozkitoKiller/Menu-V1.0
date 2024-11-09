const {Pool}  = require('pg') ;
require('dotenv').config()

console.log('Connecting to postgress DB on port', process.env.DB_PORT)

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host:process.env.POSTGRES_HOST,
    database:process.env.DB_NAME,
    password: process.env.DB_SECRET,
    port: process.env.DB_PORT
})

module.exports = pool