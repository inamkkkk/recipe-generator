const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

exports.generateToken = (username) => {
  return jwt.sign({ username: username }, jwtSecret, { expiresIn: '1h' });
};

exports.verifyToken = (token, callback) => {
  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, user);
  });
};