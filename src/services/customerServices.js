const Customer = require('../models/Customer');

const createNewCustomer = async (customerData) => {
    let result = await Customer.create(customerData);

    return result;
}

// Create array customer
const createNewCustomers = async (customerDataList) => {
    let result = await Customer.insertMany(customerDataList);
    return result;
}

module.exports = {
    createNewCustomer,
    createNewCustomers
}