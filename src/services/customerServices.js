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

// GET all customers
const getCustomers = async () => {
    let result = await Customer.find({});

    return result;
}

const updateCustomerById = async (customerId, name, email, address) => {
    let customer = await Customer.updateOne(
        { _id: customerId },
        {
            name,
            email,
            address
        }
    );

    return customer;
};

const deleteCustomer = async (customerID) => {
    try {
        let result = await Customer.deleteById(customerID);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createNewCustomer,
    createNewCustomers,
    getCustomers,
    updateCustomerById,
    deleteCustomer
}