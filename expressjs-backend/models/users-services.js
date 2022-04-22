const mongoose = require("mongoose");
const userModel = require("./user");
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((error) => console.log(error));

async function getUsers(name, job) {
    let result;
    if((name !== undefined) & (job !== undefined)){
        result = await findUserByJobAndName(job, name);
    }
    else if (job !== undefined){
        result = await findUserByJob(job);
    }
    else if (name !== undefined){
        result = await findUserByName(name)
    }
    else{
        result = await userModel.find();
    }
    return result;
}

async function findUserById(id){
    try{
        return await userModel.findById(id);
    }
    catch (error){
        console.log(error);
        return undefined;
    }
}

async function addUser(user) {
    try {
        const userToAdd = new userModel(user);
        const savedUser = await userToAdd.save();
        return savedUser;
    } 
    catch (error) {
        console.log(error);
        return false;
    }
}

async function delUser(id) {
    try {
        const userToDel = await userModel.findByIdAndDelete(id);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

async function findUserByName(name) {
  return await userModel.find({ name: name });
}

async function findUserByJob(job) {
  return await userModel.find({ job: job });
}

async function findUserByJobAndName(job, name) {
    return await userModel.find({ job: job , name: name});
}

exports.getUsers = getUsers;
exports.findUserById = findUserById;
exports.addUser = addUser;
exports.delUser = delUser;