const express = require('express');
const server = express();
const port = 4000;
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });

 server.get(
    "/tentang", (req, res) => {
        res.sendFile(__dirname + '/tentang.html');
    }
);

server.get('/', (req, res) => res.send('this is a root page of Express'))
// set up json route
server.get('/userdata', (req,res) => {
  // set response header untuk mempersilahkan domain lain mengambil data.
  res.set('Access-Control-Allow-Origin', '*')
  // send response data as json
  res.sendFile(__dirname + '/jakpus.json')
})
