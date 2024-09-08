const express = require('express');
const app = express();
// const https = require('https');
// const fs = require('fs');
// const path = require('path');
require('dotenv').config();
// // Load SSL certificate and key
// const options = {
//    key: fs.readFileSync(path.resolve(__dirname, './ssl/private.pem')),
//    cert: fs.readFileSync(path.resolve(__dirname, './ssl/cert.pem')),
// };
const port = 5050;
app.get('/', (req, res) => {
   res.send('Hello from simple server :)');
});
app.listen(5050, '0.0.0.0', () => {
   console.log('Server is running on port 5050');
});
// Create HTTPS server
// https.createServer(options, app).listen(port, () => {
//    console.log('Server is running on https://localhost:' + port);
// });
