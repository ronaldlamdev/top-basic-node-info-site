const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sendFile('./index.html')
})

app.get('/about', (request, response) => {
  response.sendFile('./about.html')
})

app.get('/contact-me', (request, response) => {
  response.sendFile('./contact-me.html')
})

app.use((request, response) => {
  response.sendFile('./404.html')
})

app.listen(8080, () => {
  console.log("Server started on port 8080")
});