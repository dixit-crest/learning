const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'input.txt'), 'utf-8')

readableStream.on("data", (...variables) => {
    console.log(variables)
})