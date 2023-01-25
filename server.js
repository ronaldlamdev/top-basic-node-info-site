const express = require("express");

const app = express();

const port = process.env.port || 4000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/about.html')
})

app.get('/contact-me', (request, response) => {
  response.sendFile(__dirname + '/contact-me.html')
})

app.use((request, response) => {
  response.send(__dirname + '/404.html')
})