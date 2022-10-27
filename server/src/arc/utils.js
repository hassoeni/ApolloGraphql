const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';

function getTokenPayload(token) {
    return jwt.verify(token, APP_SECRET)
}

function getUserId(req, authToken) {
    if (req) {
        const authHeader = req.headers.authorization 
        if (authHeader) {
            const token = authHeader.replace('Bearer ', '')
            if (!token) {
                throw new Error('no token')
            }
            const {gebruikerId} = getTokenPayload(authToken) 
            return gebruikerId
        }
    }
    throw new Error('not authorized')
}

module.exports = {
    APP_SECRET, 
    getUserId
}