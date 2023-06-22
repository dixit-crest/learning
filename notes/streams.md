# Streams
- We can create readable and writable streams, in nodejs.
- to read the data from a file you need to import the fs module first
`const readingSteam = fs.createReadStream(PATH_OF_THE_FILE);`
- above code allows creates the readableStea, you can use this stream to get the data afterwards as shown below
`readingStream.on('data', (data) => {console.log(data);});` here first string argument is string which denotes the event
- PS if you reading txt file from with the above given example you might see random characters, to see the actual content you need to add the encoding while creating the steam as below
`const readingSteam = fs.createReadStream(PATH_OF_THE_FILE, ENCODING (utf-8));`

