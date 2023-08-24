var http = require('http');

http.createServer(function (req, res) {
    // Send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Send the response body as a string
    res.end('<h1>Hello My Node!!!!</h1>\n');
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});