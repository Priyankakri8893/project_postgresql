const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: 'root1234',
    port: 5432,
})

pool.connect()
.then(() => console.log('postgre is connected'))
.catch(err => console.log(err.message))

module.exports = {pool}