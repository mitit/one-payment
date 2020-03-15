const qrCode = require('qrcode');
const {createInvoice} = require('./database.service');

module.exports = async function (req, res, next) {
    const body = req.body || {};
    const data = {
        uid: req.uid,
        amount: parseFloat(body.amount) || 0,
        isAmountOptional: body.hasOwnProperty('isAmountOptional') ? body.isAmountOptional : false,
        comment: body.comment || ''
    };

    const invoice = await createInvoice(data);
    invoice.url = `https://example.com/${invoice.id}`;
    invoice.qr = await generateQr(invoice.url);
    delete invoice.uid;

    res.status(200).json(invoice);
};

async function generateQr(url) {
    return new Promise((resolve, reject) => {
        qrCode.toDataURL(url, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        })
    });
}