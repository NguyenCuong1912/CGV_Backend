const jwt = require('jsonwebtoken')

const setToken = (email, fullname) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            email,
            fullname
        }
    }, 'secret');
    return token;
}
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'wrong-secret');
        return decoded.data
    } catch (err) {
        // err
    }
}

module.exports = { setToken, verifyToken }