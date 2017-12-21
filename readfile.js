let fs = require('fs')

fs.readFile('./index.html', 'utf8', (err, dat) => {
  console.log(dat)
})

fs.writeFile('./test.txt', 'good good study , day day up!', 'utf8', (err) => {
  if (err) {
    console.log('文件写入失败', err)
  }
})