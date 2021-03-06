const {getInvoiceById, createTransaction} = require('./database.service');

module.exports = async function (req, res, next) {
    const invoiceId = req.params.id;
    const body = req.body || {};
    body.amount = parseFloat(body.amount);

    if (!invoiceId) {
        res.status(400).json({error: 'No invoice id'});
        return;
    }

    const invoice = await getInvoiceById(invoiceId);
    if (!invoice) {
        res.status(400).json({error: 'Invoice not found'});
        return;
    }

    if (!invoice.isAmountOptional && !body.amount) {
        res.status(400).json({error: 'Amount is required'});
        return;
    }

    const data = {
        invoiceId,
        payerId: req.uid,
        payeeId: invoice.uid,
        amount: invoice.isAmountOptional ? body.amount : parseFloat(invoice.amount),
        ts: new Date().getTime()
    };

    const transaction = await createTransaction(data);
    transaction.redirectUrl = `https://example.com/${transaction.id}`;

    res.status(200).json(transaction);
};