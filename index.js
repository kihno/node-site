const http = require('http');
const url = require('url');
const router = require('./router');

const server = http.createServer( (req, res) => {

    res.writeHead("200"); 
  
    let parsedURL = url.parse(req.url); 
    let parsedPathname = parsedURL.pathname; 

    router.checkRoute(parsedPathname, req, res); 

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));