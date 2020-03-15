const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app
    .use(bodyParser.json())
    .all('*', (req, res, next) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Headers', '*');
        res.set('Access-Control-Allow-Methods', '*');
        next();
    })
    .get('/invoices', checkSession, require('./api/get_invoices'))
    .post('/invoices', checkSession, require('./api/create_invoice'))
    .get('/public/invoice/:id', checkSession, require('./api/get_invoice_by_id'))
    .post('/public/invoice/:id/pay', checkSession, require('./api/create_transaction'))
    .listen(port, () => console.log(`App listening on port ${port}!`));

async function checkSession(req, res, next) {
    if (req.method === 'OPTIONS' || req.originalUrl.startsWith('/login')) {
        next();
        return;
    }

    const sid = req.headers.Authorization;
    if (!sid) {
        console.log('NO AUTH HEADER!');
        // res.status(401).json({error: 'INVALID_SID'});
        // return;
    }

    next();
}