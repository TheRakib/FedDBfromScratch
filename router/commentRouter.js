const express = require("express");
const Comment = require("../model/comment")

const router = express.Router();


//comment(data) och ska visa den till comment router
//create
//skapa comment med post router och en ejs input fält (för torsdag)
router.get("/createcomment", async (req, res)=>
{
const comment =new Comment({
        text: "Hej hej", 
        author:"Kalle"
    })
 const response= await comment.save();
  console.log(response)
  res.send("data created successfully")


  //new Comment({text:"testdata", author:"authorname"}).save();
})
    

router.get("/comment", async (req, res) => {
const comments = await Comment.find()
 res.send(comments);
}
)

module.exports = router;
/* //create 
new Modelnamn(  {ettobject}).save()
// find/read 
Modelnamn.find()
 */