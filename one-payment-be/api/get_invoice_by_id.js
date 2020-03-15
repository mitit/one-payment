const qrCode = require('qrcode');
const {getInvoiceById, getUserById} = require('./database.service');

module.exports = async function (req, res, next) {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({error: 'No id'});
        return;
    }

    const invoice = await getInvoiceById(id);
    if (!invoice) {
        res.status(404).json({error: 'Invoice not found'});
        return;
    }
    const store = await getUserById(invoice.uid);

    invoice.url = `https://example.com/${invoice.id}`;
    invoice.qr = await generateQr(invoice.url);
    invoice.store = store;
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