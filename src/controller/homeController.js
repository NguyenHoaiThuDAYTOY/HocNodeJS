import connection from "../configs/connectDB"

let getHomepage = (rep, res) => {
    let data = []
    connection.query(
        'SELECT * FROM user',
        function (err, results, fields) {
            console.log('Check SQL')
            console.log(results)
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address
                })
            })
            return res.render('test/index.ejs', { dataUser: JSON.stringify(data) })

        }
    )
}

module.exports = {
    getHomepage
}