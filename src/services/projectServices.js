const Project = require("../models/Project");

const createProject = async (data) => {
    let { type, name, startDate, endDate, description, userInfo, customerInfor, leader } = data;
    let projectData = { name, startDate, endDate, description, userInfo, customerInfor, leader };
    if (type === "empty project") {
        console.log(projectData);
        let result = await Project.create(projectData);
        return result;
    }
};

module.exports = {
    createProject
}