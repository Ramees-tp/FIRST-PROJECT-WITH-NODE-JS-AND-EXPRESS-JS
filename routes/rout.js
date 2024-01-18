const express = require("express");
const router = express.Router();
const {
  homeController,
  loginController,
  signupController,
  logout,
  postLogin,
  postSignup,
  slashlogin,
} = require("../controllers/mainController");

router.get("/", slashlogin);
router.get("/loggin", loginController);
router.get("/home", homeController);
router.get("/signup", signupController);
router.get("/logout",logout)
router.post("/loggin", postLogin);
router.post("/signup", postSignup);

module.exports = router;

