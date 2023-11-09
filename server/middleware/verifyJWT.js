const jwtAuth = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
  
    jwtAuth.verify(token, 'm@s#09@b$su#san$ib', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }
  
      req.id = user;
      next();
    });
  };

module.exports = verifyToken;
