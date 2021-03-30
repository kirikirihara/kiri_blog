import express from 'express'
// import { connection } from 'dbConnection'
import mysql from 'mysql'

const { DATABASE_NAME, DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT } = process.env

const connection = mysql.createConnection({
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
})

export const app = express()
const port = 5000

// ローカル用のクロスオリジン設定
if (process.env.MODE === 'development') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    next()
  })
}

app.get('/', (req, res) => {
  connection.query('SELECT * FROM user;', (error, results) => {
    res.json({
      message: results,
      status: connection.state,
    })
  })
})

app.get('/inu', (req, res) => {
  res.json({
    message: 'This is inu',
    name: '伊佐錦',
    age: '5',
  })
})

// サーバーを起動
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
