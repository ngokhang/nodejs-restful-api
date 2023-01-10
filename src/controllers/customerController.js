const Customer = require('../models/Customer');
const { createNewCustomer, createNewCustomers, getCustomers, updateCustomerById, deleteCustomer } = require('../services/customerServices');
const { uploadSingleFile } = require('../services/fileService');

const postCreateCustomer = async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let image = (await uploadSingleFile(req.files.image)).finalName;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            EC: 400,
            data: null,
            message: 'No such file uploaded'
        })
    } else {
        let customerData = {
            name, address, phone, email, image, description
        };

        let result = await createNewCustomer(customerData);

        // console.log(result);
        return res.status(200).json({
            EC: 0,
            data: result,
            message: "Create successfully",
        });
    }
}

const postCreateArrayCustomer = async (req, res) => {
    try {
        let result = await createNewCustomers(req.body.customers);

        return res.status(200).json({
            EC: 0,
            data: result
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            EC: 400,
            message: JSON.stringify(error)
        });
    }
}

const getAllCustomers = async (req, res) => {
    try {
        let result = await getCustomers();

        return res.status(200).json({
            EC: 200,
            data: result
        })
    } catch (error) {
        console.log('>> Error: ', JSON.stringify(error));
        return res.send('Error');
    }
}

const putUpdateCustomerById = async (req, res) => {
    try {
        let { customerId, name, email, address } = req.body;
        let result = await updateCustomerById(customerId, name, email, address);
        console.log(result);
        return res.send('OK');
    } catch (error) {
        console.log('>> Error: ', JSON.stringify(error));
        return res.send('Error');
    }
};

const deleteCustomerById = async (req, res) => {
    let { id } = req.body;
    let result = await deleteCustomer(id);
    console.log(result);
    return res.send('OK');
}

module.exports = {
    postCreateCustomer,
    postCreateArrayCustomer,
    getAllCustomers,
    putUpdateCustomerById,
    deleteCustomerById
}