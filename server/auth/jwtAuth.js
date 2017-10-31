
import jwt from 'express-jwt';

// https://github.com/auth0/express-jwt
// https://github.com/auth0/node-jsonwebtoken
// https://github.com/request/request
// If the token is valid, req.user will be set with the JSON object decoded to be used by later middleware for authorization and access control

console.log('>>>>>>>> jwtAuth.js <<<<<<<<<<<<<');

export default function jwtAuth(req, res, next) {

  console.log('>>>>>>>> jwtAuth.js > export default function jwtAuth  <<<<<<<<<<<<<');

  next();

  // jwt({ secret: process.env.JWT_SECRET, userProperty: 'payload' })(req, res, next);

  /*
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    console.log(decoded.foo);
  });
  */
};

/*
export default function ensureAuthenticated(req, res, next) {

  if (req.isAuthenticated()) {
    console.log('>>>>>>>>>>> jwtAuth.js > ensureAuthenticated YES! <<<<<<<<<<<');
    return next();
  }

  console.log('>>>>>>>>>>>>>> jwtAuth.js >  ensureAuthenticated NO! <<<<<<<<<<<');
  res.redirect('');
};
*/