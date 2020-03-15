const {getInvoiceById, createTransaction} = require('./database.service');

module.exports = async function (req, res, next) {
    const invoiceId = req.params.id;
    const body = req.body || {};

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
        amount: invoice.isAmountOptional ? body.amount : invoice.amount,
    };

    const transaction = await createTransaction(data);
    transaction.redirectUrl = `https://example.com/${transaction.id}`;

    res.status(200).json(transaction);
};