const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('./'));


app.get('*', (req, res) => {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, req.originalUrl));
});

console.log('server environment: %s, port: %s', process.env.NODE_ENV, process.env.PORT);

const server = app.listen(process.env.PORT || '3000', () => {
    const {address, port} = server.address();
    console.log('app listening at http://%s:%s', address, port);
});
