const express = require('express')
const http = require('http')

const app = express()

app.all(/.*/, (req, res) => {
  const { url, method } = req
  res.json({ server: 'Foo', url, method }).end()
})

const server = http.createServer(app)

server.listen(10000, () => {
  console.log('Foo listening on port 10000')
})
