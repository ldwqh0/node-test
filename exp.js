let express = require('express')
let app = express()

// app.get('/', (req, rsp) => {
//   rsp.send('hello world')
// })

app.get('/a', (req, rsp) => {
  let b = 1 + 1
  rsp.send(b + '')
})

app.use('/', express.static(__dirname))

app.listen(81)
console.log('server started')
