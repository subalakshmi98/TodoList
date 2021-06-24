const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
var items=[];
var workitems=[];

app.get("/", function(req,res){
  var today=new Date();
  var currentDay=today.getDay();
  var options ={
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
var day=today.toLocaleDateString("en-US",options);
res.render("list",{listTitle: day,addname: items});
});

app.get("/work", function(req,res){
  res.render("list",{listTitle: "work",addname: workitems});
})
app.post("/", function(req,res){
  var list = req.body.listname;
  if(req.body.list==="work"){
    workitems.push(list);
    res.redirect("/work");
  }else{
    items.push(list);
    res.redirect("/");
  }

});

app.get("/about", function(req, res){
  res.render("about");
})

app.listen("3000", function(req,res){
  console.log("server is running");
});
