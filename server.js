const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello')
})

app.get('/list', (_, res) => res.json([
  {name: 'Uncle Hubris', age: 53}
]))

app.listen(3000, '0.0.0.0')
console.log('running server')