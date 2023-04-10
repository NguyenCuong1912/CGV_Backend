const bcrypt = require('bcrypt')
const saltRounds = 10;
const hashpassword = (password) => {
    return hash = bcrypt.hashSync(password, saltRounds);
}
const comparepassword = (password, hashpass) => {
    return bcrypt.compareSync(password, hashpass);
}
module.exports = {
    hashpassword,
    comparepassword
}