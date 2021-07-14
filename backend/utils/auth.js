const jwt = require("jsonwebtoken");
exports.createJWT = (email, adminId, duration) => {
  const payload = {
    email,
    adminId,
    duration,
  };
  return jwt.sign(payload, process.env.TOKEN_KEY);
};
