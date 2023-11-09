const bcrypt= require("bcrypt");
//const { User } = require("../models/userSchema");
const { HospitalAdmin } = require("../models/hospitalAdminSchema");
const jwt = require("jsonwebtoken");


const hash = async (text, size) => {
    try {
        const salt = await bcrypt.genSalt(size);

        const hash = await bcrypt.hash(text, salt);

        return hash
    } catch(error) {
        console.log(error)
    }
}
const verifyLogin = async (username, password) => {
    try{
        const user = await HospitalAdmin.findOne({ username });
        if(!user){
            return {user:null,isValid:false}
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            return {user:null,isValid:false}
        }
        return {user,isValid}
    }catch(error){
        console.log(error)
        
    }
}
const jwtSign = async (id) => {
    try {
        const token = await jwt.sign({ id }, (process.env.JWT_SECRET|| "m@s#09@b$su#san$ib"),{expiresIn: "1h"});
        return token;
    } catch(error) {
        console.log(error)
    }
}


// controller functions
const init = async(req, res) => {
    res.send({ status: 200, message: "Server is up and running" }).status(200);
}
const login = async(req, res) => {
    try{
        const { username, password } = req.body;
        const {user,isValid} = await verifyLogin(username, password);
        if(isValid === false){
            res.send({ status: 401, message: "Invalid Credentials" }).status(401);
        }
        else{
            const token = await jwtSign(user.id);
            res.send({ status: 200, message: "User Logged In",  token,name : user.name}).status(200);
        }
    }catch(err){
        console.log(err)
        res.send({ status: 500, message: "Internal Server Error" , err}).status(500);
    }
    
};

const register = async(req, res) => {
    try {
        const { name, username, password, hName, hId } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new HospitalAdmin({ name, username, password : hashedPassword, hName,hId });
        await user.save();
        const user1 = await HospitalAdmin.findOne({ username });
        const token = await jwtSign(user1.id);
        res.send({ status: 200, message: "User Registered" ,token : token}).status(200);
    } catch (err) {
        res.send({ status: 500, message: "Internal Server Error" , err: err}).status(500);
    }
};

const logout = async(req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (token) {
        // Add the token to the blacklist
        res.status(200).json({ message: 'Logged out successfully' });
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
}

const verify = async(req, res) => {}

module.exports = { login, register,init,logout,verify };