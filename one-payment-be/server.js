const express = require('express');
const bodyParser = require('body-parser');
const databaseService = require('./api/database.service');
const app = express();
const port = 4000;

const server = app
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
    .post('/public/invoice/:id/pay', checkSession, require('./api/create_transaction'));

databaseService.init().then(() => {
    server.listen(port, () => console.log(`App listening on port ${port}!`));
}, err => {
    throw new Error(err);
});

async function checkSession(req, res, next) {
    if (req.method === 'OPTIONS' || req.originalUrl.startsWith('/login')) {
        next();
        return;
    }

    const sid = req.headers.Authorization;
    if (!sid) {
        req.uid = 'EuFvHEGhsRcfSKIt';
        console.log('NO AUTH HEADER!');
        // res.status(401).json({error: 'INVALID_SID'});
        // return;
    }

    next();
}