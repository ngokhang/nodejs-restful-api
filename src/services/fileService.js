const path = require('path');

const uploadSingleFile = async (fileObject) => {
    let baseName = fileObject.name;
    let fileName = (fileObject.name).split('.').join('-' + Date.now() + '.');
    let uploadPath = path.join(__dirname, `../public/file_upload/${fileName}`);
    try {
        await fileObject.mv(uploadPath);
        return {
            status: "OK",
            path: baseName,
            finalName: fileName,
        };
    } catch (error) {
        return {
            status: "Failed",
            path: null,
            message: JSON.stringify(err)
        };
    }
};

const uploadMutipleFile = async (fileObjectArray) => {
    let fileObjectsName = [];

    fileObjectArray.forEach(async (file) => {
        let baseName = file.name;
        let fileName = (file.name).split('.').join('-' + Date.now() + '.');
        let uploadPath = path.join(__dirname, `../public/file_upload/${fileName}`);
        fileObjectsName.push({
            status: "OK",
            path: baseName,
            finalName: fileName,
        });
        try {
            await file.mv(uploadPath);
        } catch (error) {
            return {
                status: "Failed",
                path: null,
                message: JSON.stringify(err)
            };
        }
    });

    return {
        status: "Succesfully",
        path: fileObjectsName,
        message: "Upload Successfully"
    };
};

module.exports = {
    uploadSingleFile,
    uploadMutipleFile
}