const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end(`Hello, Container Days 2017!`);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})
