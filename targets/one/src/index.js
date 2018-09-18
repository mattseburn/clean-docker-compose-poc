const express = require('express')
const http = require('http')
const fetch = require('node-fetch')

const app = express()

const serverRoots = {
  'foo': 'http://foo:10000',
  'bar': 'http://bar:10001'
}

app.all(/.*/, async (req, res) => {
  const { url, method } = req
  const { server, path } = url.split('/').reduce((acc, cur, i, arr) => ((i === 1)
    ? { server: cur, path: `/${arr.slice(2).join('/')}` }
    : acc), {})
  const root = serverRoots[server]
  const upstream = await fetch(`${root}${path}`, { method })
    .then(res => res.json())

  res.json({ target: 'One', upstream }).end()
})

const server = http.createServer(app)

server.listen(10002, () => {
  console.log('Target One listening on port 10002')
})
