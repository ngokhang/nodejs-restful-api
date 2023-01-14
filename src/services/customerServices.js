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
const getCustomers = async (limit, page, name) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            result = await Customer.find({}).skip(offset).limit(limit).exec();
            if (name) {
                result = await Customer.find(
                    { "name": { $regex: '.*' + name + '.*' } }
                ).skip(offset).limit(limit).exec();
            } else {
                result = await Customer.find({}).skip(offset).limit(limit).exec();
            }
        } else {
            result = await Customer.find({});
        }

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
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
};

const deleteArrayCustomers = async (arrayID) => {
    try {
        if (!Array.isArray(arrayID) || arrayID.length === 0) return null;
        // soft delete Customer data
        // let result = await Customer.delete({ _id: { $in: arrayID } });
        // restore customer data 
        let result = await Customer.restore();
        return result;
    } catch (error) {
        console.log("Error >> ", error);
        return null;
    }
}

module.exports = {
    createNewCustomer,
    createNewCustomers,
    getCustomers,
    updateCustomerById,
    deleteCustomer,
    deleteArrayCustomers
}