const express = require('express');
const app = express()
const port = 5050;
app.get('/', (req, res) => {
   res.send('Hello from simple server :)');
});
app.listen(5050, '0.0.0.0', () => {
   console.log('Server is running on port 5050');
});
