const express = require('express')
const cowsay = require('cowsay')
const cors = require('cors')
const path = require('path');
// Create the server
const app = express()
// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  try {
      console.log('cow with say')
    const text = req.params.say
    const moo = cowsay.say({ text })
    res.json({ moo })
  } catch (err) {
    next(err)
  }
})

// Serve our base route that returns a Hello World cow
app.get('/api/cow/', cors(), async (req, res, next) => {
  try {
    console.log('test cow')
    const moo = cowsay.say({ text: 'Hello World!' })
    res.json({ moo })
  } catch (err) {
    next(err)
  }
})

// Anything that doesn't match the above, send back the index.html file
app.get('*', (req, res) => {
    console.log(path.join(__dirname + '/build/index.html'))
    res.sendFile(path.join(__dirname + '/build/index.html'))
  })

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})




