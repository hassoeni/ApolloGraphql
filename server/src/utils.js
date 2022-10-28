const {verify} = require('jsonwebtoken')

const SUPER_SECRET_CODE = 'appsecret343'

function getUserId(context) {
    const authHeader = context.req.get('Authorization')
    if(authHeader) {
        const token = authHeader.replace('Bearer ', '')
        const verifiedToken = verify(token, APP_SECRET)
        return verifiedToken && Number(verifiedToken.userId)
    }
}

module.exports  = {
    SUPER_SECRET_CODE: SUPER_SECRET_CODE,
    getUserId: getUserId
}