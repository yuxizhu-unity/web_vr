const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('./baiyulan'));


app.get('*', (req, res, next) => {
    console.log(req.originalUrl);

    if (req.originalUrl == '/') {
        res.redirect(302, '/baiyulan/tour.html');

    } else if (!(req.originalUrl || '').startsWith('/baiyulan')) {
        return res.status(404).end('not found');
        
    } else {
        res.sendFile(path.join(__dirname, req.originalUrl), (sendErr) => {
            if (sendErr) {
                res.status(404).end('not found');
            }
        });
    }
});


console.log('server environment: %s, port: %s', process.env.NODE_ENV, process.env.PORT);

const server = app.listen(process.env.PORT || '3000', () => {
    const {address, port} = server.address();
    console.log('app listening at http://%s:%s', address, port);
});
