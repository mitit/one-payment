const {getUserById, getBankAccountsByUserId, getTransactions} = require('./database.service');

module.exports = async function (req, res, next) {
    const profile = await getUserById(req.uid);
    const accounts = await getBankAccountsByUserId(req.uid);
    const transactions = await getTransactions({payeeId: req.uid});

    res.status(200).json({...profile, accounts, transactions});
};