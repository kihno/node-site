const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    // const q = url.parse(req.url, true);
    // const filename = '.' + q.pathname;
    let filePath = path.join(req.url === '/' ? 'index.html' : req.url);
    
    let extname = path.extname(filePath);

    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filename, (err, data) => {
        if (err) {
            if (err.code === 'EN0ENT') {
                fs.readFile('./404.html', (err, data) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(data);
                    return res.end();
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            return res.end();
        }
    });
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));