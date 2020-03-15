const qrCode = require('qrcode');
const {getInvoicesByUserId} = require('./database.service');

module.exports = async function (req, res, next) {
    const invoices = await getInvoicesByUserId(req.uid);
    for (let i = 0; i < invoices.length; ++i) {
        const item = invoices[i];
        item.url = `https://example.com/${item.id}`;
        item.qr = await generateQr(item.url);
    }

    res.status(200).json(invoices);
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