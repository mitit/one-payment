module.exports = async function (req, res, next) {
    const body = req.body || {};

    res.status(200).json([
        {
            id: 900,
            redirectUrl: 'https://example.com/pay'
        },
    ]);
};