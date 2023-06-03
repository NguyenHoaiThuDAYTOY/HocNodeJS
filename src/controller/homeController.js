import pool from "../configs/connectDB"

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user')
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id
    let [user] = await pool.execute('SELECT * FROM user WHERE id = ?', [userId])
    return res.send(JSON.stringify(user))
}

let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    await pool.execute('INSERT INTO user (firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address])
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId
    await pool.execute('DELETE FROM user WHERE id = ?', [userId])
    return res.redirect('/')
}

let getUpdatePage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('SELECT * FROM user WHERE id = ?', [id])
    return res.render('update.ejs', { dataUser: user[0] })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body
    await pool.execute('UPDATE user SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?',
        [firstName, lastName, email, address, id])
    return res.redirect('/')
}

module.exports = {
    getHomepage, getDetailPage, createUser, deleteUser, getUpdatePage, updateUser
}