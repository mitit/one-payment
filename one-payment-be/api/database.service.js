const path = require('path');
const Datastore = require('nedb');
const invoices = new Datastore({filename: path.resolve('./db/invoices.txt')});
const users = new Datastore({filename: path.resolve('./db/users.txt')});

async function init() {
    await loadInvoices();
    await loadInvoicesIndexes();
    await loadUsers();
    return true;
}

async function loadInvoices() {
    return new Promise((resolve, reject) => {
        invoices.loadDatabase(err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function loadInvoicesIndexes() {
    return new Promise((resolve, reject) => {
        invoices.ensureIndex({fieldName: 'uid'}, err => {
            if (err) {
                throw new Error(err);
            } else {
                resolve();
            }
        });
    });
}

async function loadUsers() {
    return new Promise((resolve, reject) => {
        users.loadDatabase(err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// ----------------------------
async function createUser(data) {
    return new Promise((resolve, reject) => {
        users.insert(data, (err, newDoc) => {
            if (err) {
                reject(err);
            } else {
                resolve(newDoc);
            }
        });
    });
}

async function createInvoice(data) {
    return new Promise((resolve, reject) => {
        invoices.insert(data, (err, newDoc) => {
            if (err) {
                reject(err);
            } else {
                resolve(newDoc);
            }
        });
    });
}

function getUserInvoices(uid) {
    invoices.find({uid: 'solar'}, function (err, docs) {
        // docs is an array containing documents Mars, Earth, Jupiter
        // If no document is found, docs is equal to []
    });
}

module.exports = {
    init,
    createInvoice,
    createUser
};