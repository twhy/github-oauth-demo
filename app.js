const cors = require('cors')
const request = require('request')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/access_token', function(req, res) {
  request.post({
    url: 'https://github.com/login/oauth/access_token',
    form: req.body,
    headers: { Accept: 'application/json' }
  }, function(error, response, body) {
    if (error) res.json({ error: error.message })

    res.json(JSON.parse(body))
  })
})

app.listen(process.env.PORT || 3000)