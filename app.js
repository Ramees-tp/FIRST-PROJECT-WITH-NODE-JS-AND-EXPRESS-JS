const express = require("express");
const app = express();
const port = 916;
// const loggedPersons = require('./models/mainmodel')
const Router=require("./routes/rout")
const session =require("express-session")
const noCache = require("nocache")
app.use(noCache())
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:"secret-key",
  resave:false,
  saveUninitialized:true,
  // cookie:{
  // maxAge:500000
  // }
}))
app.use("/",Router)


// app.use(express.static('public'));
 
app.listen(port, () => {
  console.log(`server is rinning at http://localhost:${port}`);
});
