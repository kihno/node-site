const http = require('http');
const url = require('url');
const router = require('./router');

const server = http.createServer( (req, res) => {

    res.writeHead("200"); 
  
    var parsedURL = url.parse(req.url); 
    var parsedPathname = parsedURL.pathname; 

    router.checkRoute(parsedPathname, req, res); 

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));