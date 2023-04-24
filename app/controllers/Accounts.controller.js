const { Account } = require("../models/Accounts.model");
const {
  hashpassword,
  comparepassword,
} = require("../middlewares/bcrypt/index");
const { setToken } = require("../middlewares/auth/jwt");
const { KeyConst } = require("../constants");
const { resData } = require("../constants/status");
const { Role } = require("../models/Roles.model");
const { RoleConst, Status } = KeyConst;
const SignUp = async (req, res) => {
  const { email, password, fullname, phonenumber, role } = req.body;
  try {
    const checkExistsAccount = await Account.findOne({ email });
    const hashpass = hashpassword(password);
    if (checkExistsAccount) {
      res.status(Status.data_exists).send("Email is exists");
    } else {
      // ! check role when add
      let newAccount = {};
      // ! when signup
      if (!!role) {
        newAccount = await Account.create({
          email,
          password: hashpass,
          fullname,
          phonenumber,
          role,
        });
      } else {
        const _role = await Role.findOne({
          role_type: RoleConst.ROLE_CLINET.type,
        });
        newAccount = await Account.create({
          email,
          password: hashpass,
          fullname,
          phonenumber,
          role: _role,
        });
      }
      res.status(Status.created).send(newAccount);
    }
  } catch (error) {
    res.status(Status.sever_error).send(error);
  }
};
const SignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkExistsAccount = await Account.findOne({ email }).populate(
      "role"
    );
    if (checkExistsAccount && checkExistsAccount.active) {
      if (checkExistsAccount.block) {
        res.status(Status.forbidden).send("Account is Block !");
      } else {
        if (comparepassword(password, checkExistsAccount.password)) {
          const token = setToken(
            email,
            checkExistsAccount.fullname,
            checkExistsAccount.role.role_type
          );
          res.status(Status.success).send({
            Mess: "Login Success",
            token: token,
            accountLogin: checkExistsAccount,
          });
        } else {
          res.status(Status.data_exists).send("Password incorrect");
        }
      }
    } else {
      res.status(Status.data_exists).send("Account is not exists !");
    }
  } catch (error) {
    res.status(Status.sever_error).send(error);
  }
};
const ReadAccounts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { role } = req.account.data;
  try {
    let listAccounts = [];
    if (role === RoleConst.ROLE_ADMIN.type) {
      listAccounts = await Account.find({ active: true })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("role");
    }
    // if (role === ROLE_STAFF.type) {
    //     listAccounts = await Account.find({ role: ROLE_CLINET.type }).populate('role')
    // }
    // res.status(Status.success).send(listAccounts)
    resData(res, Status.success, listAccounts);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Account.findOne({ _id: id, active: true }).populate(
      "role"
    );
    resData(res, Status.success, account);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const UpdateAccount = async (req, res) => {
  const { file, body, detail } = req;
  const { password, fullname, phonenumber, point } = body;
  try {
    if (!comparepassword(password, detail.password)) {
      detail.password = hashpassword(password);
    }
    detail.fullname = fullname;
    detail.phonenumber = phonenumber;
    detail.point = point;
    if (file?.path !== detail.avatar) {
      const avatar = await file.path.replace(/\\/g, "/");
      detail.avatar = avatar;
    }
    await detail.save();
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};

module.exports = { SignUp, SignIn, ReadAccounts, ReadAccount, UpdateAccount };
