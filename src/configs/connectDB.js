import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hoc_nodejs'
})

export default pool 