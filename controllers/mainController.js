const loggedPersons = require("../models/mainmodel");
let errors = "";

let obj = {
  slashlogin: (req, res) => {
    res.redirect("/loggin");
  },
  loginController: (req, res) => {
    if (req.session.fname) {
      res.redirect("/home");
    } else {
      res.render("loggin", { errors: errors });
      errors = "";
    }
  },
  homeController: (req, res) => {
    res.render("index",{alluser:loggedPersons});
    
  },
  signupController: (req, res) => {
    if(req.session.fname){
      res.redirect("/home")
    }
    else{
      res.render("signup", { errors: errors });
      errors = "";
    }
  },
  logout: (req, res) => {
    
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      else{
        res.redirect('/loggin');
      }
    });
  },
  postLogin: (req, res) => {
    const { fname, pswrd } = req.body;
    const logcheck = loggedPersons.find((e) => {
      return e.fname === fname && e.pswrd === pswrd;
    });
    if (logcheck) {
      res.redirect("/home");

    } else {
      errors = `there is no account exist with username ${fname}`;
      res.redirect("/loggin");
    }
  },
  postSignup: (req, res) => {
    const { fname, mail, phone, pswrd } = req.body;
    
    const checkuser = loggedPersons.find((e) => {
      return e.mail === mail;
    });

    if (checkuser) {
      errors = `this user with ${mail} already exist`;
      res.redirect("/signup");
    } else {
      let newuser = {
        fname: fname,
        mail: mail,
        phone: phone,
        pswrd: pswrd,
      };

      loggedPersons.push(newuser);
      req.session.fname = fname;
      res.redirect("/home");
    }
    // loggedPersons.push(req.body);
    console.log(loggedPersons);
    // res.redirect("/home");
    //    res.sendStatus(201)
  },
};


module.exports = obj;


