
const { usernamesArray } = require("./app.js");

function checkexist(req, res, next) {
  if (usernamesArray.includes(req.body.fname)) {
    return res
      .status(400)
      .send("Username already exists. Please choose a different username.");
  }
  else{
    next()
  }
}
