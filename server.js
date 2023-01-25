const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/about.html')
})

app.get('/contact-me', (request, response) => {
  response.sendFile(__dirname+ '/contact-me.html')
})

app.use((request, response) => {
  response.sendFile(__dirname + '/404.html')
})

app.listen(8080, () => {
  console.log("Server started on port 8080")
});