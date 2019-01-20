const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// cors is needed for going public need good security, otherwise it is a risk

app.get('/status', (req, res) => {
  res.send({
    message: 'hellowrold'
  })
})

app.listen(process.env.PORT || 8081)
