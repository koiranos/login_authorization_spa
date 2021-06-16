const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 5000;

// creation of jwt endpoint
app.post("/api/login", (req, res) => {
  // get user input
  const user = {
    id: 1,
    username: req.query.username,
    password: req.query.password,
  };

  // create token
  /* the structure of jwt object is:
   * {
      id: (number)
      username: (string)
      password: (string)
      expiredIn: (number)
      token: (string)
   }
  */
  jwt.sign(user, "thisIsTheSecretKey", { expiresIn: "120s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

// get username by decoding token
app.post("/api/user", verifyToken, (req, res) => {
  jwt.verify(req.token, "thisIsTheSecretKey", (err, authData) => {
    if (err) {
      res.json({
        error: `getuser failed`,
      });
    } else {
      res.json({
        user: authData.username,
        authData,
      });
    }
  });
});

// token verifycation middleware
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.json({
      error: `verifycation failed`,
    });
  }
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
