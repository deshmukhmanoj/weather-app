import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import "../src/db/db.js";
import student from "../src/db/db.js";
const _dirname = fileURLToPath(import.meta.url);
const template = path.join(_dirname, "../../template/views");
const partials = path.join(_dirname, "../../template/partials");
const staticpath = path.join(_dirname, "/../../public");
console.log(partials);
const port = process.env.port || 1210;
const app = express();
app.set("view engine", "hbs");
app.set("views", template);
app.use(express.static(staticpath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
hbs.registerPartials(partials);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => { 
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/service", (req, res) => {
  
  res.render("service");
})
app.get("/about", (req, res) => {
  
  res.render("about");
})
app.get("/weather", (req, res) => {
  res.render("weather");
})
app.post("/register", async (req, res) => {
  try {
    const password=req.body.password;
    const cpassword=req.body.confirmpassword;
    if(password===cpassword){
      const registered =new student({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
         email:req.body.email,
         gender:req.body.gender,
         phone:req.body.phone,
         age:req.body.age,
         password:password,
         confirmpassword:cpassword,
        })
        const result=await registered.save();
        res.status(201).render("index")
        console.log(result)
    }else{
   res.send("password does not match")
    }

  }catch (err) {
    res.status(404);
    console.log(err)  
  }
});

app.listen(port, () => {
  console.log("listening on port 1210......");
});
