const util = require("util");
const jwt = require("jsonwebtoken");

exports.sign = util.promisify(jwt.sign);
exports.verify = util.promisify(jwt.verify);
