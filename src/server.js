import configViewEngine from './configs/viewEngine'
import express from 'express'
import initWebRouter from './route/web'
import connection from '../src/configs/connectDB'

require('dotenv').config()

const app = express()
const port = process.env.PORT

configViewEngine(app)
initWebRouter(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})