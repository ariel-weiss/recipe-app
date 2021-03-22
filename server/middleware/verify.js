const jwt = require('jsonwebtoken');


const verify = async (req, res, next) => {
    try {
        const token = req.headers.authorization;//.split(' ')[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
    } catch (error) {
        console.log(error);
    }
    next();
};

module.exports = verify;