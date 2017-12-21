let http = require('http')
let fs = require('fs')
let path = require('path')

let server = http.createServer(function (request, response) {
  let path_ = path.resolve(__dirname, request.url)
  fs.readFile(path_, 'utf8', (result, data) => {
    response.write(data)
    response.end()
  })
})
server.listen(81)
console.log('server start at port ' + 81)
