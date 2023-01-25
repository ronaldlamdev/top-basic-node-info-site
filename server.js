const http = require('http');

const port = 8080

const fs = require('fs');

const server = http.createServer((request, response) => {
  
  response.setHeader('Content-Type', 'text/html')
  
  let path = ""
  switch(request.url) {
    case '/':
      path += 'index.html'
      break;
    case '/about':
      path += 'about.html'
      break;
    case '/contact-me':
      path += 'contact-me.html'
      break;
    default:
      path += '404.html'
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      response.write(data)
      response.end()
    }
  })

})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})