
const express = require("express");
const mongoose = require("mongoose");
const commentRouter = require("./router/commentRouter");
const config = require("./config/config");
const path = require("path");
const app = express();

//middleware
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
 
 //en till middleware för css
 
 //router 
app.use(commentRouter);


//listen to port 
const port = process.env.PORT || 8000;
const options ={
    useUnifiedTopology: true, 
    useNewUrlParser: true
}
mongoose.connect(config.databaseURL,options ).then(()=> {
    console.log("Successful")
    //app is listening to port 
    app.listen(port);
})
