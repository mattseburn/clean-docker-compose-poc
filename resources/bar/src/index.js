const express = require('express')
const http = require('http')

const app = express()

app.all(/.*/, (req, res) => {
  const { url, method } = req
  res.json({ server: 'Bar', url, method }).end()
})

const server = http.createServer(app)

server.listen(10001, () => {
  console.log('Bar listening on port 10001')
})
