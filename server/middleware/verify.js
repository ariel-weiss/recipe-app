const jwt = require('jsonwebtoken');


const verify = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        console.log(req);
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
            req.userEmail = decodedData?.email;
        } else {
            decodedData = jwt.decode(token);
            console.log(decodedData);
            req.userEmail = decodedData?.email;
        }
    } catch (error) {
        console.log(error);
    }
    next();
};

module.exports = verify;