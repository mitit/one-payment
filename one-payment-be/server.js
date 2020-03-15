const express = require('express');
const bodyParser = require('body-parser');
const {init: initDatabase, getUserById} = require('./api/database.service');
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

initDatabase().then(() => {
    server.listen(port, () => console.log(`App listening on port ${port}!`));
}, err => {
    throw new Error(err);
});

async function checkSession(req, res, next) {
    if (req.method === 'OPTIONS' || req.originalUrl.startsWith('/login')) {
        next();
        return;
    }

    const uid = req.headers.authorization;
    if (!uid) {
        res.status(401).json({error: 'Authorization header is required'});
        return;
    }

    const user = await getUserById(uid);
    if (!user) {
        res.status(401).json({error: 'Incorrect Authorization header'});
        return;
    }

    req.uid = uid;
    next();
}