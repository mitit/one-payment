const {init, getUserById, createBankAccount} = require('./api/database.service');

(async function() {
    const uid = process.argv[2];
    const balance = parseFloat(process.argv[3]);
    const iban = process.argv[4];

    if (!uid) {
        console.log('User id is required');
        return;
    }

    if (!balance) {
        console.log('Balance is required');
        return;
    }

    if (!iban) {
        console.log('IBAN is required');
        return;
    }

    await init();
    const user = getUserById(uid);
    if (!user) {
        console.log('User not found');
        return;
    }

    const {id} = await createBankAccount({balance, uid, iban});
    console.log(`Created: ${id}`);
})();