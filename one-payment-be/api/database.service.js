const path = require('path');
const Datastore = require('nedb');
const invoices = new Datastore({filename: path.resolve('./db/invoices.txt')});
const users = new Datastore({filename: path.resolve('./db/users.txt')});
const transactions = new Datastore({filename: path.resolve('./db/transactions.txt')});
const accounts = new Datastore({filename: path.resolve('./db/accounts.txt')});

async function init() {
    await loadInvoices();
    await loadInvoicesIndexes();
    await loadUsers();
    await loadTransactions();
    await loadAccounts();
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

async function loadTransactions() {
    return new Promise((resolve, reject) => {
        transactions.loadDatabase(err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function loadAccounts() {
    return new Promise((resolve, reject) => {
        accounts.loadDatabase(err => {
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

async function getUserById(id) {
    return new Promise((resolve, reject) => {
        users.find({_id: id}, (err, result) => {
            if (err) {
                reject(err);
            } else {
                result.forEach(item => {
                    item.id = item._id;
                    delete item._id;
                });

                resolve(result[0] || null);
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
                newDoc.id = newDoc._id;
                newDoc.amount = newDoc.amount.toFixed(2);
                delete newDoc._id;
                resolve(newDoc);
            }
        });
    });
}

async function getInvoicesByUserId(uid) {
    return new Promise((resolve, reject) => {
        invoices.find({uid}, (err, result) => {
            if (err) {
                reject(err);
            } else {
                result.forEach(item => {
                    item.id = item._id;
                    item.amount = item.amount.toFixed(2);
                    delete item._id;
                });

                resolve(result);
            }
        });
    });
}

async function getInvoiceById(id) {
    return new Promise((resolve, reject) => {
        invoices.find({_id: id}, (err, result) => {
            if (err) {
                reject(err);
            } else if (!result.length) {
                resolve(null);
            } else {
                const item = result[0];
                item.id = item._id;
                item.amount = item.amount.toFixed(2);
                delete item._id;
                resolve(item);
            }
        });
    });
}

async function createTransaction(data) {
    return new Promise((resolve, reject) => {
        transactions.insert(data, (err, newDoc) => {
            if (err) {
                reject(err);
            } else {
                newDoc.id = newDoc._id;
                newDoc.amount = newDoc.amount.toFixed(2);
                delete newDoc._id;
                resolve(newDoc);
            }
        });
    });
}

async function getTransactions(filter) {
    return new Promise((resolve, reject) => {
        transactions.find(filter, (err, result) => {
            if (err) {
                reject(err);
            } else {
                result.forEach(item => {
                    item.id = item._id;
                    item.created = new Date(item.ts).toISOString();
                    item.amount = item.amount.toFixed(2);
                    delete item._id;
                    delete item.ts;
                });

                resolve(result);
            }
        });
    });
}

async function getBankAccountsByUserId(uid) {
    return new Promise((resolve, reject) => {
        accounts.find({uid}, (err, result) => {
            if (err) {
                reject(err);
            } else {
                result.forEach(item => {
                    item.id = item._id;
                    item.balance = item.balance.toFixed(2);
                    delete item._id;
                });

                resolve(result);
            }
        });
    });
}

async function createBankAccount(data) {
    return new Promise((resolve, reject) => {
        accounts.insert(data, (err, newDoc) => {
            if (err) {
                reject(err);
            } else {
                newDoc.id = newDoc._id;
                newDoc.balance = newDoc.balance.toFixed(2);
                delete newDoc._id;
                resolve(newDoc);
            }
        });
    });
}

module.exports = {
    init,
    createInvoice,
    getInvoicesByUserId,
    getInvoiceById,
    createUser,
    getUserById,
    createTransaction,
    getTransactions,
    getBankAccountsByUserId,
    createBankAccount
};