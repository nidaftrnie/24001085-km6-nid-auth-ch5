const jsonwebtoken = require("jsonwebtoken");

exports.getTokenFromHeaders = (headers) => {
  const { authorization } = headers;
  const splittedAuth = authorization.split(" ");
  if (!authorization || authorization == "") {
    throw new Error("Unauthorized!");
  }
  if (splittedAuth.length < 2) {
    throw new Error("Unauthorized!");
  }

  if (splittedAuth[0] != "Bearer") {
    throw new Error("Unauthorized!");
  }

  const token = splittedAuth[1];

  return token;
};

exports.extractToken = (token) => {
  const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

  return decoded;
};
