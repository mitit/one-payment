const fs = require('fs');
const path = require('path');

module.exports = async function (req, res, next) {
    const file1 = path.resolve('./example-1.png');

    res.status(200).json({
        id: 1,
        amount: 100,
        isAmountOptional: false,
        comment: 'test 1',
        url: 'https://example.com/1',
        qr: base64_encode(file1)
    });
};

function base64_encode(file) {
    const bitmap = fs.readFileSync(file);
    const base64 = new Buffer(bitmap).toString('base64');
    return `data:image/png;base64,${base64}`;
}