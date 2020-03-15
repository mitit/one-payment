const {getUserById, getBankAccountsByUserId} = require('./database.service');

module.exports = async function (req, res, next) {
    const profile = await getUserById(req.uid);
    const accounts = await getBankAccountsByUserId(req.uid);

    res.status(200).json({...profile, accounts});
};