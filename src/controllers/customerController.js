const Customer = require('../models/Customer');
const { createNewCustomer, createNewCustomers } = require('../services/customerServices');
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

module.exports = {
    postCreateCustomer,
    postCreateArrayCustomer
}