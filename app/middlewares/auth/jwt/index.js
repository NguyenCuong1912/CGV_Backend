const jwt = require('jsonwebtoken')

const setToken = (email, fullname, role) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            email,
            fullname,
            role
        }
    }, 'secret');
    return token;
}


module.exports = { setToken }