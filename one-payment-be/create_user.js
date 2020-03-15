const {init, createUser} = require('./api/database.service');
const name = process.argv[2];

if (!name) {
    console.log('No name passed');
    return;
}

init().then(() => {
    createUser({name}).then(result => {
        console.log('created', result);
    }, err => {
        console.log('error', err);
    });
});
