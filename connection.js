const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "SFW12@",
    database: "student"
})

module.exports = client