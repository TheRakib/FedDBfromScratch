
const express = require("express");
const mongoose = require("mongoose");
const commentRouter = require("./router/commentRouter");
const config = require("./config/config")
const app = express();
//middleware

//router 
app.use(commentRouter)


//listen to port 
const port = process.env.PORT || 8001;
const options ={
    useUnifiedTopology: true, 
    useNewUrlParser: true
}
mongoose.connect(config.databaseURL,options ).then(()=> {
    console.log("Successful")
    //app is listening to port 
    app.listen(port);
})
