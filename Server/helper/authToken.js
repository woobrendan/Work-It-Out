const jwt = require("jsonwebtoken");
module.exports = function authenticateToken(req, res, next) {
  // update req.path
  if (req.path === "/login") {
    next();
    return;
  }

  // Authorization: Bearer <token>
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  //valid token confirmed. verify token is not expired
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
