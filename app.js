const cors = require('cors')
const request = require('request')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/access_token', function(req, res) {
  request.post('https://github.com/login/oauth/access_token', {
    json: true,
    body: JSON.stringify(req.body)
  }, function(error, response, body) {
    if (error) res.json(error)
    res.json(body)
  })
})

app.listen(process.env.PORT || 3000)