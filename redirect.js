// require http module
const http = require('http');
const port = 8080;

// read REDIRECT_LOCATION var from env
const location = process.env.REDIRECT_LOCATION;

//create server and respond with 302
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': location
  });
  res.end();
});

// start listener
server.listen(port, () => console.log(`Listening on port ${port}.....`));
