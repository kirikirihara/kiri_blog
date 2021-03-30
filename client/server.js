const path = require('path')
const express = require('express')

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(
  express.static(path.join(__dirname, './public/'), {
    extensions: ['html'],
  }),
)

app.use((req, res) => {
  res.sendStatus(404)
})
