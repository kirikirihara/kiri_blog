import express from 'express'
import { connection } from 'dbConnection'
const bodyParser = require('body-parser')

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

//  bodyParserを使う
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  connection.query('SELECT * FROM articles;', (error, results) => {
    res.json(results)
  })
})

app.post('/create', (req, res) => {
  res.json({ message: req.body })
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
