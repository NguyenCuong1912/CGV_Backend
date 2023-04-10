const { Accounts } = require("../models/Accounts.model");
const { hashpassword, comparepassword } = require('../middlewares/bcrypt/index')
const SignUp = async (req, res) => {
    const { email, password, fullname, phonenumber } = req.body;
    try {
        const checkExistsAccount = await Accounts.findOne({ email })
        const hashpass = hashpassword(password)
        if (checkExistsAccount) {
            res.status(401).send("Email is exists")
        }
        const newAccount = await Accounts.create({ email, password: hashpass, fullname, phonenumber });
        res.status(201).send(newAccount)
    } catch (error) {
        res.status(500).send(error)
    }
}
const SignIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const checkExistsAccount = await Accounts.findOne({ email })
        if (checkExistsAccount && checkExistsAccount.active) {
            console.log("a")
            if (checkExistsAccount.block) {
                res.status(401).send("Account is Block !")
            }
            if (comparepassword(password, checkExistsAccount.password)) {
                res.status(200).send({
                    Mess: "Login Success",
                    accountLogin: checkExistsAccount
                })
            } else {
                res.status(200).send("Password incorrect")
            }
        } else {
            res.status(401).send("Account is not exists !")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { SignUp, SignIn }