const Project = require('../models/Project');
const { createProject } = require('../services/projectServices');

const postCreateNewProject = async (req, res) => {
    let dataProject = req.body;
    let result = await createProject(dataProject);
    console.log(result);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}



module.exports = {
    postCreateNewProject
};