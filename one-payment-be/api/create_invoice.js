const fs = require('fs');
const path = require('path');

module.exports = async function (req, res, next) {
    const body = req.body || {};
    const file1 = path.resolve('./example-888.png');

    console.log(body);
    res.status(200).json([
        {
            id: 888,
            amount: body.amount || 0,
            isAmountOptional: body.isAmountOptional || false,
            comment: body.comment || '',
            url: 'https://example.com/888',
            qr: base64_encode(file1)
        },
    ]);
};

function base64_encode(file) {
    const bitmap = fs.readFileSync(file);
    const base64 = new Buffer(bitmap).toString('base64');
    return `data:image/png;base64,${base64}`;
}