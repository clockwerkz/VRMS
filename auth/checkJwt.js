const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');


const { PORT } = require("../config/database");

// Set up Auth0 configuration
const authConfig = {
    domain: "YOUR_DOMAIN",
    audience: "YOUR_API_IDENTIFIER"
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-64n7s4br.auth0.com/.well-known/jwks.json'
  }),
  audience: `http://localhost:${PORT}/`,
  issuer: 'https://dev-64n7s4br.auth0.com/',
  algorithms: ['RS256']
});

module.exports = checkJwt;