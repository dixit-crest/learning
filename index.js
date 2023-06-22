const fs = require('fs');
const path = require('path');
const http = require('http');

const FILE_PATH = path.join(__dirname, 'files', 'input.txt')

http.createServer((req, res) => {
    const fileStream = fs.createReadStream(FILE_PATH);
    res.setHeader('Content-Disposition', 'attachment; filename="largeFile.txt"');
    res.setHeader('Content-Type', 'application/octet-stream');
    fileStream.pipe(res);  
}).listen(3001, () => console.log('listening on'))
