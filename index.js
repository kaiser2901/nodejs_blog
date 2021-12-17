// Sử dụng thư viện express
const express = require('express')
const app = express()
//set port
const port = 3000

app.get('/', (req, res) => {
  var a = 1;
  var b = 2; 
  var c = a + b;
  //test
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})