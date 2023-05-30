const http = require('http')
const server = http.createServer((rep, res) => {
    console.log('run request...')
    res.setHeader('Content-Type', 'text/html')
    res.write('<h3>Hello World</h3>')
    res.write('<p>NodeJS</p>')
    res.end()
})

server.listen(1005, 'localhost', () => {
    console.log('Node.JS server is running on port: 1005')
})